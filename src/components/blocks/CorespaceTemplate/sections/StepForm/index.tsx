'use client'

import type { Form as FormType } from '@root/payload-types'

import { fields as cmsFields } from '@components/CMSForm/fields'
import { RichText } from '@components/RichText/index'
import Form from '@forms/Form/index'
import { useForm, useFormProcessing } from '@forms/Form/context'
import { getCookie } from '@root/utilities/get-cookie'
import { usePathname, useRouter } from 'next/navigation'
import React, { useCallback, useMemo, useState } from 'react'
import { toast } from 'sonner'

import classes from './index.module.scss'
import { SelectCards } from './SelectCards'

type SidebarPoint = {
  id?: null | string
  text: string
}

export type CorespaceStepFormProps = {
  blockType?: 'corespaceStepForm'
  eyebrow?: null | string
  form?: FormType | null | string
  heading?: null | string
  id?: null | string
  sidebarBody?: null | string
  sidebarPoints?: SidebarPoint[] | null
  sidebarTitle?: null | string
}

type FormField = NonNullable<FormType['fields']>[number]
type SteppableField = Exclude<FormField, { blockType: 'message' }>

const isSteppableField = (field: FormField): field is SteppableField => {
  return field.blockType !== 'message' && 'name' in field && Boolean(field.name)
}

const buildInitialState = (fields: FormField[]) => {
  const state: Record<
    string,
    { errorMessage: string; initialValue: unknown; valid: boolean; value: unknown }
  > = {}

  fields.forEach((field) => {
    if (!isSteppableField(field)) {
      return
    }

    const defaultValue = 'defaultValue' in field ? field.defaultValue : undefined
    state[field.name] = {
      errorMessage: 'This field is required.',
      initialValue: defaultValue ?? undefined,
      valid: !field.required || defaultValue !== undefined,
      value: defaultValue ?? undefined,
    }
  })

  return state
}

const StepField: React.FC<{
  field: SteppableField
  form: FormType
  isActive: boolean
  isProcessing: boolean
}> = ({ field, form, isActive, isProcessing }) => {
  const FieldComponent = cmsFields?.[field.blockType]
  const useSelectCards = field.blockType === 'select'

  return (
    <div
      aria-hidden={!isActive}
      className={classes.stepBody}
      hidden={!isActive}
    >
      {useSelectCards ? (
        <SelectCards
          label={field.label}
          name={field.name}
          options={field.options}
          path={field.name}
          required={field.required}
        />
      ) : (
        <>
          {'label' in field && field.label && <p className={classes.question}>{field.label}</p>}
          {FieldComponent ? (
            <div className={classes.fieldWrap}>
              <FieldComponent
                form={form}
                path={field.name}
                {...field}
                disabled={isProcessing}
                label={null}
              />
            </div>
          ) : null}
        </>
      )}
    </div>
  )
}

const StepNavigator: React.FC<{
  form: FormType
  steps: SteppableField[]
}> = ({ form, steps }) => {
  const [stepIndex, setStepIndex] = useState(0)
  const [stepError, setStepError] = useState<string | null>(null)
  const { dispatchFields, getField, handleSubmit } = useForm()
  const isProcessing = useFormProcessing()

  const totalSteps = steps.length
  const currentField = steps[stepIndex]
  const isLastStep = stepIndex === totalSteps - 1
  const progress = totalSteps > 0 ? ((stepIndex + 1) / totalSteps) * 100 : 0

  const currentLabel =
    currentField && 'label' in currentField && currentField.label
      ? currentField.label
      : 'Continue'

  const validateCurrentStep = useCallback(() => {
    if (!currentField) {
      return true
    }

    const fieldState = getField(currentField.name)
    const value = fieldState?.value
    const empty =
      value === undefined ||
      value === null ||
      value === '' ||
      (Array.isArray(value) && value.length === 0)

    if (currentField.required && empty) {
      dispatchFields({
        type: 'UPDATE',
        payload: {
          errorMessage: 'This field is required.',
          path: currentField.name,
          valid: false,
          value: value ?? '',
        },
      })
      setStepError('Please complete this step to continue.')
      return false
    }

    setStepError(null)
    return true
  }, [currentField, dispatchFields, getField])

  const goNext = useCallback(() => {
    if (!validateCurrentStep()) {
      return
    }

    if (isLastStep) {
      if (typeof handleSubmit === 'function') {
        void handleSubmit({
          preventDefault() {},
          stopPropagation() {},
        } as React.ChangeEvent<HTMLFormElement>)
      }
      return
    }

    setStepIndex((index) => Math.min(index + 1, totalSteps - 1))
  }, [handleSubmit, isLastStep, totalSteps, validateCurrentStep])

  const goBack = useCallback(() => {
    setStepError(null)
    setStepIndex((index) => Math.max(index - 1, 0))
  }, [])

  if (!currentField) {
    return null
  }

  return (
    <div className={classes.panel}>
      <div className={classes.stepMeta}>
        <p className={classes.stepCount}>
          Step <strong>{stepIndex + 1}</strong> of {totalSteps}
        </p>
        <p className={classes.stepHint}>{currentLabel}</p>
      </div>

      <div className={classes.progressTrack} aria-hidden>
        <div className={classes.progressFill} style={{ width: `${progress}%` }} />
      </div>

      {/* Keep every field mounted so values survive step changes */}
      {steps.map((field, index) => (
        <StepField
          field={field}
          form={form}
          isActive={index === stepIndex}
          isProcessing={isProcessing}
          key={field.name}
        />
      ))}

      {stepError && <p className={classes.fieldError}>{stepError}</p>}

      <div className={classes.nav}>
        {stepIndex > 0 ? (
          <button className={classes.backButton} onClick={goBack} type="button">
            Back
          </button>
        ) : (
          <span />
        )}
        <button
          className={classes.nextButton}
          disabled={isProcessing}
          onClick={goNext}
          type="button"
        >
          {isProcessing
            ? 'Submitting...'
            : isLastStep
              ? form.submitButtonLabel || 'Submit'
              : 'Next'}
        </button>
      </div>
    </div>
  )
}

const StepFormInner: React.FC<{
  form: FormType
  steps: SteppableField[]
}> = ({ form, steps }) => {
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const initialState = useMemo(() => buildInitialState(form.fields ?? []), [form.fields])

  const onSubmit = useCallback(
    async ({ data }: { data: Record<string, unknown> }) => {
      const dataToSend = Object.entries(data).map(([name, value]) => ({
        field: name,
        value,
      }))

      const hubspotCookie = getCookie('hubspotutk')
      const pageUri = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`
      const slugParts = pathname?.split('/')
      const pageName = slugParts?.at(-1) === '' ? 'Home' : slugParts?.at(-1)

      const req = await fetch('/api/form-submissions', {
        body: JSON.stringify({
          form: form.id,
          hubspotCookie,
          pageName,
          pageUri,
          submissionData: dataToSend,
        }),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      if (!req.ok) {
        const body = await req.json().catch(() => ({}))
        for (const error of body?.errors || []) {
          toast.error(error.message)
        }
        throw new Error('Form submission failed')
      }

      setHasSubmitted(true)
      toast.success('Form submitted successfully!')

      if (form.confirmationType === 'redirect' && form.redirect?.url) {
        const url = form.redirect.url
        const redirectUrl = new URL(url, process.env.NEXT_PUBLIC_SITE_URL)
        if (url.startsWith('/') || redirectUrl.origin === process.env.NEXT_PUBLIC_SITE_URL) {
          router.push(redirectUrl.href)
        } else {
          window.location.assign(url)
        }
      }
    },
    [form.confirmationType, form.id, form.redirect?.url, pathname, router],
  )

  if (hasSubmitted && form.confirmationType === 'message') {
    return (
      <div className={classes.confirmation}>
        <RichText content={form.confirmationMessage} />
      </div>
    )
  }

  if (hasSubmitted) {
    return (
      <div className={classes.confirmation}>
        <p>Thank you — we received your enquiry.</p>
      </div>
    )
  }

  return (
    <Form formId={form.id} initialState={initialState} onSubmit={onSubmit}>
      <StepNavigator form={form} steps={steps} />
    </Form>
  )
}

export const CorespaceStepForm: React.FC<CorespaceStepFormProps> = ({
  eyebrow,
  form,
  heading,
  sidebarBody,
  sidebarPoints,
  sidebarTitle,
}) => {
  if (!form || typeof form === 'string') {
    return (
      <div className={classes.stepForm}>
        <div className={classes.header}>
          {eyebrow && <p className={classes.eyebrow}>{eyebrow}</p>}
          {heading && <h2 className={classes.heading}>{heading}</h2>}
        </div>
        <p className={classes.empty}>Select a form in the CMS to display this step form.</p>
      </div>
    )
  }

  const steps = (form.fields || []).filter(isSteppableField)

  if (!steps.length) {
    return (
      <div className={classes.stepForm}>
        <div className={classes.header}>
          {eyebrow && <p className={classes.eyebrow}>{eyebrow}</p>}
          {heading && <h2 className={classes.heading}>{heading}</h2>}
        </div>
        <p className={classes.empty}>This form has no fields yet. Add fields in Forms.</p>
      </div>
    )
  }

  return (
    <div className={classes.stepForm}>
      <div className={classes.header}>
        {eyebrow && (
          <p className={classes.eyebrow}>
            <span className={classes.eyebrowDash} aria-hidden>
              —
            </span>
            {eyebrow}
            <span className={classes.eyebrowDash} aria-hidden>
              —
            </span>
          </p>
        )}
        {heading && <h2 className={classes.heading}>{heading}</h2>}
      </div>

      <div className={classes.card}>
        <aside className={classes.sidebar}>
          {sidebarTitle && <h3 className={classes.sidebarTitle}>{sidebarTitle}</h3>}
          {sidebarBody && <p className={classes.sidebarBody}>{sidebarBody}</p>}
          {sidebarPoints?.length ? (
            <ul className={classes.sidebarList}>
              {sidebarPoints.map((point, index) => (
                <li key={point.id ?? `${point.text}-${index}`}>{point.text}</li>
              ))}
            </ul>
          ) : null}
        </aside>

        <div className={classes.formSide}>
          <StepFormInner form={form} steps={steps} />
        </div>
      </div>
    </div>
  )
}

'use client'

import React, { useId, useState } from 'react'

import classes from './index.module.scss'

export type FaqItem = {
  answer: string
  id?: null | string
  question: string
}

export type CorespaceFaqProps = {
  blockType?: 'corespaceFaq'
  eyebrow?: null | string
  heading?: null | string
  id?: null | string
  items?: FaqItem[] | null
}

export const CorespaceFaq: React.FC<CorespaceFaqProps> = ({ eyebrow, heading, items }) => {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState(0)

  if (!items?.length) {
    return null
  }

  return (
    <div className={classes.faq}>
      <div className={classes.header}>
        {eyebrow && (
          <p className={classes.eyebrow}>
            <span className={classes.eyebrowDash} aria-hidden>
              —
            </span>
            {eyebrow}
          </p>
        )}
        {heading && <h2 className={classes.heading}>{heading}</h2>}
      </div>

      <div className={classes.list}>
        {items.map((item, index) => {
          const isOpen = openIndex === index
          const panelId = `${baseId}-panel-${index}`
          const buttonId = `${baseId}-button-${index}`

          return (
            <div
              className={[classes.item, isOpen && classes.itemOpen].filter(Boolean).join(' ')}
              key={item.id ?? `${item.question}-${index}`}
            >
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className={classes.trigger}
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                type="button"
              >
                <span className={classes.question}>{item.question}</span>
                <span aria-hidden className={classes.icon}>
                  {isOpen ? '×' : '+'}
                </span>
              </button>

              <div
                className={classes.panel}
                hidden={!isOpen}
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
              >
                <p className={classes.answer}>{item.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

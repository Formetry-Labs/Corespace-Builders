'use client'

import React from 'react'

import classes from './index.module.scss'

export type ApproachStep = {
  description: string
  id?: null | string
  stage: string
  tags?: { id?: null | string; label: string }[] | null
  title: string
}

export type CorespaceOurApproachProps = {
  blockType?: 'corespaceOurApproach'
  eyebrow?: null | string
  heading?: null | string
  id?: null | string
  steps?: ApproachStep[] | null
}

export const CorespaceOurApproach: React.FC<CorespaceOurApproachProps> = ({
  eyebrow,
  heading,
  steps,
}) => {
  if (!steps?.length) {
    return null
  }

  return (
    <div className={classes.ourApproach}>
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

      <ol className={classes.timeline}>
        {steps.map((step, index) => {
          const number = String(index + 1).padStart(1, '0')
          const hasTags = Array.isArray(step.tags) && step.tags.length > 0

          return (
            <li className={classes.step} key={step.id ?? `${step.stage}-${index}`}>
              <div className={classes.markerCol} aria-hidden>
                <div className={classes.marker}>
                  <span className={classes.markerNumber}>{number}</span>
                  <span className={classes.markerStage}>{step.stage}</span>
                </div>
                {index < steps.length - 1 && <div className={classes.connector} />}
              </div>

              <article className={classes.card}>
                <div className={classes.cardTop}>
                  <p className={classes.mobileStage}>
                    <span>{number}</span>
                    {step.stage}
                  </p>
                  <h3 className={classes.cardTitle}>{step.title}</h3>
                  <p className={classes.cardDescription}>{step.description}</p>
                </div>

                {hasTags && (
                  <ul className={classes.tags}>
                    {step.tags!.map((tag, tagIndex) => (
                      <li className={classes.tag} key={tag.id ?? `${tag.label}-${tagIndex}`}>
                        {tag.label}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

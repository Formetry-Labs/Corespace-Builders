'use client'

import React from 'react'

import classes from './index.module.scss'

export type DesignProcessStep = {
  description: string
  id?: null | string
  title: string
}

export type CorespaceDesignProcessProps = {
  blockType?: 'corespaceDesignProcess'
  eyebrow?: null | string
  heading?: null | string
  id?: null | string
  steps?: DesignProcessStep[] | null
}

export const CorespaceDesignProcess: React.FC<CorespaceDesignProcessProps> = ({
  eyebrow,
  heading,
  steps,
}) => {
  if (!steps?.length) {
    return null
  }

  return (
    <div className={classes.designProcess}>
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

      <ol className={classes.grid}>
        {steps.map((step, index) => (
          <li className={classes.card} key={step.id ?? `${step.title}-${index}`}>
            <span className={classes.number} aria-hidden>
              {index + 1}
            </span>
            <h3 className={classes.title}>{step.title}</h3>
            <p className={classes.description}>{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

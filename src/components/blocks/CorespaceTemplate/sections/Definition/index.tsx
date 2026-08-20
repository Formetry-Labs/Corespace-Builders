'use client'

import React from 'react'

import classes from './index.module.scss'

export type CorespaceDefinitionProps = {
  blockType?: 'corespaceDefinition'
  body?: null | string
  eyebrow?: null | string
  heading?: null | string
  id?: null | string
}

export const CorespaceDefinition: React.FC<CorespaceDefinitionProps> = ({
  body,
  eyebrow,
  heading,
}) => {
  if (!heading && !body) {
    return null
  }

  return (
    <div className={classes.definition}>
      {eyebrow && (
        <p className={classes.eyebrow}>
          <span className={classes.eyebrowDash} aria-hidden>
            —
          </span>
          {eyebrow}
        </p>
      )}
      {heading && <h2 className={classes.heading}>{heading}</h2>}
      {body && <p className={classes.body}>{body}</p>}
    </div>
  )
}

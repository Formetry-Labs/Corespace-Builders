'use client'

import React from 'react'

import classes from './index.module.scss'

export type CorespaceDirectAnswerProps = {
  blockType?: 'corespaceDirectAnswer'
  eyebrow?: null | string
  id?: null | string
  paragraphs?: { id?: null | string; text: string }[] | null
  points?: { id?: null | string; text: string }[] | null
}

export const CorespaceDirectAnswer: React.FC<CorespaceDirectAnswerProps> = ({
  eyebrow,
  paragraphs,
  points,
}) => {
  const hasParagraphs = Array.isArray(paragraphs) && paragraphs.length > 0
  const hasPoints = Array.isArray(points) && points.length > 0

  if (!hasParagraphs && !hasPoints) {
    return null
  }

  return (
    <div className={classes.directAnswer}>
      <div className={classes.card}>
        <div className={classes.copy}>
          {eyebrow && (
            <p className={classes.eyebrow}>
              <span className={classes.eyebrowDash} aria-hidden>
                —
              </span>
              {eyebrow}
            </p>
          )}

          {hasParagraphs && (
            <div className={classes.paragraphs}>
              {paragraphs!.map((paragraph, index) => (
                <p key={paragraph.id ?? `paragraph-${index}`}>{paragraph.text}</p>
              ))}
            </div>
          )}
        </div>

        {hasPoints && (
          <ul className={classes.points}>
            {points!.map((point, index) => (
              <li className={classes.point} key={point.id ?? `point-${index}`}>
                <span className={classes.bullet} aria-hidden />
                <span className={classes.pointText}>{point.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

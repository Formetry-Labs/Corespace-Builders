'use client'

import React from 'react'

import classes from './index.module.scss'

type ListItem = {
  id?: null | string
  text: string
}

type ChallengeCard = {
  items?: ListItem[] | null
  label?: null | string
  title?: null | string
}

export type CorespaceCommonChallengesProps = {
  approachCard?: ChallengeCard | null
  blockType?: 'corespaceCommonChallenges'
  eyebrow?: null | string
  heading?: null | string
  id?: null | string
  problemsCard?: ChallengeCard | null
}

const DiamondIcon = () => (
  <svg
    aria-hidden
    className={classes.diamond}
    fill="currentColor"
    height="10"
    viewBox="0 0 10 10"
    width="10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 0.75L9.25 5L5 9.25L0.75 5L5 0.75Z" />
  </svg>
)

const CheckIcon = () => (
  <svg
    aria-hidden
    className={classes.check}
    fill="none"
    height="14"
    viewBox="0 0 14 14"
    width="14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.5 7.25L5.5 10.25L11.5 3.75"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  </svg>
)

export const CorespaceCommonChallenges: React.FC<CorespaceCommonChallengesProps> = ({
  approachCard,
  eyebrow,
  heading,
  problemsCard,
}) => {
  const problemItems = problemsCard?.items ?? []
  const approachItems = approachCard?.items ?? []

  return (
    <div className={classes.commonChallenges}>
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

      <div className={classes.grid}>
        <article className={classes.problemsCard}>
          {problemsCard?.label && <p className={classes.cardLabel}>{problemsCard.label}</p>}
          {problemsCard?.title && <h3 className={classes.cardTitle}>{problemsCard.title}</h3>}

          {problemItems.length > 0 && (
            <ul className={classes.list}>
              {problemItems.map((item, index) => (
                <li key={item.id ?? `${item.text}-${index}`}>
                  <DiamondIcon />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          )}
        </article>

        <article className={classes.approachCard}>
          {approachCard?.label && <p className={classes.cardLabelLight}>{approachCard.label}</p>}
          {approachCard?.title && (
            <h3 className={classes.cardTitleLight}>{approachCard.title}</h3>
          )}

          {approachItems.length > 0 && (
            <ul className={classes.listLight}>
              {approachItems.map((item, index) => (
                <li key={item.id ?? `${item.text}-${index}`}>
                  <CheckIcon />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          )}
        </article>
      </div>
    </div>
  )
}

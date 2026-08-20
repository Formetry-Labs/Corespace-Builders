'use client'

import React from 'react'

import classes from './index.module.scss'

export type ClientTestimonial = {
  id?: null | number | string
  initial?: null | string
  location?: null | string
  quote?: null | string
  rating?: null | number
  title?: null | string
}

export type CorespaceClientPerspectiveProps = {
  blockType?: 'corespaceClientPerspective'
  eyebrow?: null | string
  heading?: null | string
  id?: null | string
  subtext?: null | string
  testimonials?: (ClientTestimonial | number | string)[] | null
}

const PLACEHOLDER_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 'placeholder-1',
    initial: 'V',
    location: 'Coorg (Kodagu)',
    quote:
      'The planning clarity helped us understand cost, design, and execution before starting our Coorg villa project. We knew what we were committing to.',
    rating: 5,
    title: 'Villa Owner',
  },
  {
    id: 'placeholder-2',
    initial: 'R',
    location: 'Madikeri',
    quote:
      'Managing the build from Bangalore felt possible for the first time. Structured updates, clear stage-wise decisions, no confusion on site.',
    rating: 5,
    title: 'Residential Home Owner',
  },
  {
    id: 'placeholder-3',
    initial: 'H',
    location: 'Kodagu',
    quote:
      'Design, cost, and execution stayed aligned from day one. Our homestay opened on plan, on budget, and ready for guests.',
    rating: 5,
    title: 'Homestay Investor',
  },
]

function normalizeTestimonials(
  testimonials?: (ClientTestimonial | number | string)[] | null,
): ClientTestimonial[] {
  if (!testimonials?.length) {
    return PLACEHOLDER_TESTIMONIALS
  }

  const resolved = testimonials.filter(
    (item): item is ClientTestimonial => typeof item === 'object' && item !== null && Boolean(item.quote),
  )

  return resolved.length ? resolved : PLACEHOLDER_TESTIMONIALS
}

function StarRating({ rating = 5 }: { rating?: null | number }) {
  const stars = Math.min(5, Math.max(0, Math.round(rating ?? 5)))

  return (
    <div className={classes.stars} aria-label={`${stars} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          aria-hidden
          className={index < stars ? classes.starFilled : classes.starEmpty}
          key={index}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export const CorespaceClientPerspective: React.FC<CorespaceClientPerspectiveProps> = ({
  eyebrow,
  heading,
  subtext,
  testimonials,
}) => {
  const items = normalizeTestimonials(testimonials)

  return (
    <div className={classes.clientPerspective}>
      <div className={classes.header}>
        {eyebrow && <p className={classes.eyebrow}>{eyebrow}</p>}
        {heading && <h2 className={classes.heading}>{heading}</h2>}
        {subtext && <p className={classes.subtext}>{subtext}</p>}
      </div>

      <ul className={classes.grid}>
        {items.map((item, index) => {
          const initial = (item.initial || item.title?.[0] || '?').slice(0, 1).toUpperCase()

          return (
            <li className={classes.card} key={item.id ?? `${item.title}-${index}`}>
              <span className={classes.accent} aria-hidden />
              <span className={classes.quoteMark} aria-hidden>
                “
              </span>
              <blockquote className={classes.quote}>{item.quote}</blockquote>
              <div className={classes.footer}>
                <div className={classes.identity}>
                  <span className={classes.avatar} aria-hidden>
                    {initial}
                  </span>
                  <div className={classes.meta}>
                    {item.title && <p className={classes.title}>{item.title}</p>}
                    {item.location && <p className={classes.location}>{item.location}</p>}
                  </div>
                </div>
                <StarRating rating={item.rating} />
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

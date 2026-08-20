'use client'

import type { Media as MediaType } from '@root/payload-types'

import { Media } from '@components/Media/index'
import React, { useMemo, useState } from 'react'

import classes from './index.module.scss'

type GalleryCategory =
  | 'architecture'
  | 'homes'
  | 'homestays'
  | 'interiors'
  | 'renovation'
  | 'villas'

type GalleryStage = 'before' | 'completed' | 'during'

export type GalleryItem = {
  category: GalleryCategory
  description: string
  id?: null | string
  image?: MediaType | null | string
  location: string
  stage: GalleryStage
}

export type CorespaceProjectGalleryProps = {
  blockType?: 'corespaceProjectGallery'
  eyebrow?: null | string
  heading?: null | string
  id?: null | string
  items?: GalleryItem[] | null
}

const CATEGORY_FILTERS: { label: string; value: 'all' | GalleryCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Homes', value: 'homes' },
  { label: 'Villas', value: 'villas' },
  { label: 'Homestays', value: 'homestays' },
  { label: 'Renovation', value: 'renovation' },
  { label: 'Architecture', value: 'architecture' },
  { label: 'Interiors', value: 'interiors' },
]

const STAGE_FILTERS: { label: string; value: 'all' | GalleryStage }[] = [
  { label: 'All Stages', value: 'all' },
  { label: 'Before', value: 'before' },
  { label: 'During', value: 'during' },
  { label: 'Completed', value: 'completed' },
]

const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  architecture: 'Architecture',
  homes: 'Homes',
  homestays: 'Homestays',
  interiors: 'Interiors',
  renovation: 'Renovation',
  villas: 'Villas',
}

const STAGE_LABELS: Record<GalleryStage, string> = {
  before: 'Before',
  completed: 'Completed',
  during: 'During',
}

export const CorespaceProjectGallery: React.FC<CorespaceProjectGalleryProps> = ({
  eyebrow,
  heading,
  items,
}) => {
  const [category, setCategory] = useState<'all' | GalleryCategory>('all')
  const [stage, setStage] = useState<'all' | GalleryStage>('all')

  const filteredItems = useMemo(() => {
    if (!items?.length) {
      return []
    }

    return items.filter((item) => {
      const categoryMatch = category === 'all' || item.category === category
      const stageMatch = stage === 'all' || item.stage === stage
      return categoryMatch && stageMatch
    })
  }, [category, items, stage])

  if (!items?.length) {
    return null
  }

  return (
    <div className={classes.gallery}>
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

      <div className={classes.filters}>
        <div className={classes.filterRow} role="group" aria-label="Filter by category">
          {CATEGORY_FILTERS.map((filter) => (
            <button
              className={[
                classes.filterButton,
                classes.categoryButton,
                category === filter.value ? classes.categoryActive : '',
              ]
                .filter(Boolean)
                .join(' ')}
              key={filter.value}
              onClick={() => setCategory(filter.value)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className={classes.filterRow} role="group" aria-label="Filter by stage">
          {STAGE_FILTERS.map((filter) => (
            <button
              className={[
                classes.filterButton,
                classes.stageButton,
                stage === filter.value ? classes.stageActive : '',
              ]
                .filter(Boolean)
                .join(' ')}
              key={filter.value}
              onClick={() => setStage(filter.value)}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {filteredItems.length === 0 ? (
        <p className={classes.empty}>No projects match these filters.</p>
      ) : (
        <ul className={classes.grid}>
          {filteredItems.map((item, index) => {
            const hasImage = Boolean(item.image && typeof item.image !== 'string')

            return (
              <li className={classes.card} key={item.id ?? `${item.location}-${index}`}>
                <div className={classes.media}>
                  {hasImage ? (
                    <Media className={classes.image} resource={item.image as MediaType} />
                  ) : (
                    <div className={classes.imagePlaceholder} aria-hidden />
                  )}
                  <span className={classes.badge}>{STAGE_LABELS[item.stage]}</span>
                </div>
                <div className={classes.body}>
                  <p className={classes.category}>{CATEGORY_LABELS[item.category]}</p>
                  <h3 className={classes.location}>{item.location}</h3>
                  <p className={classes.description}>{item.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

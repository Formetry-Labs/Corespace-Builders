'use client'

import type { Media as MediaType } from '@root/payload-types'

import { Media } from '@components/Media/index'
import React from 'react'

import classes from './index.module.scss'
import { positioningIcons, type PositioningIconKey } from './icons'

export type PositioningFeature = {
  description: string
  icon?: PositioningIconKey | null
  id?: null | string
  title: string
}

export type CorespacePositioningProps = {
  blockType?: 'corespacePositioning'
  callout?: null | string
  eyebrow?: null | string
  features?: PositioningFeature[] | null
  heading?: null | string
  id?: null | string
  image?: MediaType | null | string
  subheading?: null | string
}

export const CorespacePositioning: React.FC<CorespacePositioningProps> = ({
  callout,
  eyebrow,
  features,
  heading,
  image,
  subheading,
}) => {
  const hasFeatures = Array.isArray(features) && features.length > 0

  return (
    <div className={classes.positioning}>
      <div className={classes.shell}>
        <div className={classes.media}>
          {image && typeof image !== 'string' && (
            <Media className={classes.image} resource={image} />
          )}
        </div>

        <div className={classes.panel}>
          <div className={classes.copy}>
            {eyebrow && (
              <p className={classes.eyebrow}>
                <span className={classes.eyebrowDash} aria-hidden>
                  —
                </span>
                {eyebrow}
              </p>
            )}

            {heading && <h2 className={classes.heading}>{heading}</h2>}
            {subheading && <p className={classes.subheading}>{subheading}</p>}
          </div>

          {hasFeatures && (
            <ul className={classes.features}>
              {features!.map((feature, index) => {
                const iconKey = (feature.icon || 'terrain') as PositioningIconKey
                const Icon = positioningIcons[iconKey] || positioningIcons.terrain

                return (
                  <li className={classes.feature} key={feature.id ?? `${feature.title}-${index}`}>
                    <div className={classes.iconBox}>
                      <Icon className={classes.icon} />
                    </div>
                    <div className={classes.featureCopy}>
                      <h3 className={classes.featureTitle}>{feature.title}</h3>
                      <p className={classes.featureDescription}>{feature.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}

          {callout && (
            <div className={classes.callout}>
              <p>{callout}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

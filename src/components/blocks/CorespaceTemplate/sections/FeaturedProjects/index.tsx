'use client'

import type { Media as MediaType } from '@root/payload-types'

import { Media } from '@components/Media/index'
import React from 'react'

import classes from './index.module.scss'

export type FeaturedProject = {
  approach?: { id?: null | string; text: string }[] | null
  challenge?: null | string
  id?: null | string
  image?: MediaType | null | string
  outcome?: null | string
  primaryTag?: null | string
  tags?: { id?: null | string; label: string }[] | null
  title: string
}

export type CorespaceFeaturedProjectsProps = {
  blockType?: 'corespaceFeaturedProjects'
  eyebrow?: null | string
  heading?: null | string
  id?: null | string
  projects?: FeaturedProject[] | null
}

export const CorespaceFeaturedProjects: React.FC<CorespaceFeaturedProjectsProps> = ({
  eyebrow,
  heading,
  projects,
}) => {
  if (!projects?.length) {
    return null
  }

  return (
    <div className={classes.featured}>
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
        {projects.map((project, index) => {
          const reversed = index % 2 === 1
          const hasImage = Boolean(project.image && typeof project.image !== 'string')

          return (
            <article
              className={[classes.card, reversed ? classes.reversed : ''].filter(Boolean).join(' ')}
              key={project.id ?? `${project.title}-${index}`}
            >
              <div className={[classes.media, !hasImage ? classes.mediaEmpty : ''].filter(Boolean).join(' ')}>
                {hasImage && <Media className={classes.image} resource={project.image as MediaType} />}
              </div>

              <div className={classes.content}>
                <div className={classes.tags}>
                  {project.primaryTag && (
                    <span className={classes.primaryTag}>{project.primaryTag}</span>
                  )}
                  {project.tags?.map((tag, tagIndex) => (
                    <span className={classes.tag} key={tag.id ?? `${tag.label}-${tagIndex}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>

                <h3 className={classes.title}>{project.title}</h3>

                <div className={classes.details}>
                  {project.challenge && (
                    <div className={classes.detailBlock}>
                      <p className={classes.detailLabel}>Challenge</p>
                      <p className={classes.detailText}>{project.challenge}</p>
                    </div>
                  )}

                  {project.approach?.length ? (
                    <div className={classes.detailBlock}>
                      <p className={classes.detailLabel}>Approach</p>
                      <ul className={classes.approachList}>
                        {project.approach.map((item, itemIndex) => (
                          <li key={item.id ?? `${item.text}-${itemIndex}`}>{item.text}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  {project.outcome && (
                    <div className={classes.detailBlock}>
                      <p className={classes.detailLabel}>Outcome</p>
                      <p className={classes.detailText}>{project.outcome}</p>
                    </div>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}

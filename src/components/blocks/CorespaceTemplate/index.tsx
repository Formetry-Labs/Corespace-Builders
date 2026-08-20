'use client'

import type { PaddingProps } from '@components/BlockWrapper/index'

import { BlockWrapper } from '@components/BlockWrapper/index'
import { Gutter } from '@components/Gutter/index'
import React from 'react'

import classes from './index.module.scss'
import { CorespaceAbout } from './sections/About/index'
import { CorespaceClientPerspective } from './sections/ClientPerspective/index'
import { CorespaceCommonChallenges } from './sections/CommonChallenges/index'
import { CorespaceCostClarity } from './sections/CostClarity/index'
import { CorespaceDefinition } from './sections/Definition/index'
import { CorespaceDesignProcess } from './sections/DesignProcess/index'
import { CorespaceDirectAnswer } from './sections/DirectAnswer/index'
import { CorespaceFaq } from './sections/Faq/index'
import { CorespaceFeaturedProjects } from './sections/FeaturedProjects/index'
import { CorespaceGetStarted } from './sections/GetStarted/index'
import { CorespaceOurApproach } from './sections/OurApproach/index'
import { CorespacePlaceholder } from './sections/Placeholder'
import { CorespacePositioning } from './sections/Positioning/index'
import { CorespaceProjectGallery } from './sections/ProjectGallery/index'
import { CorespaceProjects } from './sections/Projects/index'
import { CorespaceServices } from './sections/Services/index'
import { CorespaceStepForm } from './sections/StepForm/index'

export type CorespaceSection = {
  blockType?: string
  id?: null | string
  [key: string]: unknown
}

export type CorespaceTemplateProps = {
  blockType?: 'corespaceTemplate'
  corespaceTemplateFields?: {
    sections?: CorespaceSection[] | null
    settings?: {
      background?: 'gradientDown' | 'gradientUp' | 'solid' | 'transparent' | null
      theme?: 'dark' | 'light' | null
    }
  }
  hideBackground?: boolean
  padding?: PaddingProps
}

/**
 * Maps nested Corespace section blockTypes → React components.
 * Add new section renderers here as each screenshot is implemented.
 */
const sectionComponents: Record<string, React.ComponentType<any>> = {
  corespaceAbout: CorespaceAbout,
  corespaceClientPerspective: CorespaceClientPerspective,
  corespaceCommonChallenges: CorespaceCommonChallenges,
  corespaceCostClarity: CorespaceCostClarity,
  corespaceDefinition: CorespaceDefinition,
  corespaceDesignProcess: CorespaceDesignProcess,
  corespaceDirectAnswer: CorespaceDirectAnswer,
  corespaceFaq: CorespaceFaq,
  corespaceFeaturedProjects: CorespaceFeaturedProjects,
  corespaceGetStarted: CorespaceGetStarted,
  corespaceOurApproach: CorespaceOurApproach,
  corespacePlaceholder: CorespacePlaceholder,
  corespacePositioning: CorespacePositioning,
  corespaceProjectGallery: CorespaceProjectGallery,
  corespaceProjects: CorespaceProjects,
  corespaceServices: CorespaceServices,
  corespaceStepForm: CorespaceStepForm,
}

export const CorespaceTemplate: React.FC<CorespaceTemplateProps> = (props) => {
  const { corespaceTemplateFields, hideBackground, padding } = props
  const settings = corespaceTemplateFields?.settings
  const sections = corespaceTemplateFields?.sections ?? []

  return (
    <BlockWrapper
      className={classes.template}
      hideBackground={hideBackground}
      padding={{ bottom: 'large', top: 'large', ...padding }}
      settings={settings}
    >
      <Gutter className={classes.gutter}>
        <div className={classes.stack}>
          {sections.length === 0 ? (
            <div className={classes.empty}>
              <p className={classes.emptyEyebrow}>Corespace Template</p>
              <h2 className={classes.emptyTitle}>Sections will appear here</h2>
              <p className={classes.emptyBody}>
                Add sections in the CMS as they are built from the brand kit. Each section is
                responsive for mobile, tablet, and desktop.
              </p>
            </div>
          ) : (
            sections.map((section, index) => {
              if (!section?.blockType || !(section.blockType in sectionComponents)) {
                return null
              }

              const Section = sectionComponents[section.blockType]

              return (
                <section
                  className={classes.section}
                  data-section={section.blockType}
                  key={section.id ?? `${section.blockType}-${index}`}
                >
                  <Section {...section} />
                </section>
              )
            })
          )}
        </div>
      </Gutter>
    </BlockWrapper>
  )
}

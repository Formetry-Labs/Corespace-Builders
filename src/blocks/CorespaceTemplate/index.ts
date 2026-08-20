import type { Block } from 'payload'

import { blockFields } from '@root/fields/blockFields'

import { CorespaceAboutSection } from './sections/About'
import { CorespaceClientPerspectiveSection } from './sections/ClientPerspective'
import { CorespaceCommonChallengesSection } from './sections/CommonChallenges'
import { CorespaceCostClaritySection } from './sections/CostClarity'
import { CorespaceDefinitionSection } from './sections/Definition'
import { CorespaceDesignProcessSection } from './sections/DesignProcess'
import { CorespaceDirectAnswerSection } from './sections/DirectAnswer'
import { CorespaceFaqSection } from './sections/Faq'
import { CorespaceFeaturedProjectsSection } from './sections/FeaturedProjects'
import { CorespaceGetStartedSection } from './sections/GetStarted'
import { CorespaceOurApproachSection } from './sections/OurApproach'
import { CorespacePlaceholderSection } from './sections/Placeholder'
import { CorespacePositioningSection } from './sections/Positioning'
import { CorespaceProjectGallerySection } from './sections/ProjectGallery'
import { CorespaceProjectsSection } from './sections/Projects'
import { CorespaceServicesSection } from './sections/Services'
import { CorespaceStepFormSection } from './sections/StepForm'

/**
 * Corespace Template — page layout block for Modern Earth Architecture sections.
 * Nested section blocks are added here as each section is designed from screenshots.
 */
export const CorespaceTemplate: Block = {
  slug: 'corespaceTemplate',
  interfaceName: 'CorespaceTemplateBlock',
  labels: {
    plural: 'Corespace Templates',
    singular: 'Corespace Template',
  },
  fields: [
    blockFields({
      name: 'corespaceTemplateFields',
      fields: [
        {
          name: 'sections',
          type: 'blocks',
          labels: {
            plural: 'Sections',
            singular: 'Section',
          },
          admin: {
            description:
              'Add Corespace brand sections in order. New section types appear here as they are built from the brand kit.',
            initCollapsed: false,
          },
          blocks: [
            CorespaceAboutSection,
            CorespaceDefinitionSection,
            CorespaceDirectAnswerSection,
            CorespaceServicesSection,
            CorespaceProjectsSection,
            CorespaceFeaturedProjectsSection,
            CorespaceProjectGallerySection,
            CorespacePositioningSection,
            CorespaceFaqSection,
            CorespaceGetStartedSection,
            CorespaceClientPerspectiveSection,
            CorespaceOurApproachSection,
            CorespaceDesignProcessSection,
            CorespaceCostClaritySection,
            CorespaceCommonChallengesSection,
            CorespaceStepFormSection,
            CorespacePlaceholderSection,
          ],
        },
      ],
    }),
  ],
}

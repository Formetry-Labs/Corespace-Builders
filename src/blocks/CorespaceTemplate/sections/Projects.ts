import type { Block } from 'payload'

import link from '@root/fields/link'

export const CorespaceProjectsSection: Block = {
  slug: 'corespaceProjects',
  interfaceName: 'CorespaceProjectsSection',
  labels: {
    plural: 'Projects Sections',
    singular: 'Projects',
  },
  fields: [
    {
      name: 'heading',
      type: 'textarea',
      defaultValue: 'Projects shaped around land, lifestyle, and long-term value',
      label: 'Heading',
      required: true,
    },
    link({
      appearances: false,
      overrides: {
        name: 'cta',
        label: 'Header CTA',
        defaultValue: {
          type: 'custom',
          label: 'Explore Projects',
          url: '/projects',
        },
        admin: {
          description: 'e.g. Explore Projects',
        },
      },
    }),
    {
      name: 'projectsSource',
      type: 'text',
      defaultValue: 'Auto from child pages of Projects',
      admin: {
        description:
          'Cards auto-populate from published pages whose Parent is Projects. Prefers Hero media/text; if Hero is None, uses the About section image, heading, and intro. Links go to /project/{slug}.',
        readOnly: true,
      },
      label: 'Project cards',
    },
  ],
}

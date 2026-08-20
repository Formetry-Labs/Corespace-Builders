import type { Block } from 'payload'

import link from '@root/fields/link'

export const CorespaceServicesSection: Block = {
  slug: 'corespaceServices',
  interfaceName: 'CorespaceServicesSection',
  labels: {
    plural: 'Services Sections',
    singular: 'Services',
  },
  fields: [
    {
      name: 'heading',
      type: 'textarea',
      defaultValue: 'One team across planning, design, and execution',
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
          label: 'Explore Services',
          url: '/services',
        },
        admin: {
          description: 'e.g. Explore Services',
        },
      },
    }),
    {
      name: 'servicesSource',
      type: 'text',
      defaultValue: 'Auto from child pages of Services',
      admin: {
        description:
          'Cards auto-populate from published pages whose Parent is Services. Prefers Hero media/text; if Hero is None, uses the About section image, heading, and intro. Links go to /service/{slug}.',
        readOnly: true,
      },
      label: 'Service cards',
    },
  ],
}

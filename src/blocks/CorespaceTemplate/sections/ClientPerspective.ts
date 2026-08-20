import type { Block } from 'payload'

export const CorespaceClientPerspectiveSection: Block = {
  slug: 'corespaceClientPerspective',
  interfaceName: 'CorespaceClientPerspectiveSection',
  labels: {
    plural: 'Client Voices Sections',
    singular: 'Client Voices',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'CLIENT VOICES',
      label: 'Eyebrow label',
    },
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'What clients value most is confidence',
      label: 'Heading',
      required: true,
    },
    {
      name: 'subtext',
      type: 'text',
      defaultValue: 'Sample placeholders shown — pulled dynamically from the central Testimonial Library.',
      label: 'Subtext',
    },
    {
      name: 'testimonials',
      type: 'relationship',
      hasMany: true,
      relationTo: 'testimonials',
      label: 'Testimonials',
      admin: {
        description: 'Select entries from the Testimonial Library. Leave empty to show sample placeholders.',
      },
    },
  ],
}

import type { Block } from 'payload'

export const CorespacePositioningSection: Block = {
  slug: 'corespacePositioning',
  interfaceName: 'CorespacePositioningSection',
  labels: {
    plural: 'Positioning Sections',
    singular: 'Positioning',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Left image',
    },
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'POSITIONING',
      label: 'Eyebrow label',
    },
    {
      name: 'heading',
      type: 'textarea',
      defaultValue: 'Why Construction in Coorg Needs a Different Approach',
      label: 'Heading',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
      defaultValue: 'Coorg is not like standard city construction.',
      label: 'Subheading',
    },
    {
      name: 'features',
      type: 'array',
      labels: {
        plural: 'Features',
        singular: 'Feature',
      },
      admin: {
        initCollapsed: true,
      },
      minRows: 1,
      maxRows: 8,
      defaultValue: [
        {
          icon: 'terrain',
          title: 'Terrain',
          description:
            'Sloped land may require stronger foundation planning, retaining walls, drainage planning, and careful layout decisions.',
        },
        {
          icon: 'weather',
          title: 'Weather',
          description:
            'Heavy rainfall can affect construction timelines, material selection, waterproofing, and long-term durability.',
        },
        {
          icon: 'logistics',
          title: 'Logistics',
          description:
            'Material movement and site access often require additional planning compared to urban projects.',
        },
        {
          icon: 'design',
          title: 'Design Expectations',
          description:
            'Most Coorg projects are lifestyle-driven — villas, homestays, nature homes, and second homes.',
        },
      ],
      fields: [
        {
          name: 'icon',
          type: 'select',
          defaultValue: 'terrain',
          options: [
            { label: 'Terrain', value: 'terrain' },
            { label: 'Weather', value: 'weather' },
            { label: 'Logistics', value: 'logistics' },
            { label: 'Design', value: 'design' },
          ],
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'callout',
      type: 'textarea',
      defaultValue:
        'Without proper planning, projects can face cost overruns, delays, quality issues, and long-term maintenance problems.',
      label: 'Bottom callout',
    },
  ],
}

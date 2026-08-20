import type { Block } from 'payload'

import link from '@root/fields/link'

export const CorespaceAboutSection: Block = {
  slug: 'corespaceAbout',
  interfaceName: 'CorespaceAboutSection',
  labels: {
    plural: 'About Sections',
    singular: 'About',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'ABOUT CORESPACE BUILDERS',
      label: 'Eyebrow label',
    },
    {
      name: 'heading',
      type: 'textarea',
      defaultValue: 'We Help You Build the Right Way — Not Just Build',
      label: 'Heading',
      required: true,
    },
    {
      name: 'intro',
      type: 'textarea',
      defaultValue:
        'At Corespace Builders, we believe successful projects start long before construction begins.',
      label: 'Intro paragraph',
    },
    {
      name: 'listIntro',
      type: 'text',
      defaultValue: "Whether you're planning:",
      label: 'List intro',
    },
    {
      name: 'items',
      type: 'array',
      labels: {
        plural: 'List items',
        singular: 'List item',
      },
      admin: {
        initCollapsed: true,
      },
      defaultValue: [
        { text: 'A family home' },
        { text: 'A luxury villa' },
        { text: 'A second home' },
        { text: 'A homestay' },
        { text: 'A renovation project' },
      ],
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'closing',
      type: 'textarea',
      defaultValue:
        'the most important decisions are often made before the first brick is laid. Our role is to help you make those decisions with clarity.',
      label: 'Closing paragraph',
    },
    {
      type: 'row',
      fields: [
        link({
          appearances: false,
          overrides: {
            name: 'primaryCta',
            label: 'Primary CTA',
            admin: {
              width: '50%',
            },
          },
        }),
        link({
          appearances: false,
          overrides: {
            name: 'secondaryCta',
            label: 'Secondary CTA',
            admin: {
              width: '50%',
            },
          },
        }),
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Featured image',
    },
    {
      name: 'imageCaption',
      type: 'textarea',
      defaultValue: 'A planning-first approach to homes, villas & homestays in Coorg.',
      label: 'Image overlay caption',
    },
  ],
}

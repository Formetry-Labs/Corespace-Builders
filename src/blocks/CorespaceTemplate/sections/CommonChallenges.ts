import type { Block } from 'payload'

export const CorespaceCommonChallengesSection: Block = {
  slug: 'corespaceCommonChallenges',
  interfaceName: 'CorespaceCommonChallengesSection',
  labels: {
    plural: 'Common Challenges Sections',
    singular: 'Common Challenges',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'COMMON CHALLENGES',
      label: 'Eyebrow label',
    },
    {
      name: 'heading',
      type: 'textarea',
      defaultValue: 'Why projects struggle — and the better approach',
      label: 'Heading',
      required: true,
    },
    {
      type: 'group',
      name: 'problemsCard',
      label: 'Typical Problems card',
      fields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: 'TYPICAL PROBLEMS',
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'How most projects begin',
        },
        {
          name: 'items',
          type: 'array',
          labels: {
            plural: 'Items',
            singular: 'Item',
          },
          admin: {
            initCollapsed: true,
          },
          defaultValue: [
            { text: 'No clarity on cost' },
            { text: 'Poor planning' },
            { text: 'Design not aligned with land' },
            { text: 'Remote project management issues' },
          ],
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: 'group',
      name: 'approachCard',
      label: 'Better Approach card',
      fields: [
        {
          name: 'label',
          type: 'text',
          defaultValue: 'THE BETTER APPROACH',
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'How planned projects begin',
        },
        {
          name: 'items',
          type: 'array',
          labels: {
            plural: 'Items',
            singular: 'Item',
          },
          admin: {
            initCollapsed: true,
          },
          defaultValue: [
            { text: 'Plan before building' },
            { text: 'Align design and execution' },
            { text: 'Understand costs clearly' },
          ],
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

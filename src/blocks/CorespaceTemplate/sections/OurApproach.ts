import type { Block } from 'payload'

export const CorespaceOurApproachSection: Block = {
  slug: 'corespaceOurApproach',
  interfaceName: 'CorespaceOurApproachSection',
  labels: {
    plural: 'Our Approach Sections',
    singular: 'Our Approach',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'OUR APPROACH',
      label: 'Eyebrow label',
    },
    {
      name: 'heading',
      type: 'textarea',
      defaultValue: 'From goal to move-in, in four aligned stages',
      label: 'Heading',
      required: true,
    },
    {
      name: 'steps',
      type: 'array',
      labels: {
        plural: 'Steps',
        singular: 'Step',
      },
      admin: {
        initCollapsed: true,
      },
      minRows: 1,
      maxRows: 8,
      defaultValue: [
        {
          stage: 'GOAL',
          title: 'Understand Your Goal',
          description: 'What are you building, and why?',
          tags: [
            { label: 'Home' },
            { label: 'Villa' },
            { label: 'Investment' },
            { label: 'Homestay' },
          ],
        },
        {
          stage: 'PLAN',
          title: 'Plan & Design',
          description: 'Align the layout, budget, and feasibility before drawings are final.',
          tags: [
            { label: 'Layout planning' },
            { label: 'Cost alignment' },
            { label: 'Feasibility review' },
          ],
        },
        {
          stage: 'BUILD',
          title: 'Execute Construction',
          description: 'Phase-wise execution with coordination and quality checks.',
          tags: [
            { label: 'Structured execution' },
            { label: 'Quality control' },
            { label: 'Project coordination' },
          ],
        },
        {
          stage: 'FINISH',
          title: 'Complete With Interiors',
          description: 'Final detailing that makes the space ready to live in or host from.',
          tags: [
            { label: 'Functional design' },
            { label: 'Final detailing' },
            { label: 'Ready-to-use spaces' },
          ],
        },
      ],
      fields: [
        {
          name: 'stage',
          type: 'text',
          required: true,
          label: 'Stage label',
          admin: {
            description: 'Short label under the number, e.g. GOAL, PLAN, BUILD, FINISH',
          },
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
        {
          name: 'tags',
          type: 'array',
          labels: {
            plural: 'Tags',
            singular: 'Tag',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

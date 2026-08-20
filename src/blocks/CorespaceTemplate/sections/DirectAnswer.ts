import type { Block } from 'payload'

export const CorespaceDirectAnswerSection: Block = {
  slug: 'corespaceDirectAnswer',
  interfaceName: 'CorespaceDirectAnswerSection',
  labels: {
    plural: 'Direct Answer Sections',
    singular: 'Direct Answer',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'DIRECT ANSWER',
      label: 'Eyebrow label',
    },
    {
      name: 'paragraphs',
      type: 'array',
      labels: {
        plural: 'Paragraphs',
        singular: 'Paragraph',
      },
      admin: {
        initCollapsed: true,
      },
      defaultValue: [
        {
          text: 'Corespace Builders is a project planning, design coordination, and construction company focused on helping clients build homes, villas, homestays, and renovation projects in Coorg (Kodagu). The company follows a planning-first approach that aligns cost, design, and execution before construction begins.',
        },
        {
          text: 'Most construction challenges arise before construction starts. Lack of planning, unrealistic budgets, and poor coordination often lead to delays, cost overruns, and project frustration. Corespace Builders was created to help property owners make better decisions before execution begins.',
        },
      ],
      fields: [
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
      minRows: 1,
    },
    {
      name: 'points',
      type: 'array',
      labels: {
        plural: 'Key points',
        singular: 'Key point',
      },
      admin: {
        initCollapsed: true,
      },
      defaultValue: [
        { text: 'Planning should happen before construction' },
        { text: 'Cost, design, and execution must be aligned' },
        { text: 'Coorg projects require a different approach' },
        { text: 'Better planning reduces project risk' },
        { text: 'Structured execution creates better outcomes' },
      ],
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
      ],
      minRows: 1,
    },
  ],
}

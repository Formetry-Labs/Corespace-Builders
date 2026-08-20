import type { Block } from 'payload'

export const CorespaceFaqSection: Block = {
  slug: 'corespaceFaq',
  interfaceName: 'CorespaceFaqSection',
  labels: {
    plural: 'FAQ Sections',
    singular: 'FAQ',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'FAQ',
      label: 'Eyebrow label',
    },
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Frequently Asked Questions',
      label: 'Heading',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      labels: {
        plural: 'Questions',
        singular: 'Question',
      },
      admin: {
        initCollapsed: true,
      },
      minRows: 1,
      defaultValue: [
        {
          question: 'What do construction services include?',
          answer:
            'Construction services typically include planning, design coordination, execution, material management, and project supervision from start to finish.',
        },
        {
          question: 'Do you provide construction services across Karnataka?',
          answer:
            'Yes. We support projects across Karnataka, with strong specialization in Coorg / Kodagu and surrounding areas.',
        },
        {
          question: 'Why is construction in Coorg different?',
          answer:
            'Coorg projects often involve sloped land, heavy rainfall, access constraints, and lifestyle-driven design needs that require planning before execution.',
        },
        {
          question: 'Can I build a villa or homestay in Coorg?',
          answer:
            'Yes. We help plan and execute villas, homestays, second homes, and premium residential projects suited to Coorg terrain and climate.',
        },
        {
          question: 'How do I estimate construction cost before starting?',
          answer:
            'Cost clarity comes from early planning — understanding scope, site conditions, design direction, and material choices before construction begins.',
        },
        {
          question: 'What is the biggest mistake people make in construction?',
          answer:
            'Starting execution without clear planning. That often leads to delays, cost overruns, poor coordination, and long-term maintenance issues.',
        },
      ],
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}

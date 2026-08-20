import type { Block } from 'payload'

export const CorespaceDesignProcessSection: Block = {
  slug: 'corespaceDesignProcess',
  interfaceName: 'CorespaceDesignProcessSection',
  labels: {
    plural: 'Design Process Sections',
    singular: 'Design Process',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'HOW WE WORK',
      label: 'Eyebrow label',
    },
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Our Design Process',
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
      maxRows: 9,
      defaultValue: [
        {
          title: 'Requirement Clarity',
          description: 'Understand your goal and expectations.',
        },
        {
          title: 'Site Analysis',
          description: 'Study land conditions and constraints.',
        },
        {
          title: 'Layout Planning',
          description: 'Space planning and zoning.',
        },
        {
          title: 'Concept Development',
          description: 'Visual direction and design identity.',
        },
        {
          title: 'Detailed Drawings',
          description: 'Execution-ready plans and coordination.',
        },
        {
          title: 'Design Finalization',
          description: 'Cost alignment and build-ready output.',
        },
      ],
      fields: [
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
  ],
}

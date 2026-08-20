import type { Block } from 'payload'

export const CorespaceDefinitionSection: Block = {
  slug: 'corespaceDefinition',
  interfaceName: 'CorespaceDefinitionSection',
  labels: {
    plural: 'Definition Sections',
    singular: 'Definition',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'DEFINITION',
      label: 'Eyebrow label',
    },
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'What Are Interior Design Services in Karnataka?',
      label: 'Heading',
      required: true,
    },
    {
      name: 'body',
      type: 'textarea',
      defaultValue:
        'Interior design services involve planning, designing, and optimizing indoor spaces to improve functionality, comfort, usability, and aesthetics. For projects in Coorg (Kodagu), interior design must also consider climate conditions, natural surroundings, durability, and maintenance requirements to create practical and sustainable spaces.',
      label: 'Body',
      required: true,
    },
  ],
}

import type { Block } from 'payload'

/** Temporary stub so "Add Section" works until real sections are built from screenshots. */
export const CorespacePlaceholderSection: Block = {
  slug: 'corespacePlaceholder',
  interfaceName: 'CorespacePlaceholderSection',
  labels: {
    plural: 'Placeholders',
    singular: 'Placeholder (awaiting design)',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      admin: {
        description: 'Optional note for this upcoming section (e.g. “Hero”, “Services”).',
      },
      defaultValue: 'Section coming soon',
    },
  ],
}

import type { Block } from 'payload'

const categoryOptions = [
  { label: 'Homes', value: 'homes' },
  { label: 'Villas', value: 'villas' },
  { label: 'Homestays', value: 'homestays' },
  { label: 'Renovation', value: 'renovation' },
  { label: 'Architecture', value: 'architecture' },
  { label: 'Interiors', value: 'interiors' },
]

const stageOptions = [
  { label: 'Before', value: 'before' },
  { label: 'During', value: 'during' },
  { label: 'Completed', value: 'completed' },
]

export const CorespaceProjectGallerySection: Block = {
  slug: 'corespaceProjectGallery',
  interfaceName: 'CorespaceProjectGallerySection',
  labels: {
    plural: 'Project Gallery Sections',
    singular: 'Project Gallery',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'GALLERY',
      label: 'Eyebrow label',
    },
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Project Gallery',
      label: 'Heading',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      labels: {
        plural: 'Gallery items',
        singular: 'Gallery item',
      },
      admin: {
        initCollapsed: true,
      },
      minRows: 1,
      defaultValue: [
        {
          category: 'homes',
          stage: 'completed',
          location: 'Madikeri, Kodagu',
          description: 'Completed family residence with efficient layout.',
        },
        {
          category: 'villas',
          stage: 'completed',
          location: 'Coorg, Kodagu',
          description: 'Premium villa with landscape integration.',
        },
        {
          category: 'homestays',
          stage: 'during',
          location: 'Coorg, Kodagu',
          description: 'Guest room interiors under development.',
        },
        {
          category: 'renovation',
          stage: 'before',
          location: 'Madikeri, Kodagu',
          description: 'Property condition prior to upgrade.',
        },
        {
          category: 'architecture',
          stage: 'during',
          location: 'Coorg, Kodagu',
          description: 'Layout and drawings reviewed on site.',
        },
        {
          category: 'interiors',
          stage: 'completed',
          location: 'Coorg, Kodagu',
          description: 'Warm, natural materials throughout the living space.',
        },
      ],
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
        },
        {
          name: 'category',
          type: 'select',
          required: true,
          options: categoryOptions,
        },
        {
          name: 'stage',
          type: 'select',
          required: true,
          options: stageOptions,
        },
        {
          name: 'location',
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

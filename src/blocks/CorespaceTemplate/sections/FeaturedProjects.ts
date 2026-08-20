import type { Block } from 'payload'

export const CorespaceFeaturedProjectsSection: Block = {
  slug: 'corespaceFeaturedProjects',
  interfaceName: 'CorespaceFeaturedProjectsSection',
  labels: {
    plural: 'Featured Projects Sections',
    singular: 'Featured Projects',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'PROOF OF WORK',
      label: 'Eyebrow label',
    },
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Featured Projects',
      label: 'Heading',
      required: true,
    },
    {
      name: 'projects',
      type: 'array',
      labels: {
        plural: 'Projects',
        singular: 'Project',
      },
      admin: {
        initCollapsed: true,
      },
      minRows: 1,
      defaultValue: [
        {
          title: 'Private Residence',
          primaryTag: 'Residential Home',
          tags: [{ label: 'Near Madikeri' }, { label: 'Planning + Construction' }],
          challenge: 'Sloped terrain requiring careful layout planning.',
          approach: [
            { text: 'Terrain assessment' },
            { text: 'Layout optimization' },
            { text: 'Drainage planning' },
          ],
          outcome: 'A practical family home with efficient space utilization and long-term durability.',
        },
        {
          title: 'Premium Villa Development',
          primaryTag: 'Villa / Second Home',
          tags: [{ label: 'Coorg' }, { label: 'Design + Construction + Interiors' }],
          challenge: 'Balancing premium design expectations with budget control.',
          approach: [
            { text: 'Early design alignment' },
            { text: 'Integrated interior planning' },
            { text: 'Cost-aware decision making' },
          ],
          outcome: 'A premium villa with strong design identity and controlled project costs.',
        },
        {
          title: 'Homestay Development',
          primaryTag: 'Hospitality Investment',
          tags: [{ label: 'Coorg' }, { label: 'Planning + Development' }],
          challenge: 'Creating a guest-ready property with clear investment returns.',
          approach: [
            { text: 'Guest-flow planning' },
            { text: 'Operational layout design' },
            { text: 'Phased development planning' },
          ],
          outcome: 'A hospitality-ready property planned for both guest experience and returns.',
        },
      ],
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Project image',
        },
        {
          name: 'primaryTag',
          type: 'text',
          label: 'Primary tag',
          required: true,
          admin: {
            description: 'Highlighted tag, e.g. Residential Home',
          },
        },
        {
          name: 'tags',
          type: 'array',
          labels: {
            plural: 'Secondary tags',
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
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'challenge',
          type: 'textarea',
          required: true,
          label: 'Challenge',
        },
        {
          name: 'approach',
          type: 'array',
          labels: {
            plural: 'Approach points',
            singular: 'Point',
          },
          minRows: 1,
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
          ],
        },
        {
          name: 'outcome',
          type: 'textarea',
          required: true,
          label: 'Outcome',
        },
      ],
    },
  ],
}

import type { Block } from 'payload'

export const CorespaceStepFormSection: Block = {
  slug: 'corespaceStepForm',
  interfaceName: 'CorespaceStepFormSection',
  labels: {
    plural: 'Step Form Sections',
    singular: 'Step Form',
  },
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'TELL US ABOUT YOUR PROJECT',
      label: 'Eyebrow label',
    },
    {
      name: 'heading',
      type: 'text',
      defaultValue: 'Get Your Project Plan & Cost Direction',
      label: 'Heading',
      required: true,
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
      label: 'Form',
      admin: {
        description:
          'Select a form created under Forms. Each form field becomes one step in the wizard.',
      },
    },
    {
      type: 'collapsible',
      label: 'Sidebar (left panel)',
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'sidebarTitle',
          type: 'text',
          defaultValue: 'Why Share This?',
          label: 'Sidebar title',
        },
        {
          name: 'sidebarBody',
          type: 'textarea',
          defaultValue:
            'This short form helps us understand your project early — so we can guide you with clearer planning, design, and cost direction.',
          label: 'Sidebar body',
        },
        {
          name: 'sidebarPoints',
          type: 'array',
          labels: {
            plural: 'Sidebar points',
            singular: 'Point',
          },
          defaultValue: [
            { text: 'Takes under 2 minutes' },
            { text: 'No payment or commitment required' },
            { text: 'A team member reviews every enquiry personally' },
            { text: 'Prefer to talk? WhatsApp us anytime' },
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

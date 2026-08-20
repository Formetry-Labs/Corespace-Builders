import type { Media, Page } from '@root/payload-types'

export type ChildPageCard = {
  description: string
  id: string
  image?: Media | null
  link: {
    label: string
    type: 'custom'
    url: string
  }
  title: string
}

const asMedia = (value: unknown): Media | null => {
  if (value && typeof value === 'object' && 'url' in value) {
    return value as Media
  }

  return null
}

/** SEO meta only — no hero / About fallbacks. */
export const mapPageToChildCard = (
  page: Page,
  options: {
    hrefPrefix: string
  },
): ChildPageCard => {
  return {
    description: page.meta?.description?.trim() || '',
    id: page.id,
    image: asMedia(page.meta?.image),
    link: {
      label: 'Learn more',
      type: 'custom',
      url: `${options.hrefPrefix}/${page.slug}`,
    },
    title: page.meta?.title?.trim() || '',
  }
}

type InjectableSectionBlockType = 'corespaceProjects' | 'corespaceServices'
type InjectableCardsField = 'projects' | 'services'

export const injectChildCardsIntoLayout = (
  layout: Page['layout'] | null | undefined,
  cards: ChildPageCard[],
  options: {
    blockType: InjectableSectionBlockType
    cardsField: InjectableCardsField
  },
): Page['layout'] => {
  if (!layout?.length) {
    return layout || []
  }

  return layout.map((block) => {
    if (block.blockType !== 'corespaceTemplate') {
      return block
    }

    const fields = block.corespaceTemplateFields
    const sections = fields?.sections

    if (!sections?.length) {
      return block
    }

    return {
      ...block,
      corespaceTemplateFields: {
        ...fields,
        sections: sections.map((section) => {
          if (section.blockType !== options.blockType) {
            return section
          }

          return {
            ...section,
            [options.cardsField]: cards,
          }
        }),
      },
    }
  })
}

export const layoutNeedsChildCards = (
  layout: Page['layout'] | null | undefined,
  blockType: InjectableSectionBlockType,
): boolean => {
  if (!layout?.length) {
    return false
  }

  return layout.some((block) => {
    if (block.blockType !== 'corespaceTemplate') {
      return false
    }

    return Boolean(
      block.corespaceTemplateFields?.sections?.some((section) => section.blockType === blockType),
    )
  })
}

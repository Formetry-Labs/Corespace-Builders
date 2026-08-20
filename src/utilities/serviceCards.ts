import type { Media, Page } from '@root/payload-types'

import {
  injectChildCardsIntoLayout,
  layoutNeedsChildCards,
  mapPageToChildCard,
  type ChildPageCard,
} from '@root/utilities/childPageCards'

export type ServiceCard = ChildPageCard

export const mapPageToServiceCard = (page: Page): ServiceCard => {
  return mapPageToChildCard(page, { hrefPrefix: '/service' })
}

export const injectServiceCardsIntoLayout = (
  layout: Page['layout'] | null | undefined,
  cards: ServiceCard[],
): Page['layout'] => {
  return injectChildCardsIntoLayout(layout, cards, {
    blockType: 'corespaceServices',
    cardsField: 'services',
  })
}

export const layoutNeedsServiceCards = (layout: Page['layout'] | null | undefined): boolean => {
  return layoutNeedsChildCards(layout, 'corespaceServices')
}

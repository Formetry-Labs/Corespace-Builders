import type { Page } from '@root/payload-types'

import {
  injectChildCardsIntoLayout,
  layoutNeedsChildCards,
  mapPageToChildCard,
  type ChildPageCard,
} from '@root/utilities/childPageCards'

export type ProjectCard = ChildPageCard

export const mapPageToProjectCard = (page: Page): ProjectCard => {
  return mapPageToChildCard(page, { hrefPrefix: '/project' })
}

export const injectProjectCardsIntoLayout = (
  layout: Page['layout'] | null | undefined,
  cards: ProjectCard[],
): Page['layout'] => {
  return injectChildCardsIntoLayout(layout, cards, {
    blockType: 'corespaceProjects',
    cardsField: 'projects',
  })
}

export const layoutNeedsProjectCards = (layout: Page['layout'] | null | undefined): boolean => {
  return layoutNeedsChildCards(layout, 'corespaceProjects')
}

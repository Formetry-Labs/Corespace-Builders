'use client'

import type { Media as MediaType } from '@root/payload-types'

import React from 'react'

import {
  ChildPageCarousel,
  type ChildPageCarouselItem,
} from '../ChildPageCarousel/index'

type LinkGroup = {
  label?: null | string
  newTab?: boolean | null
  reference?: any
  type?: 'custom' | 'reference' | null
  url?: null | string
}

export type ProjectItem = {
  description: string
  id?: null | string
  image?: MediaType | null | string
  link?: LinkGroup | null
  title: string
}

export type CorespaceProjectsProps = {
  blockType?: 'corespaceProjects'
  cta?: LinkGroup | null
  heading?: null | string
  id?: null | string
  projects?: ProjectItem[] | null
  projectsSource?: null | string
}

export const CorespaceProjects: React.FC<CorespaceProjectsProps> = ({
  cta,
  heading,
  projects,
}) => {
  return (
    <ChildPageCarousel
      ariaLabel="Projects"
      cta={cta}
      heading={heading}
      items={projects as ChildPageCarouselItem[] | null | undefined}
      navLabel="projects"
    />
  )
}

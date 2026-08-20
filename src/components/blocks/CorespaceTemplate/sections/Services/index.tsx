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

export type ServiceItem = {
  description: string
  id?: null | string
  image?: MediaType | null | string
  link?: LinkGroup | null
  title: string
}

export type CorespaceServicesProps = {
  blockType?: 'corespaceServices'
  cta?: LinkGroup | null
  heading?: null | string
  id?: null | string
  services?: ServiceItem[] | null
  servicesSource?: null | string
}

export const CorespaceServices: React.FC<CorespaceServicesProps> = ({
  cta,
  heading,
  services,
}) => {
  return (
    <ChildPageCarousel
      ariaLabel="Services"
      cta={cta}
      heading={heading}
      items={services as ChildPageCarouselItem[] | null | undefined}
      navLabel="services"
    />
  )
}

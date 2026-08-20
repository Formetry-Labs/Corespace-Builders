import type { Metadata } from 'next'

import { Gutter } from '@components/Gutter/index'
import { RenderParams } from '@components/RenderParams/index'
import { mergeOpenGraph } from '@root/seo/mergeOpenGraph'
import { Fragment } from 'react'

import { fetchMe } from './_api/fetchMe'

export const metadata: Metadata = {
  title: {
    default: 'Corespace Builders',
    template: '%s | Corespace Builders',
  },
  twitter: {
    card: 'summary_large_image',
    description:
      'Corespace Builders plans and builds homes, villas, and homestays in Coorg — with clear cost, design, and execution before construction begins.',
    title: 'Corespace Builders',
  },
  // TODO: Add cloud graphic
  openGraph: mergeOpenGraph(),
}

export default async (props) => {
  const { children } = props

  await fetchMe({
    nullUserRedirect: `/login?error=${encodeURIComponent(
      'You must be logged in to visit this page',
    )}`,
  })

  return (
    <Fragment>
      <Gutter>
        <RenderParams />
      </Gutter>
      {children}
    </Fragment>
  )
}

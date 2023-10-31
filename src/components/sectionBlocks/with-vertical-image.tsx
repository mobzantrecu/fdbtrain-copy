/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { SectionBlockFragment } from 'lib/contentful/generated'
import { resolveDescription } from 'lib/contentful/renderers'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import Image from 'next/image'

import { jsx, Heading } from 'theme-ui'

type Props = {
  block: SectionBlockFragment
}

const WithVerticalImage = ({ block }: Props) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '312px'
      }}
    >
      <Image
        src={block.media?.url ?? ''}
        alt={block.media?.title ?? ''}
        width={115}
        height={62}
      />
      <Heading
        sx={{
          mt: '32px',
          mb: '7px',
          fontSize: '22px',
          lineHeight: '26px',
          textAlign: 'center'
        }}
      >
        {withHighlightedText(block.title)}
      </Heading>
      <div sx={{ fontSize: '14px', lineHeight: '20px', textAlign: 'center' }}>
        {resolveDescription(block.subtitle)}
      </div>
    </div>
  )
}

export default WithVerticalImage

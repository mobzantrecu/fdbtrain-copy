/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, Box } from 'theme-ui'
import SectionLayout from 'components/layouts/section'
import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import SectionBlockWithIconTopCard from 'components/sectionBlocks/with-icon-top-card'

const CareerPerksGridSection = ({
  blocksCollection,
  title,
  subtitle,
  anchorLinkId
}: SectionFragment) => (
  <SectionLayout
    anchorId={anchorLinkId}
    title={{ text: title }}
    subtitle={subtitle?.json}
    isHero
    pushSx={{
      '&>div>h1': {
        fontWeight: 600
      },
      pb: '60px !important'
    }}
  >
    <Box
      sx={
        {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          maxWidth: '1500px',
          mx: 'auto'
        } as any
      }
    >
      {blocksCollection?.items.map((item) => {
        if (item?.__typename === 'SectionBlock') {
          return (
            <SectionBlockWithIconTopCard
              key={item?.title as any}
              {...item}
              sx={{
                boxShadow:
                  '0px 1px 1px rgba(0, 0, 0, 0.06), 0px 5px 25px rgba(0, 0, 0, 0.03)'
              }}
            />
          )
        }
        if (isDev) {
          throw new Error(`Unsupported block type, ${item?.__typename}`)
        }
        return null
      })}
    </Box>
  </SectionLayout>
)

export default CareerPerksGridSection

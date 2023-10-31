/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import SectionLayout from 'components/layouts/section'
import WithVerticalImage from 'components/sectionBlocks/with-vertical-image'
import { SectionBlockFragment } from 'lib/contentful/generated'
import { jsx, Grid } from 'theme-ui'

type Props = {
  blocks: (SectionBlockFragment | null | undefined)[] | null | undefined
}

const Graphics = ({ blocks }: Props) => {
  return (
    <SectionLayout>
      <Grid
        columns={[1, null, 3]}
        // gap={'32px'}
        sx={{
          width: 'fit-content',
          mx: 'auto',
          gap: ['20px', '20px', '15px', '32px', '32px'],
          '&>div': {
            backgroundColor: 'background',
            p: '30px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            maxWidth: ['310px', 'none', '292px', 'none', 'none'],
            '@media screen and (max-width: 320px)': {
              maxWidth: '255px'
            },
            '&>h2': {
              fontSize: '28px',
              lineHeight: '34px',
              fontWeight: '600',
              width: ['none', 'none', '200px', 'none', 'none']
            },
            '&>div:nth-of-type(2)': {
              fontSize: '16px',
              lineHeight: '24px',
              width: ['250px', '250px', '326px', '250px', '326px'],
              maxWidth: ['300px', 'none', '200px', 'none', 'none']
            }
          }
        }}
      >
        {blocks?.map((b, i) => {
          if (!b) return null
          return <WithVerticalImage key={i} block={b} />
        })}
      </Grid>
    </SectionLayout>
  )
}

export default Graphics

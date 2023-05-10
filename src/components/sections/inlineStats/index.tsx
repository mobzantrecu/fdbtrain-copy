/** @jsx jsx */
import { isDev } from 'lib/constants'
import { jsx } from 'theme-ui'

import { SectionFragment } from 'lib/contentful/generated'
import { Box, Grid } from 'theme-ui'
import SectionBlockWithPurpleTitle from '../../sectionBlocks/with-purple-title'
import { Fragment } from 'react'

const InlineStats = ({ blocksCollection }: SectionFragment) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      my: '-94px',
      px: ['32px', '100px', '100px', '192px', '192px'],
      background: '#f9f9f9'
    }}
  >
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        boxShadow: 'card',
        maxWidth: '1172px',
        maxHeight: '170px',
        width: '100%',
        borderRadius: '4px',
        background: 'white',
        '@media screen and (max-width: 1162px)': {
          display: 'none'
        }
      }}
    >
      {blocksCollection?.items.map((item, i) => {
        if (item?.__typename === 'SectionBlock') {
          return (
            <Fragment key={`${item?.title}_${i}`}>
              <SectionBlockWithPurpleTitle key={item?.title} {...item} />
              {i !== blocksCollection?.items.length - 1 && (
                <div
                  style={{
                    width: '2px',
                    background: '#EEEEEE',
                    marginBottom: '29px',
                    marginTop: '29px'
                  }}
                  key={`${item?.title}_${i}`}
                ></div>
              )}
            </Fragment>
          )
        }
        if (isDev) {
          throw new Error(`Unsupported block type, ${item?.__typename}`)
        }
        return null
      })}
    </Box>
    <Grid
      columns={[
        '1fr 1fr',
        '1fr 1fr',
        '1fr 1fr',
        '1fr 1fr',
        '1fr 1fr',
        '1fr 1fr',
        '1fr 1fr'
      ]}
      sx={{
        maxWidth: '1172px',
        width: '100%',
        gap: '20px',
        '@media screen and (min-width: 1163px)': {
          display: 'none'
        },
        '@media screen and (max-width: 400px)': {
          gridTemplateColumns: '1fr !important'
        }
      }}
    >
      {blocksCollection?.items.map((item) => {
        if (item?.__typename === 'SectionBlock') {
          return (
            <div key={item?.title} sx={{ boxShadow: 'card' }}>
              <SectionBlockWithPurpleTitle {...item} />
            </div>
          )
        }
        if (isDev) {
          throw new Error(`Unsupported block type, ${item?.__typename}`)
        }
        return null
      })}
    </Grid>
  </Box>
)

export default InlineStats

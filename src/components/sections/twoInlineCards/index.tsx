/** @jsx jsx */
import { jsx } from 'theme-ui'
import { isDev } from 'lib/constants'
import { SectionFragment } from 'lib/contentful/generated'
import { Box, Grid } from 'theme-ui'
import SectionBlockWithIconInline from '../../sectionBlocks/with-icon-inline'
import { Fragment } from 'react'

const TwoInlineCards = ({ blocksCollection }: SectionFragment) => (
  <Box
    sx={{
      minHeight: '223px',
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      px: ['32px', '100px', '100px', '192px', '192px'],
      background: '#f9f9f9',
      paddingBottom: ['50px', '40px', '40px', '40px', 0, 0],
      marginTop: ['-26px', '-26px', '-26px', '-26px', 0, 0]
    }}
  >
    <Box
      sx={{
        maxWidth: '1172px',
        display: 'flex',
        textAlign: ['center', null, 'left'],
        boxShadow: 'card',
        width: '100%',
        borderRadius: '4px',
        justifyContent: [
          'space-between',
          'space-between',
          'space-between',
          'space-between',
          'space-between',
          'start'
        ],
        padding: '30px',
        background: 'white',
        zIndex: 0,
        marginTop: '-45px',
        '@media screen and (max-width: 1162px)': {
          display: 'none'
        }
      }}
    >
      {blocksCollection?.items.map((item, i) => {
        if (item?.__typename === 'SectionBlock') {
          return (
            <Fragment key={`${item?.title}_${i}_mobile`}>
              <SectionBlockWithIconInline {...item} isLarge />
              {i === 0 && (
                <div
                  sx={{
                    marginLeft: [
                      '40px',
                      '40px',
                      '40px',
                      '40px',
                      '40px',
                      '83.3125px'
                    ],
                    marginRight: [
                      '40px',
                      '40px',
                      '40px',
                      '40px',
                      '40px',
                      '40px'
                    ],
                    width: '2px',
                    background: '#EEEEEE'
                  }}
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
      columns={['1fr', '1fr', 'repeat(2, 1fr)']}
      sx={{
        zIndex: 9,
        maxWidth: '1172px',
        width: '100%',
        gap: '20px',
        '@media screen and (min-width: 1163px)': {
          display: 'none'
        }
      }}
    >
      {blocksCollection?.items.map((item, i) => {
        if (item?.__typename === 'SectionBlock') {
          return (
            <SectionBlockWithIconInline
              key={`${item?.title}_${i}`}
              {...item}
              isLarge={false}
            />
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

export default TwoInlineCards

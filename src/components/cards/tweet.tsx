/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, Flex, Text, SxStyleProp, Box, Grid } from 'theme-ui'
import { TweetFragment } from 'lib/contentful/generated'
import { FiTwitter } from 'react-icons/fi'
import { Fragment } from 'react'

type Props = TweetFragment & { pushSx?: SxStyleProp }

const TweetCard = ({
  text,
  userName,
  userTag,
  pushSx,
  publicationDate
}: Props) => (
  <Grid
    sx={{
      gridTemplateRows: '1fr auto 1fr',
      gap: 0,
      gridTemplateColumns: 'repeat(4, 1fr)',
      width: ['300px', '385px', '385px', '500px', '550px'],
      background: 'white',
      color: 'text',
      boxShadow: 'cardWithIllustration',
      p: 4,
      pb: 0,
      borderRadius: '8px',
      ...pushSx
    }}
  >
    <Flex
      sx={{
        gridColumn: '1/4',
        mb: 3
      }}
    >
      <div>
        <Text sx={{ fontWeight: 600, lineHeight: 1, mb: 2 }}>{userName}</Text>
        <Text sx={{ lineHeight: 1 }}>@{userTag}</Text>
      </div>
    </Flex>
    <Flex sx={{ justifyContent: 'flex-end' }}>
      <i sx={{ fontSize: 6 }}>
        <FiTwitter fill="#059FF5" stroke="#059FF5" />
      </i>
    </Flex>
    <Text
      sx={{
        gridColumn: '1/5',
        overflow: 'hidden',
        fontSize: [18, 18, 18, 32, 32],
        lineHeight: 1,
        fontWeight: 600,
        b: { color: '#059FF5' },
        whiteSpace: 'break-spaces',
        pb: '5px'
      }}
    >
      {formatTweet(text)}
    </Text>
    <Flex
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        width: ['70%', '50%'],
        gridColumn: '1/4'
      }}
    >
      <i className="fa-light fa-comment"></i>
      <i className="fa-light fa-arrows-retweet"></i>
      <i className="fa-light fa-heart"></i>
      <i className="fa-light fa-arrow-up-from-bracket"></i>
    </Flex>
    <Box>
      <Text sx={{ color: '#647787', fontWeight: 600 }}>{publicationDate}</Text>
    </Box>
  </Grid>
)

function formatTweet(text: string | null | undefined) {
  if (!text) return ''
  const substr = text.length > 85 ? `${text?.substring(0, 85)}...` : text
  const words = substr.split(' ')

  return words.map((w, i) => {
    if (w.includes('@') || w.includes('#')) {
      const whiteSpaceSplit = w.split('\n')

      return (
        <Fragment key={i}>
          {i > 0 && ' '}
          {whiteSpaceSplit.map((clean, idx) => {
            if (clean.includes('@') || clean.includes('#')) {
              return (
                <Fragment key={idx}>
                  {idx > 0 && <br />}
                  <b>{clean}</b>
                </Fragment>
              )
            }
            return (
              <Fragment key={idx}>
                {idx > 0 && <br />}
                {clean}
              </Fragment>
            )
          })}
        </Fragment>
      )
    }
    return (
      <Fragment key={i}>
        {i > 0 && ' '}
        {w}
      </Fragment>
    )
  })
}

export default TweetCard

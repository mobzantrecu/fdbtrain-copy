/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, Box, Heading, Text } from 'theme-ui'
import { SectionBlockFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import Link from 'components/primitives/link'

const BigCard = ({
  title,
  subtitle,
  media,
  actionsCollection
}: SectionBlockFragment) => {
  const action = actionsCollection?.items[0]

  return (
    <>
      <Box
        sx={
          {
            textAlign: ['center', null, 'left'],
            display: 'flex',
            flexDirection: 'column',
            justifyContent: [
              'center',
              'center',
              'flex-start',
              'flex-start',
              'flex-start'
            ]
          } as any
        }
      >
        <Heading
          as="h1"
          variant="heading.base"
          sx={{ mb: 3, fontSize: 28, fontWeight: 600, lineHeight: '34px' }}
        >
          {title}
        </Heading>
        <Text
          variant="small"
          sx={{
            m: '4px 0 32px 0',
            '&>p': {
              lineHeight: '24px',
              fontSize: 16
            },
            width: '100%'
          }}
        >
          {defaultRenderer(subtitle?.json)}
        </Text>
        <Link
          {...action}
          key={action?.href as any}
          sx={{
            width: '150px',
            '@media screen and (max-width: 831px)': {
              display: 'none'
            },
            color: 'background',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
          variant="accent"
          arrow
        />
      </Box>
      <div sx={{}}>
        {media && (
          <img
            src={media?.url ?? ''}
            alt={media?.title ?? ''}
            sx={{
              width: '550px',
              height: 'auto',
              margin: 'auto'
            }}
          />
        )}
      </div>
      <div sx={{ textAlign: 'center' }}>
        <Link
          {...action}
          key={action?.href as any}
          sx={{
            width: '105px',
            '@media screen and (min-width: 831px)': {
              display: 'none'
            },
            color: 'background',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
          variant="accent"
          arrow
        />
      </div>
    </>
  )
}

export default BigCard

/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { Grid, jsx, Text } from 'theme-ui'
import SectionLayout from 'components/layouts/section'
import { SectionFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import Link from 'components/primitives/link'
import Image from 'next/image'

const RegionsSection = ({
  title,
  subtitle,
  image,
  actionsCollection,
  anchorLinkId,
  backgroundImage
}: SectionFragment) => {
  const action = actionsCollection?.items[0]
  return (
    <SectionLayout
      anchorId={anchorLinkId}
      pushSx={{
        background: `url(${backgroundImage?.url})`,
        backgroundSize: 'cover',
        backgroundColor: 'gray2',
        height: '106vh',
        color: 'background',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: [100, ''],
        px: [25, '']
      }}
    >
      <Grid columns={[1, null, '12fr 10fr']} gap={[4, null, 5]}>
        <div
          sx={{
            maxWidth: 'md',
            pt: [0, null, 5],
            textAlign: ['center', null, 'left'],
            m: '24px 0 0 7px'
          }}
        >
          <Text sx={{ fontSize: '32px', fontWeight: 600, lineHeight: '41px' }}>
            {title}
          </Text>
          <Text
            variant="small"
            sx={{
              m: '4px 0 32px 0',
              '&>p': {
                lineHeight: '20px',
                fontSize: '16px'
              },
              width: ['100%', '100%', '100%', '100%', '510px']
            }}
          >
            {defaultRenderer(subtitle?.json, false, backgroundImage?.title)}
          </Text>
          {action && (
            <Link
              {...action}
              key={action?.href as any}
              sx={{
                ':not(:last-of-type)': { mr: 3 },
                fontWeight: '600',
                color: 'background',
                '@media screen and (max-width: 831px)': {
                  display: 'none'
                },
                mt: 4
              }}
              variant="accent"
              arrow
              backgroundColor={backgroundImage?.title}
            />
          )}
        </div>
        <div
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            backgroundColor: 'background',
            height: ['190px', '190px', '290px', '290px', '349px'],
            width: ['280px', '280px', '380px', '380px', '554px'],
            borderRadius: '8px',
            m: ['auto', 'auto', 'auto', 'auto', '31px 0 0 -47px'],
            p: [
              '0 25px 10px 25px',
              '0 25px 10px 25px',
              '0 25px 10px 25px',
              '0 25px 10px 25px',
              ''
            ]
          }}
        >
          <Image
            width={'439px'}
            height={'307px'}
            src={'/images/backgrounds/world.svg'}
            alt={image?.title ?? ''}
          />
        </div>
        <div sx={{ textAlign: 'center' }}>
          {action && (
            <Link
              {...action}
              key={action?.href as any}
              sx={{
                ':not(:last-of-type)': { mr: 3 },
                fontWeight: '600',
                color: 'background',
                '@media screen and (min-width: 831px)': {
                  display: 'none'
                },
                mt: 4
              }}
              variant="accent"
              arrow
              backgroundColor={backgroundImage?.title}
            />
          )}
        </div>
      </Grid>
    </SectionLayout>
  )
}

export default RegionsSection

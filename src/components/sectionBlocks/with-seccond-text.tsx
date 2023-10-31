/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, Heading, Text } from 'theme-ui'
import Link from 'components/primitives/link'
import { SectionBlockFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'

type Props = SectionBlockFragment & {
  toTheRight?: boolean
  stripDown?: boolean
  index?: number
  isHome?: boolean
  noBackground?: boolean
}

type TextComponentProps = SectionBlockFragment & {
  backgroundHasBlue?: boolean
  buttonVariant?: string
}

const TextComponent = ({
  title,
  subtitle,
  actionsCollection,
  backgroundImage,
  backgroundHasBlue,
  buttonVariant
}: TextComponentProps) => {
  return (
    <>
      <Heading
        as="h1"
        variant="heading.3"
        sx={{
          mb: 3,
          '@media screen and (max-width: 831px)': {
            mt: backgroundHasBlue ? 4 : ''
          },
          fontWeight: '600',
          maxWidth: ['100%', '100%', '450px'],
          letterSpacing: '0px'
        }}
      >
        {title}
      </Heading>
      <Text
        variant="normal"
        sx={{
          mb: 2,
          maxWidth: ['100%', '100%', '520px'],
          lineHeight: '24px',
          '.hasArrow:nth-of-type(1)': {
            mt: '20px'
          }
        }}
      >
        {defaultRenderer(subtitle?.json, backgroundHasBlue ? true : false)}
      </Text>
      {actionsCollection?.items.map((action) =>
        action?.children?.includes('|') ? (
          <Link
            {...action}
            key={action?.href as any}
            sx={{
              height: '34px',
              fontWeight: 600,
              textTransform: 'uppercase',
              fontSize: ['11px', '12px'],
              letterSpacing: '0.5px',
              lineHeight: '19px',
              px: '0px',
              width: '170px',
              '@media screen and (max-width: 831px)': {
                alignSelf: 'center'
              }
            }}
            backgroundColor={backgroundImage?.title}
            variant={buttonVariant}
          />
        ) : (
          <Link
            {...action}
            key={action?.href as any}
            sx={{
              ':not(:last-of-type)': { mr: 3 },
              fontWeight: '600',
              color: backgroundHasBlue ? 'darkBackgroundAnchor' : 'primary',
              '&:hover': {
                textDecoration: backgroundHasBlue ? 'underline' : ''
              },
              '@media screen and (max-width: 831px)': {
                alignSelf: 'center'
              }
            }}
            variant="accent"
            arrow
          />
        )
      )}
    </>
  )
}

const SectionBlockOnlyText = ({
  title,
  subtitle,
  actionsCollection,
  backgroundImage
}: Props) => {
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        color: 'gray1',
        maxWidth: '474px',
        alignSelf: 'baseline'
      }}
    >
      <TextComponent
        actionsCollection={actionsCollection}
        title={title}
        subtitle={subtitle}
        backgroundImage={backgroundImage}
        buttonVariant="buttons.outline"
        backgroundHasBlue={true}
      />
    </div>
  )
}

export default SectionBlockOnlyText

/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, Heading, Text } from 'theme-ui'
import {
  CallToAction,
  SectionBlock,
  SectionBlockSubtitle
} from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import Link from 'components/primitives/link'
import getIcon from 'lib/get-icon'
import withHighlightedText from 'lib/contentful/renderers/highlight'

type Props = Pick<SectionBlock, 'title' | 'icon'> & {
  subtitle?: Pick<SectionBlockSubtitle, 'json'> | null
  actionsCollection?: {
    items: (Pick<CallToAction, 'children' | 'href'> | null)[]
  } | null
}

const SectionBlockWithIconTopCard = ({
  title,
  subtitle,
  actionsCollection,
  icon
}: Props) => {
  const Icon = getIcon(icon) as any
  return (
    <div
      sx={{
        color: 'gray10',
        borderRadius: '8px',
        boxShadow: 'card',
        backgroundColor: 'background',
        padding: '20px 38px',
        margin: '30px 17px',
        width: '365px'
      }}
    >
      <div
        sx={{
          borderRadius: 'full',
          variant: 'gradients.circleSoft',
          color: 'iconPrimary',
          fontSize: 4,
          mt: '25px',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {Icon && <Icon />}
      </div>
      <Heading
        as="h1"
        variant="heading.base"
        sx={{ mb: '7px', mt: 22, fontWeight: '600' }}
      >
        {withHighlightedText(title)}
      </Heading>
      <Text variant="small" sx={{ lineHeight: '20px' }}>
        {defaultRenderer(subtitle?.json)}
      </Text>
      {actionsCollection?.items[0] && (
        <Link
          {...actionsCollection?.items[0]}
          variant="accent"
          sx={{ mt: 3 }}
          arrow
        />
      )}
    </div>
  )
}

export default SectionBlockWithIconTopCard

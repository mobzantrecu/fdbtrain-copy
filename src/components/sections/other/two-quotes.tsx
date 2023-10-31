/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { Grid, jsx } from 'theme-ui'

import BigQuote from 'components/cards/big-quote'
import SectionLayout from 'components/layouts/section'
import { QuoteFragment, SectionFragment } from 'lib/contentful/generated'

const TwoQuotes = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId
}: SectionFragment) => {
  const blocks = (blocksCollection?.items.filter(
    (b) => b?.__typename === 'Quote2'
  ) ?? []) as QuoteFragment[]

  return (
    <SectionLayout
      anchorId={anchorLinkId}
      title={{ text: title }}
      subtitle={subtitle?.json}
      pushSx={{ backgroundColor: 'gray2' }}
    >
      <Grid
        gap={[3, 4]}
        columns={['1fr', '1fr', '1fr 1fr']}
        sx={{
          display: 'grid',
          mx: [1, 1, 1, 3, 6]
        }}
      >
        {blocks.map((item, i) => (
          <BigQuote
            key={i}
            quote={item.quote}
            person={item.person}
            logo={item.logo}
          />
        ))}
      </Grid>
    </SectionLayout>
  )
}

export default TwoQuotes

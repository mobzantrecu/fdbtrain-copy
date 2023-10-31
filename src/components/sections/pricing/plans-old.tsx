/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import PricingPlanCardOld from 'components/cards/pricing-plan/old'
import SectionLayout from 'components/layouts/section'
import Link from 'components/primitives/link'
import {
  PricingPlanFragment,
  SectionBlockFragment,
  SectionFragment
} from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import { Box, Card, Grid, Heading, Text } from 'theme-ui'

const PricingPlansSectionOld = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId
}: SectionFragment) => {
  // const { onCTAClick } = useExperiment()
  const blocks = (blocksCollection?.items.filter(
    (b) => b?.__typename === 'PricingPlan'
  ) ?? []) as PricingPlanFragment[]

  const customPlansBlock = blocksCollection?.items.find(
    (b) => b?.__typename === 'SectionBlock'
  ) as SectionBlockFragment | undefined

  return (
    <SectionLayout
      anchorId={anchorLinkId}
      title={{ text: title }}
      subtitle={subtitle?.json}
      pushSx={{ pt: '0 !important' }}
    >
      <Grid
        variant="four"
        sx={{
          gridTemplateColumns: [
            '1fr',
            '1fr 1fr',
            null,
            'repeat(3, 1fr)',
            'repeat(4, 1fr)'
          ]
        }}
      >
        {blocks.map((b) => (
          <PricingPlanCardOld key={b.name as any} {...b} />
        ))}
      </Grid>
      {customPlansBlock && (
        <Card
          sx={{
            display: ['block', 'flex'],
            justifyContent: 'space-between',
            mt: 5
          }}
        >
          <Box sx={{ display: ['block', 'flex'], alignItems: 'center' }}>
            <Heading
              variant="heading.base"
              sx={{
                fontWeight: 600,
                fontSize: '24px',
                minWidth: 'fit-content'
              }}
            >
              {customPlansBlock.title}
            </Heading>
            <Text sx={{ my: [3, 0], mx: [0, 4] }}>
              {defaultRenderer(customPlansBlock.subtitle?.json)}
            </Text>
          </Box>
          <Link
            {...customPlansBlock.actionsCollection?.items[0]}
            variant="buttons.primary"
            sx={{ minWidth: 'fit-content' }}
            //onClick={onCTAClick}
            data-event-label="CTA Click: Custom Plans"
          />
        </Card>
      )}
    </SectionLayout>
  )
}

export default PricingPlansSectionOld

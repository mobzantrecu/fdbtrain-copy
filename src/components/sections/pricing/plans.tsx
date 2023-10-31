/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import PricingPlanCard from 'components/cards/pricing-plan'
import SectionLayout from 'components/layouts/section'
import Link from 'components/primitives/link'
import {
  PricingPlanV2Fragment,
  SectionBlockFragment,
  SectionFragment
} from 'lib/contentful/generated'
import defaultRenderer, { resolveDescription } from 'lib/contentful/renderers'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import { useCallback, useMemo, useState } from 'react'
import { Box, Card, Container, Grid, Heading, Text, jsx } from 'theme-ui'

type Props = { comingSoonText?: string } & SectionFragment

const PricingPlansSection = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId
}: // comingSoonText
Props) => {
  const [isMonthly, setIsMonthly] = useState<boolean>(false)
  const [descriptionHeights, setDescriptionHeights] = useState<number[]>([])

  const descriptionHeight = useMemo(() => {
    const finalHeight = descriptionHeights.reduce<number | undefined>(
      (prev, curr) => {
        if (!prev || curr > prev) return curr
        return prev
      },
      undefined
    )
    return finalHeight
  }, [descriptionHeights])

  const setDescriptionHeight = useCallback((height: number, index: number) => {
    setDescriptionHeights((descriptions) => {
      if (descriptions.length === 0) {
        return [...descriptions, height]
      }

      const indexValue = descriptions.find((_h, i) => i === index)
      if (!indexValue) {
        return [...descriptions, height]
      }

      return descriptions
    })
  }, [])

  const blocks = (blocksCollection?.items.filter(
    (b) => b?.__typename === 'PricingPlanV2'
  ) ?? []) as PricingPlanV2Fragment[]

  const [freePlanBlock, customPlansBlock] = blocksCollection?.items.filter(
    (b) => b?.__typename === 'SectionBlock'
  ) as (SectionBlockFragment | undefined)[]

  return (
    <Box sx={{ backgroundColor: 'gray2' }}>
      <SectionLayout
        anchorId={anchorLinkId}
        title={{ text: title }}
        subtitle={subtitle?.json}
        pushSx={{ pt: '30px !important', px: '22px' }}
        smallContainer
      >
        <Card
          sx={{
            display: ['block', null, 'flex'],
            justifyContent: 'space-between',
            alignItems: ['flex-start', null, 'center'],
            mb: '56px',
            py: '42px',
            border: 'none',
            boxShadow: 'card'
          }}
        >
          <Heading
            variant="heading.base"
            sx={{
              fontWeight: 600,
              fontSize: '22px',
              minWidth: 'fit-content',
              m: ['3px 0 0 0px', '3px 0 0 0px', '3px 0 0 13px']
            }}
          >
            {withHighlightedText(freePlanBlock?.title)}
          </Heading>
          <Text
            sx={{
              my: [3, null, 0],
              mx: [0, null, '24px'],
              fontSize: '14px'
            }}
          >
            {resolveDescription(freePlanBlock?.subtitle)}
          </Text>
          <div
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              ml: ['13px', '13px', '0px'],
              maxWidth: [null, 'fit-content']
            }}
          >
            <Link
              {...freePlanBlock?.actionsCollection?.items[0]}
              variant="buttons.primary"
              sx={{
                width: ['fit-content', null, '210px'],
                height: '35px',
                textAlign: 'center',
                whiteSpace: 'nowrap',
                position: 'relative',
                left: '-17px',
                textTransform: 'uppercase',
                fontSize: '12px',
                fontWeight: 400,
                letterSpacing: '0.55px'
              }}
              //onClick={onCTAClick}
              data-event-label="CTA Click: Free Plan"
            />
          </div>
        </Card>
        <Container
          sx={{
            mb: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: ['column', null, null, 'row'],
            px: '0'
          }}
        >
          <div
            sx={{
              fontSize: ['14px', '18px'],
              display: 'flex',
              alignItems: 'center',
              mb: ['8px', null, null, '0'],
              mt: '3px'
            }}
          >
            <p sx={{ fontSize: '14px', ml: '-1px' }}>Annual (Save 10%)</p>
            <label
              sx={{
                width: '34px',
                height: '16px',
                background: '#D7D7D7',
                borderRadius: '16px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                mx: '10px'
              }}
              htmlFor="pricing"
            >
              <input
                id="pricing"
                name="pricing"
                onChange={() => setIsMonthly((prev) => !prev)}
                type="checkbox"
                sx={{ opacity: '0', width: '0', height: '0' }}
              />
              <span
                sx={{
                  position: 'absolute',
                  left: isMonthly ? '20px' : '0',
                  cursor: 'pointer',
                  width: '20px',
                  height: '20px',
                  background: '#5112B9',
                  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.12)',
                  borderRadius: '50%',
                  transition: 'all 0.3s'
                }}
              />
            </label>
            <p sx={{ fontSize: '14px', ml: '-4px' }}>&nbsp;Monthly</p>
          </div>
          <p
            sx={{
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              mr: '1px'
            }}
          >
            Annual plans are billed upfront when you sign up, with on-demand
            usage charged monthly.
          </p>
        </Container>
        <Grid
          variant="three"
          sx={{
            gridTemplateColumns: ['1fr', '1fr 1fr', null, 'repeat(4, 1fr)'],
            mt: '-17px'
          }}
        >
          {blocks.map((b, i) => (
            <PricingPlanCard
              key={b.name as any}
              {...b}
              isMonthly={isMonthly}
              descriptionHeight={descriptionHeight}
              setDescriptionHeight={setDescriptionHeight}
              index={i}
            />
          ))}
        </Grid>
        {customPlansBlock && (
          <Card
            sx={{
              display: ['block', null, 'flex'],
              justifyContent: 'space-between',
              alignItems: ['flex-start', null, 'center'],
              mt: 5,
              mb: '0px',
              py: '42px',
              border: 'none',
              boxShadow: 'card'
            }}
          >
            <Heading
              variant="heading.base"
              sx={{
                fontWeight: 600,
                fontSize: '22px',
                minWidth: 'fit-content',
                m: ['3px 0 0 0px', '3px 0 0 0px', '3px 0 0 13px']
              }}
            >
              {customPlansBlock.title}
            </Heading>
            <Text
              sx={{
                my: [3, null, 0],
                mx: [0, null, '24px'],
                fontSize: '14px'
              }}
            >
              {defaultRenderer(customPlansBlock.subtitle?.json)}
            </Text>
            <div
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                ml: ['13px', '13px', '0px'],
                maxWidth: [null, 'fit-content']
              }}
            >
              <Link
                {...customPlansBlock.actionsCollection?.items[0]}
                variant="buttons.primary"
                sx={{
                  width: ['fit-content', null, '210px'],
                  height: '35px',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  position: 'relative',
                  left: '-17px',
                  textTransform: 'uppercase',
                  fontSize: '12px',
                  fontWeight: 400,
                  letterSpacing: '0.55px'
                }}
                // onClick={onCTAClick}
                data-event-label="CTA Click: Custom Plans"
              />
            </div>
          </Card>
        )}
        {/* <Text variant="small" sx={{ mt: 4 }}>
        {comingSoonText ?? '* coming soon'}
      </Text> */}
      </SectionLayout>
    </Box>
  )
}

export default PricingPlansSection

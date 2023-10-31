/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import Marked from 'components/compound/marked'
import Link from 'components/primitives/link'
import { PricingPlanV2Fragment } from 'lib/contentful/generated'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import { Card, Flex, Heading, Text, jsx } from 'theme-ui'
import useResizeObserver from 'use-resize-observer'

import s from './pricing-plan.module.scss'

type Props = PricingPlanV2Fragment & {
  isMonthly: boolean
  descriptionHeight: number | undefined
  setDescriptionHeight: (h: number, i: number) => void
  index: number
}

const PricingPlanCard = ({
  name,
  planDescription,
  action,
  isFeatured,
  priceLabel,
  annualPriceLabel,
  body,
  annualBody,
  isMonthly,
  index,
  descriptionHeight,
  setDescriptionHeight
}: Props) => {
  // const { onCTAClick } = useExperiment()

  const { ref } = useResizeObserver<HTMLDivElement>({
    onResize: ({ height = 0 }) => {
      setDescriptionHeight(height, index)
    }
  })

  return (
    <Card
      sx={{
        boxShadow: 'cardInteractive',
        position: 'relative',
        ':hover': {
          boxShadow: 'cardHover'
        }
      }}
    >
      <div
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          variant: 'gradients.button',
          display: isFeatured ? 'none' : 'none'
        }}
      />
      <div
        sx={{
          position: 'absolute',
          top: '2px',
          left: '2px',
          bottom: '2px',
          right: '2px',
          borderRadius: 'md',
          variant: 'gradients.muted',
          display: isFeatured ? 'none' : 'none'
        }}
      />
      <Flex
        sx={
          {
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 'general',
            position: 'relative',
            height: '100%',
            textAlign: 'center'
          } as any
        }
      >
        <div>
          <Heading variant="heading.base" sx={{ fontWeight: 600, mb: 2 }}>
            {name}
          </Heading>
          <Text
            variant="small"
            sx={{ height: `${descriptionHeight}px !important` }}
            ref={ref}
            as="div"
          >
            <Marked>{planDescription ?? ''}</Marked>
          </Text>
          <Heading
            variant="heading.base"
            sx={{ fontSize: '14px', m: '8px 0 16px 0' }}
          >
            {withHighlightedText(isMonthly ? priceLabel : annualPriceLabel)}
          </Heading>
          {action && (
            <div>
              <Link
                {...action}
                variant={isFeatured ? 'buttons.primary' : 'buttons.outline'}
                sx={{
                  width: '100%',
                  height: '35px',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  fontWeight: '400',
                  letterSpacing: '0.5px'
                }}
                //onClick={onCTAClick}
                data-event-label={`CTA Click: ${name} Plan`}
              />
            </div>
          )}
          <div sx={{ textAlign: 'left', mt: 3, '&>div>ul': { ml: '8px' } }}>
            <Marked
              className={s.marked}
              sx={{ '&>p': { mt: 3, fontWeight: 'bold', fontSize: '14px' } }}
            >
              {(isMonthly ? body : annualBody) ?? ''}
            </Marked>
          </div>
        </div>
      </Flex>
    </Card>
  )
}

export default PricingPlanCard

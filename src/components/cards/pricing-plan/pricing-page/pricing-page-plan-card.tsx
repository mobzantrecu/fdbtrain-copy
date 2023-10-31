/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import Marked from 'components/compound/marked'
import Link from 'components/primitives/link'
import { PricingPlanV2Fragment } from 'lib/contentful/generated'
import { Card, Flex, Heading, Text, jsx } from 'theme-ui'
import useResizeObserver from 'use-resize-observer'
import { renderForHardcodedText } from '../../../../lib/util/text'

import s from '../pricing-plan.module.scss'

type Props = PricingPlanV2Fragment & {
  isMonthly: boolean
  descriptionHeight: number | undefined
  setDescriptionHeight: (h: number, i: number) => void
  index: number
  pushSx?: any
}

const PricingPagePlanCard = ({
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
  pushSx = {},
  setDescriptionHeight
}: Props) => {
  const { ref } = useResizeObserver<HTMLDivElement>({
    onResize: ({ height = 0 }) => {
      setDescriptionHeight(height, index)
    }
  })

  const hasCustomPricing =
    annualPriceLabel?.includes('Custom Pricing') ||
    priceLabel?.includes('Custom Pricing')

  const getTextToColor = (text: string) => {
    const textToColor = text.split('|+').find((x) => x.includes('$'))
    return textToColor
  }

  return (
    <Card
      sx={{
        position: 'relative',
        borderRadius: 0,
        boxShadow: 'none',
        ...pushSx
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
          <Heading
            variant="heading.base"
            sx={{
              fontWeight: 600,
              mb: '10px',
              fontSize: 28,
              lineHeight: '30px'
            }}
          >
            {name}
          </Heading>
          <Text
            variant="small"
            sx={{
              textAlign: 'center',
              minHeight: `${descriptionHeight}px !important`,
              fontSize: '16px',
              marginBottom: '20px'
            }}
            ref={ref}
            as="div"
          >
            <Marked>{planDescription ?? ''}</Marked>
          </Text>
          <Heading
            variant="heading.base"
            sx={{ fontSize: '14px', m: '8px 0 16px 0' }}
          >
            {hasCustomPricing ? (
              <span
                sx={{ fontSize: '28px', fontWeight: 600, color: '#896BFF' }}
              >
                Custom Pricing
              </span>
            ) : (
              renderForHardcodedText(
                isMonthly ? priceLabel : (annualPriceLabel as any),
                {},
                false,
                undefined,
                '|+',
                { fontSize: 46, fontWeight: 600 },
                { fontSize: 16, color: '#363A3D' },
                '#6742F1',
                getTextToColor
              )
            )}
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
          <div
            sx={{
              mt: '20px',
              textAlign: 'left',
              '&>div>ul': { ml: '8px' }
            }}
          >
            <Marked
              className={s.marked}
              sx={{
                '&>h3': {
                  mt: 3,
                  fontWeight: 'bold',
                  fontSize: '16px'
                },
                '&>ul>li': {
                  fontSize: '16px'
                }
              }}
            >
              {(isMonthly ? body : annualBody) ?? ''}
            </Marked>
          </div>
        </div>
      </Flex>
    </Card>
  )
}

export default PricingPagePlanCard

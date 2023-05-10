/** @jsx jsx */
import PricingPlanCard from 'components/cards/pricing-plan/pricing-page/pricing-page-plan-card'
import SectionLayout from 'components/layouts/section'
import Link from 'components/primitives/link'
import {
  PricingPlanV2Fragment,
  SectionBlockFragment,
  SectionFragment
} from 'lib/contentful/generated'
import { resolveDescription } from 'lib/contentful/renderers'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import { Fragment, useCallback, useMemo, useState } from 'react'
import { Box, Card, Grid, Heading, Text, jsx } from 'theme-ui'

type Props = { comingSoonText?: string } & SectionFragment

const PricingPagePlansSection = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId
}: Props) => {
  const [isMonthly] = useState<boolean>(false)
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

  const [freePlanBlock] = blocksCollection?.items.filter(
    (b) => b?.__typename === 'SectionBlock'
  ) as (SectionBlockFragment | undefined)[]

  return (
    <Box
      sx={{
        backgroundColor: 'gray2',
        marginTop: [-250, -250, -250, -250, -250, -350]
      }}
    >
      <SectionLayout
        anchorId={anchorLinkId}
        title={{ text: title }}
        subtitle={subtitle?.json}
        pushSx={{
          pt: '30px !important',
          px: '22px',
          maxWidth: '1200px'
        }}
        textToColor
        smallContainer
      >
        <Grid
          variant="three"
          sx={{
            gridTemplateColumns: ['1fr', '1fr 1fr', null, 'repeat(4, 1fr)'],
            mt: '-17px',
            '@media screen and (min-width: 1025px)': {
              display: 'none'
            }
          }}
        >
          {blocks.map((b, i) => (
            <PricingPlanCard
              key={b.name}
              {...b}
              isMonthly={isMonthly}
              descriptionHeight={descriptionHeight}
              setDescriptionHeight={setDescriptionHeight}
              index={i}
              pushSx={
                i === blocks.length - 1
                  ? {
                      background: '#1F1244',
                      color: 'white',
                      '&>div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) a:nth-of-type(1)': {
                        background: '#FFFFFF !important',
                        color: '#6742F1'
                      }
                    }
                  : {}
              }
            />
          ))}
        </Grid>

        <DesktopView
          blocks={blocks}
          isMonthly={isMonthly}
          descriptionHeight={descriptionHeight}
          setDescriptionHeight={setDescriptionHeight}
        />

        <Card
          sx={{
            display: ['block', null, 'flex'],
            justifyContent: 'space-between',
            alignItems: ['flex-start', null, 'center'],
            mb: '56px',
            py: '42px',
            mt: 4,
            border: 'none',
            boxShadow: 'card',
            '@media screen and (min-width: 830px)': {
              display: 'none'
            }
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
              data-event-label="CTA Click: Free Plan"
            />
          </div>
        </Card>

        <DesktopCard freePlanBlock={freePlanBlock} />
      </SectionLayout>
    </Box>
  )
}

const DesktopCard = ({ freePlanBlock }: any) => {
  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        mb: '0px',
        py: '42px',
        mt: '40px',
        border: 'none',
        boxShadow: 'card',
        '@media screen and (max-width: 830px)': {
          display: 'none'
        }
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          marginRight: '77px'
        }}
      >
        <Heading
          variant="heading.base"
          sx={{
            fontWeight: 600,
            fontSize: '28px',
            minWidth: 'fit-content'
          }}
        >
          {withHighlightedText(freePlanBlock?.title)}
        </Heading>
        <div
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            maxWidth: [null, 'fit-content']
          }}
        >
          <Link
            {...freePlanBlock?.actionsCollection?.items[0]}
            variant="buttons.primary"
            sx={{
              height: '35px',
              textAlign: 'center',
              whiteSpace: 'nowrap',
              position: 'relative',
              textTransform: 'uppercase',
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.55px'
            }}
            data-event-label="CTA Click: Free Plan"
          />
        </div>
      </div>

      <Text
        sx={{
          fontSize: '14px'
        }}
      >
        {resolveDescription(freePlanBlock?.subtitle)}
      </Text>
    </Card>
  )
}

type DesktopProps = {
  blocks: PricingPlanV2Fragment[]
  isMonthly: boolean
  descriptionHeight: any
  setDescriptionHeight: any
}

const DesktopView = ({
  blocks,
  isMonthly,
  descriptionHeight,
  setDescriptionHeight
}: DesktopProps) => {
  const lastBlock = blocks.pop()
  return (
    <Grid
      sx={{
        gridTemplateColumns: ['repeat(1fr, 2)', '3fr 1fr', null, '3fr 1fr'],
        gap: '0px',
        mt: '-17px',
        '@media screen and (max-width: 1024px)': {
          display: 'none'
        }
      }}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginRight: 12,
          boxShadow: 'card',
          borderRadius: '4px 4px 4px 4px ',

          background: 'white',
          height: '100%'
        }}
      >
        <div
          sx={{
            background: '#6742F1',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '4px 4px 0px 0px ',
            boxShadow: 'card'
          }}
        >
          <Heading
            variant="heading.base"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: 'white',
              textAlign: 'center',
              marginBottom: 0
            }}
          >
            Multi-tenant plans
          </Heading>
        </div>
        <div
          sx={{
            display: 'flex',
            height: '100%'
          }}
        >
          {blocks.map((b, i) => (
            <Fragment key={b.name}>
              <PricingPlanCard
                key={`${b?.name}_desktop`}
                {...b}
                isMonthly={isMonthly}
                descriptionHeight={descriptionHeight}
                setDescriptionHeight={setDescriptionHeight}
                index={i}
                pushSx={{
                  flex: '1',
                  maxWidth: '291px',
                  background: 'transparent'
                }}
              />
              {i !== blocks.length - 1 && (
                <div
                  key={`${b?.name}_line_desktop`}
                  sx={{ height: '100%', display: 'flex', py: '32px' }}
                >
                  <div
                    sx={{
                      width: '1px',
                      pt: '9px',
                      border: '1px solid #EEEEEE;'
                    }}
                  ></div>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: 12,
          boxShadow: 'card',
          height: '100%',
          borderRadius: '0px 0px 4px 4px',
          background: '#1F1244'
        }}
      >
        <div
          sx={{
            background: '#6742F1',
            height: '47px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '4px 4px 0px 0px'
          }}
        >
          <Heading
            variant="heading.base"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              color: 'white',
              textAlign: 'center',
              marginBottom: 0
            }}
          >
            Single-tenant
          </Heading>
        </div>

        <div
          style={{
            display: 'flex'
          }}
        >
          <PricingPlanCard
            key={`${lastBlock?.name}_desktop`}
            {...lastBlock}
            isMonthly={isMonthly}
            descriptionHeight={descriptionHeight}
            setDescriptionHeight={setDescriptionHeight}
            index={blocks.length}
            pushSx={{
              background: 'transparent',
              color: 'white',
              width: '280px',
              lineHeight: `${descriptionHeight}px`,
              '&>div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(2) a:nth-of-type(1)': {
                background: '#FFFFFF !important',
                color: '#6742F1'
              },
              '&>div:nth-of-type(3) > div:nth-of-type(1) > div:nth-of-type(1)': {
                marginBottom: -1
              }
            }}
          />
        </div>
      </div>
    </Grid>
  )
}

export default PricingPagePlansSection

/** @jsx jsx */
import SectionLayout from 'components/layouts/section'
import {
  PricingPlanFragment,
  PricingPlanV2Fragment,
  SectionFragment,
  UsageRateFragment
} from 'lib/contentful/generated'
import { formatPrice } from 'lib/util/index'
import { useCallback, useMemo, useState } from 'react'
import { Box, Flex, jsx, Select, Text } from 'theme-ui'
import MarkdownBody from '../../../compound/markdown-body'
import BackupGbItem from './backupGbItem'
import CalculatorItem from './item'

const buttonWidth = '72px'
const aMillion = 1000000

const calculatorItems: Pick<
  React.ComponentPropsWithoutRef<typeof CalculatorItem>,
  'label' | 'id' | 'calculate' | 'placeholder'
>[] = [
  {
    label: 'Monthly read operations',
    id: 'readOperationsMillion',
    placeholder: '',
    calculate: (v, ratePerMillion) => {
      const ratePerOperation = ratePerMillion / aMillion
      return v * ratePerOperation
    }
  },
  {
    label: 'Monthly write operations',
    id: 'writeOperationsMillion',
    placeholder: '',
    calculate: (v, ratePerMillion) => {
      const ratePerOperation = ratePerMillion / aMillion
      return v * ratePerOperation
    }
  },
  {
    label: 'Monthly compute operations',
    id: 'transactionalComputeOperationsMillion',
    placeholder: '',
    calculate: (v, ratePerMillion) => {
      const ratePerOperation = ratePerMillion / aMillion
      return v * ratePerOperation
    }
  },
  {
    label: 'Monthly data stored (GB)',
    id: 'storageGb',
    placeholder: '',
    calculate: (v, ratePerGB) => {
      return v * ratePerGB
    }
  }
]

export type Values = Record<
  keyof Omit<UsageRateFragment, '__typename' | 'label'>,
  number
>

type Props = SectionFragment & { totalLabel: string; isPricingPage?: boolean }

const PriceCalculatorSection = ({
  title,
  subtitle,
  blocksCollection,
  totalLabel,
  anchorLinkId,
  textBelowSection,
  isPricingPage
}: Props) => {
  const blocks = (blocksCollection?.items.filter(
    (b) => b?.__typename === 'PricingPlanV2' || b?.__typename === 'PricingPlan'
  ) ?? []) as (PricingPlanV2Fragment | PricingPlanFragment)[]

  const [selectedPlan, setSelectedPlan] = useState<string>(blocks[0].name ?? '')
  const [selectedRegionGroup, setSelectedRegionGroup] = useState<string>(() => {
    const firstBlock = blocks[0]
    if (firstBlock.__typename === 'PricingPlan') return ''
    else if (firstBlock.__typename === 'PricingPlanV2') {
      return firstBlock.usageRatesCollection?.items[0]?.label ?? ''
    }
    return ''
  })

  const [values, setValues] = useState<Values>({
    readOperationsMillion: 0,
    storageGb: 0,
    transactionalComputeOperationsMillion: 0,
    writeOperationsMillion: 0
  })

  const [backupGBvalue, setBackupGBvalue] = useState(0)

  const plan = blocks.find((p) => p.name === selectedPlan)
  const usageRate = useMemo(() => {
    if (plan?.__typename === 'PricingPlan') return plan.usageRate
    else if (plan?.__typename === 'PricingPlanV2') {
      return (
        plan?.usageRatesCollection?.items.find(
          (u) => u?.label === selectedRegionGroup
        ) ?? plan.usageRate
      )
    }
  }, [plan, selectedRegionGroup])
  const total = calculateTotal(values, backupGBvalue, plan?.creditsPerMonth)

  const handleSelectedPlanChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedPlan(e.target.value)
    },
    []
  )

  const handleSelectedRegionGroupChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedRegionGroup(e.target.value)
    },
    []
  )

  const sectionLayoutExtraProps = isPricingPage
    ? { backgroundColor: '#F9F9F9' }
    : {}

  const sectionLayoutExtraStyles = isPricingPage
    ? {
        '@media screen and (min-width: 1100px)': {
          backgroundColor: 'gray2',
          maxWidth: '1200px',
          display: 'flex',
          px: 0,
          margin: 'auto',
          alignItems: 'center',
          '&>div:nth-of-type(1)': {
            width: 473,
            marginRight: 'auto',
            '&>h2:nth-of-type(1)': {
              textAlign: 'start'
            },
            '&>div:nth-of-type(1)': {
              textAlign: 'start'
            }
          },
          '&>div:nth-of-type(2)': {
            display: 'none'
          },
          '&>div:nth-of-type(3)': {
            margin: '0px'
          }
        }
      }
    : { backgroundColor: 'gray2' }

  return (
    <SectionLayout
      anchorId={anchorLinkId}
      title={{ text: title }}
      subtitle={subtitle?.json}
      largeWidth
      {...sectionLayoutExtraProps}
      pushSx={sectionLayoutExtraStyles}
    >
      <div sx={{ mx: 'auto', maxWidth: isPricingPage ? '605px' : 'unset' }}>
        <Box
          sx={{
            maxWidth: '605px',
            minHeight: '436px',
            mx: 'auto',
            backgroundColor: 'background',
            p: '23px',
            boxShadow: 'card',
            borderRadius: '8px'
          }}
        >
          <Flex sx={{ flexDirection: ['column', 'row'] }}>
            <Flex
              sx={{
                justifyContent: ['space-between', 'flex-start'],
                flexDirection: ['row', 'column']
              }}
            >
              <label
                htmlFor="selector"
                sx={{
                  pr: [2, 3],
                  color: 'gray8',
                  fontSize: '14px',
                  fontWeight: '600'
                }}
              >
                Select plan
              </label>
              <div>
                <Select
                  id="selector"
                  onChange={handleSelectedPlanChange}
                  value={selectedPlan}
                  sx={{
                    fontSize: '14px',
                    width: '170px',
                    height: '36px',
                    border: '1px solid #797E80',
                    borderRadius: '4px',
                    py: 0,
                    pl: 1
                  }}
                >
                  {blocks.map((plan) => (
                    <option key={plan.name} value={plan.name as string}>
                      {plan.name}
                    </option>
                  ))}
                </Select>
              </div>
            </Flex>
            {plan?.__typename === 'PricingPlanV2' && plan.usageRatesCollection && (
              <Flex
                sx={{
                  justifyContent: ['space-between', 'flex-start'],
                  flexDirection: ['row', 'column'],
                  ml: [0, 3],
                  mt: [2, 0]
                }}
              >
                <label
                  htmlFor="region-group"
                  sx={{
                    pr: [2, 3],
                    color: 'gray8',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  Select region group
                </label>
                <div>
                  <Select
                    id="region-group"
                    onChange={handleSelectedRegionGroupChange}
                    value={selectedRegionGroup}
                    sx={{
                      fontSize: '14px',
                      width: '170px',
                      height: '36px',
                      border: '1px solid #797E80',
                      borderRadius: '4px',
                      py: 0,
                      pl: 1
                    }}
                  >
                    {plan?.usageRatesCollection?.items.map((usageRate, i) => (
                      <option key={i} value={usageRate?.label as string}>
                        {usageRate?.label}
                      </option>
                    ))}
                  </Select>
                </div>
              </Flex>
            )}
          </Flex>
          <div
            sx={{
              '> div:not(:last-of-type)': { mb: '15px' },
              mt: '15px',
              mb: '15px'
            }}
          >
            {calculatorItems.map((item) => (
              <CalculatorItem
                key={item.id}
                {...item}
                value={values[item.id]}
                setValues={setValues}
                usageRate={usageRate}
                placeholder="0"
              />
            ))}
            <BackupGbItem
              setBackupGbValue={setBackupGBvalue}
              backupGbValue={backupGBvalue}
            />
          </div>
          <Flex
            sx={{
              justifyContent: 'right',
              alignItems: 'center',
              flexDirection: ['column-reverse', 'row']
            }}
          >
            <Text variant="small" sx={{ mr: [0, 4], color: 'gray8' }}>
              {totalLabel}
            </Text>
            <div
              sx={{
                color: 'gray10',
                fontSize: '18px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '36px',
                borderRadius: 'md',
                mr: [0, 10]
              }}
            >
              <span
                sx={{
                  maxWidth: '200px',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap'
                }}
              >
                {formatPrice(total)}
              </span>
            </div>
          </Flex>
        </Box>
        <Text
          variant="small"
          sx={{
            lineHeight: 'heading',
            mt: 2,
            maxWidth: '605px',
            mx: 'auto'
          }}
        >
          {textBelowSection && <MarkdownBody source={textBelowSection} />}
        </Text>
      </div>
    </SectionLayout>
  )
}

function calculateTotal(
  values: Values,
  backupGBvalue: number,
  creditsPerMonth: number | null | undefined
) {
  const subtotal =
    Object.values(values).reduce((t, v) => t + v, 0) + backupGBvalue
  if (!creditsPerMonth) return subtotal
  return subtotal < creditsPerMonth ? creditsPerMonth : subtotal
}

export default PriceCalculatorSection
export { buttonWidth }

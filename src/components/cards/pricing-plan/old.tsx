/** @jsx jsx */
import Link from 'components/primitives/link'
import { PricingPlanFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import { Card, Flex, Heading, Text } from 'theme-ui'

type Props = PricingPlanFragment

const PricingPlanCardOld = ({
  name,
  description,
  listItemsCollection,
  action,
  isFeatured,
  priceLabel
}: Props) => {
  // const { onCTAClick } = useExperiment()
  return (
    <Card
      sx={{
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
          display: isFeatured ? 'block' : 'none'
        }}
      />
      <div
        sx={{
          position: 'absolute',
          top: 1,
          left: 1,
          bottom: 1,
          right: 1,
          borderRadius: 'md',
          variant: 'gradients.muted',
          display: isFeatured ? 'block' : 'none'
        }}
      />
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: 'general',
          position: 'relative',
          height: '100%',
          textAlign: 'center'
        }}
      >
        <div>
          <Heading variant="heading.base" sx={{ fontWeight: 600, mb: 3 }}>
            {name}
          </Heading>
          <Text variant="small">{defaultRenderer(description?.json)}</Text>
          <Heading variant="heading.base" sx={{ fontSize: '24px', my: 4 }}>
            {withHighlightedText(priceLabel)}
          </Heading>
          {action && (
            <div>
              <Link
                {...action}
                variant={isFeatured ? 'buttons.primary' : 'buttons.outline'}
                sx={{ width: '100%' }}
                // onClick={onCTAClick}
                data-event-label={`CTA Click: ${name} Plan`}
              />
            </div>
          )}
          <div sx={{ textAlign: 'left', mt: 4 }}>
            {listItemsCollection?.items.map((item) => (
              <div key={item?.title} sx={{ mb: 3 }}>
                <Text sx={{ fontSize: 1, fontWeight: 700, mb: 1 }}>
                  {item?.title}
                </Text>
                <ul>
                  {item?.items?.map((listItem) => (
                    <li
                      key={listItem}
                      sx={{
                        pl: '16px',
                        variant: 'text.small',
                        lineHeight: 'loose',
                        ':not(:last-of-type)': { mb: '4px' },
                        '&::before': {
                          content: '"\u2022"',
                          color: 'primary',
                          fontWeight: 'bold',
                          display: 'inline-block',
                          width: '16px',
                          ml: '-16px',
                          fontSize: '18px',
                          lineHeight: 0
                        }
                      }}
                    >
                      {withHighlightedText(listItem)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Flex>
    </Card>
  )
}

export default PricingPlanCardOld

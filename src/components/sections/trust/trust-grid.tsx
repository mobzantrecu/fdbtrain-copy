/** @jsx jsx */
import { jsx, Card, Text } from 'theme-ui'
import SectionLayout from 'components/layouts/section'
import { SectionFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import Link from 'components/primitives/link'
import Image from 'next/image'

const TrustGrid = ({ blocksCollection, title, subtitle }: SectionFragment) => (
  <SectionLayout
    headingContainerPushSx={{ maxWidth: ['100%', '100%', 'fit-content'] }}
    title={{ text: title }}
    subtitle={subtitle?.json}
    smallContainer
    smallHeading
  >
    <div
      sx={{
        mx: 'auto',
        display: 'grid',
        gap: '30px',
        gridTemplateColumns: ['1fr', null, null, 'repeat(3, 1fr)']
      }}
    >
      {blocksCollection?.items.map(
        (card, idx) =>
          card?.__typename === 'SectionBlock' && (
            <Card
              key={idx}
              sx={{
                padding: ['45px 28px 58px', '58px 32px 74px'],
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <Image
                  alt={card.media?.title ?? ''}
                  src={card.media?.url ?? ''}
                  width={55}
                  height={55}
                  objectFit="cover"
                  sx={{ borderRadius: '50%' }}
                />
                <Text
                  sx={{
                    fontSize: '18px',
                    lineHeight: '3',
                    mt: '8px',
                    fontWeight: '500'
                  }}
                >
                  {card.title}
                </Text>
                <Text sx={{ fontSize: '14px', lineHeight: '1.78' }}>
                  {defaultRenderer(card.subtitle?.json)}
                </Text>
              </div>
              <Link
                key={card.actionsCollection?.items[0]?.href}
                href={card.actionsCollection?.items[0]?.href}
                sx={{ mt: ['22px', '32px'] }}
                variant="accent"
                arrow={card.actionsCollection?.items[0]?.icon ? true : false}
              >
                {card.actionsCollection?.items[0]?.children}
              </Link>
            </Card>
          )
      )}
    </div>
  </SectionLayout>
)

export default TrustGrid

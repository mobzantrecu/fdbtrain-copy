import { Box, Card, Flex, Text } from '@theme-ui/components'
import SectionLayout from 'components/layouts/section'
import { SectionFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import Image from 'next/image'

const TrustCompliance = ({
  blocksCollection,
  title,
  subtitle,
  logosCollection
}: SectionFragment) => {
  const block =
    blocksCollection?.items[0]?.__typename === 'SectionBlock'
      ? blocksCollection.items[0]
      : undefined
  return (
    <SectionLayout
      headingContainerPushSx={{ maxWidth: ['100%', '100%', 'fit-content'] }}
      title={{ text: title }}
      subtitle={subtitle?.json}
      smallContainer
      smallHeading
    >
      <Card
        sx={{
          padding: ['45px 28px 60px', '64px 35px 70px'],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <Image
            alt={block?.media?.title ?? ''}
            src={block?.media?.url ?? ''}
            width={55}
            height={55}
            objectFit="cover"
            sx={{ borderRadius: '50%' }}
          />
        </div>
        <Text
          sx={{
            fontSize: '18px',
            lineHeight: '3',
            mt: '8px',
            fontWeight: '500'
          }}
        >
          {block?.title}
        </Text>
        <Text sx={{ fontSize: '14px', lineHeight: '1.78' }}>
          {defaultRenderer(block?.subtitle?.json)}
        </Text>
        <Flex
          sx={{ justifyContent: 'center', alignItems: 'center', mt: '30px' }}
        >
          {logosCollection?.logosCollection?.items.map((logo, idx) => (
            <Box key={idx} sx={{ mr: '32px', ':last-of-type': { mr: '0px' } }}>
              <Image
                width={80}
                height={80}
                objectFit="contain"
                src={logo?.image?.url ?? ''}
                alt={logo?.image?.title ?? ''}
              />
            </Box>
          ))}
        </Flex>
      </Card>
    </SectionLayout>
  )
}

export default TrustCompliance

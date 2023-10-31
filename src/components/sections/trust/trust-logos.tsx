import { Card, Flex, Box } from '@theme-ui/components'
import SectionLayout from 'components/layouts/section'
import { SectionFragment } from 'lib/contentful/generated'
import Image from 'next/image'

const TrustLogos = ({ title, subtitle, logosCollection }: SectionFragment) => {
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
          padding: ['20px 28px', '25px 32px 15px'],
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <Flex
          sx={
            {
              justifyContent: 'center',
              flexWrap: 'wrap'
            } as any
          }
        >
          {logosCollection?.logosCollection?.items.map((logo, idx) => (
            <Box key={idx} sx={{ my: '25px' }}>
              <Image
                src={logo?.image?.url ?? ''}
                alt={logo?.image?.title ?? ''}
                width={120}
                height={60}
                objectFit="contain"
              />
            </Box>
          ))}
        </Flex>
      </Card>
    </SectionLayout>
  )
}

export default TrustLogos

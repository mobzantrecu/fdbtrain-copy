import SectionLayout from 'components/layouts/section'
import CardCover from 'components/primitives/card-cover'
import Link from 'components/primitives/link'
import { SectionFragment } from 'lib/contentful/generated'
import { resolveDescription } from 'lib/contentful/renderers'
import { Box, Card, Grid, Heading, Text } from 'theme-ui'

const FeaturedResourcesSection = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId
}: SectionFragment) => {
  return (
    <Box sx={{ backgroundColor: 'mediaCards' }}>
      <SectionLayout
        anchorId={anchorLinkId}
        title={{ text: title }}
        subtitle={subtitle?.json}
        headingContainerPushSx={{
          pt: 3
        }}
        pushSx={{
          maxWidth: ['568px', '1024px', '1024px', '1024px', '1250px']
        }}
      >
        <Grid
          sx={{
            gridTemplateColumns: ['1fr', null, '1fr', '2fr 1fr'],
            columnGap: '25px',
            rowGap: '22px'
          }}
          pb={'70px'}
        >
          {blocksCollection?.items.map((item, index) => {
            if (item?.__typename === 'SectionBlock') {
              const resolvedDescription = resolveDescription(item.subtitle)
              return (
                <Box
                  key={item.title}
                  sx={
                    index === 0
                      ? {
                          gridArea: ['', '', '', '1 / 1 / 3 / 2'],
                          alignSelf: 'center'
                        }
                      : index === 1
                      ? { gridArea: ['', '', '', '1 / 2 / 2 / 3'] }
                      : { gridArea: ['', '', '', '2 / 2 / 3 / 3'] }
                  }
                >
                  <Card
                    variant="primary"
                    sx={{
                      display: 'flex',
                      height:
                        index === 0
                          ? ['', '', '', '380px']
                          : ['', '', '', '179px'],
                      width:
                        index === 0
                          ? ['100%', null, null, '620px', '770px']
                          : ['100%', null, null, '330px', '375px'],
                      p: 0,
                      boxShadow: 'card'
                    }}
                  >
                    <Box sx={{ display: 'flex' }}>
                      <Box sx={{ display: ['none', null, null, 'block'] }}>
                        {index === 0 && (
                          <CardCover image={item.media} ratio={1} />
                        )}
                      </Box>
                      <Box sx={{ p: 30 }}>
                        <Text
                          sx={{
                            textAlign: 'left',
                            mb: '12px',
                            fontWeight: '700',
                            color: 'darkBackgroundAnchor'
                          }}
                        >
                          {item.additionalTitle}
                        </Text>
                        <Heading
                          as="h1"
                          variant="heading.base"
                          sx={{
                            fontSize: '18px',
                            fontWeight: '600',
                            lineHeight: '18px',
                            mb: 3
                          }}
                        >
                          {item.title}
                        </Heading>
                        {item.subtitle && index === 0 && (
                          <Text
                            sx={{
                              m: '8px 0 16px 0',
                              lineHeight: '20px',
                              display: ['none', '', 'block', 'block', 'block']
                            }}
                            variant="small"
                          >
                            {resolvedDescription}
                          </Text>
                        )}
                        {item.actionsCollection?.items.map((item, index) => {
                          return (
                            <Link
                              {...item}
                              key={`${item?.href}-${index}`}
                              variant="darkAccent"
                              arrow
                              sx={{ mb: '10px', fontWeight: '400' }}
                            />
                          )
                        })}
                      </Box>
                    </Box>
                  </Card>
                </Box>
              )
            }
          })}
        </Grid>
      </SectionLayout>
    </Box>
  )
}

export default FeaturedResourcesSection

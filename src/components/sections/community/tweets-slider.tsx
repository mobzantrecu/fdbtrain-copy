import SectionLayout from 'components/layouts/section'
import { SectionFragment, TweetFragment } from 'lib/contentful/generated'
import TweetCard from 'components/cards/tweet'
import { Box, Flex, Grid, Heading, Text } from 'theme-ui'
import SocialIcons from 'components/compound/social-icons'

const TweetsSliderSection = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId,
  backgroundImage
}: SectionFragment) => {
  const blocks = (blocksCollection?.items.filter(
    (b) => b?.__typename === 'Tweet'
  ) ?? []) as TweetFragment[]

  const sliders = [blocks.slice(0, 4), blocks.slice(blocks.length / 2)]

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage?.url})`,
        backgroundSize: 'cover',
        backgroundColor: 'gray2',
        pt: ['300px', '300px', '200px', '40px'],
        pb: ['70px', '70px', '70px', '10vw'],
        '@media screen and (min-width: 1720px)': {
          py: '8vw'
        }
      }}
    >
      <SectionLayout
        anchorId={anchorLinkId}
        title={{ text: title }}
        subtitle={subtitle?.json}
        pushSx={{ pb: [0, 0] }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: ['column', 'column', 'column', 'row']
          }}
        >
          <Box
            sx={{
              width: [null, null, null, '50%'],
              ml: [null, null, null, 6],
              textAlign: ['center', 'center', 'center', 'left']
            }}
          >
            <Heading
              sx={{
                width: [null, null, null, '90%', '80%', '80%', '60%'],
                fontWeight: 600,
                fontSize: '48px',
                lineHeight: '48px',
                mb: 3
              }}
            >
              Hear from our community.
            </Heading>
            <Text
              sx={{
                width: [null, null, null, '80%'],
                fontSize: '22px',
                lineHeight: '26px',
                mb: 3
              }}
            >
              We love connecting with our users and working together to help
              everyone improve. Stop by, say hello, and share what you’re
              working on!
            </Text>
            <Box
              sx={{
                mt: [2, 2, 2, '40px'],
                mb: [4, 4, 4, '']
              }}
            >
              <SocialIcons
                twitter={'fauna'}
                youtubeChannel={'UCTkGE215CjAkcRO5mDMmLkw'}
                discord={'NHwJFdG2B2'}
                write={'write-with-fauna'}
                color
                width="30px"
                sx={{
                  maxWidth: 'none'
                }}
              />
            </Box>
          </Box>
          <Box sx={{ overflow: 'hidden', mr: [null, null, null, '-32px'] }}>
            <Grid variant="two" sx={{ gridTemplateRows: '1fr 1fr 1fr' }}>
              {sliders[0] && (
                <>
                  <Flex
                    sx={{
                      justifyContent: 'center',
                      gridColumn: [null, null, null, '1/3']
                    }}
                  >
                    <TweetCard
                      {...sliders[0][0]}
                      key={`${sliders[0][0].text}-${0}`}
                      pushSx={{ mr: [null, null, null, 6] }}
                    />
                  </Flex>
                  <TweetCard
                    {...sliders[0][1]}
                    key={`${sliders[0][1].text}-${1}`}
                  />
                  <TweetCard
                    {...sliders[0][2]}
                    key={`${sliders[0][2].text}-${2}`}
                  />
                  <Flex
                    sx={{
                      justifyContent: 'center',
                      gridColumn: [null, null, null, '1/3']
                    }}
                  >
                    <TweetCard
                      {...sliders[0][3]}
                      key={`${sliders[0][3].text}-${3}`}
                      pushSx={{ ml: [null, null, null, 6] }}
                    />
                  </Flex>
                </>
              )}
            </Grid>
          </Box>
        </Box>
      </SectionLayout>
    </Box>
  )
}

export default TweetsSliderSection

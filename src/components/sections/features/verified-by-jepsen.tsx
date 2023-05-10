/** @jsx jsx */
import { Box, Grid, jsx, Text } from 'theme-ui'
import SectionLayout from 'components/layouts/section'
import { SectionFragment } from 'lib/contentful/generated'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import SideBySideLinks from 'components/compound/side-by-side-links'

const VerifiedByJepsenSection = ({
  title,
  subtitle,
  image,
  blocksCollection,
  actionsCollection,
  anchorLinkId,
  backgroundImage
}: SectionFragment) => {
  const quote = blocksCollection?.items[0]

  const Quotes = () => (
    <svg
      width="41"
      height="33"
      viewBox="0 0 41 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      sx={{ my: '24px' }}
    >
      <path
        d="M13.8745 1.54812C12.7334 0.632059 11.1102 0.570682 9.99422 1.51719C4.19617 6.43457 0 13.8719 0 21.9027C0 29.0575 4.27698 33 9.14389 33C13.5683 33 16.9604 29.4956 16.9604 25.2611C16.9604 20.8805 14.0108 17.8142 9.8813 17.8142C8.84956 17.8142 8.04657 17.0672 8.3272 16.0743C9.17609 13.0711 11.2931 9.82397 13.9022 7.23466C15.4847 5.6643 15.613 2.94372 13.8745 1.54812ZM37.4717 1.54812C36.3305 0.632059 34.7074 0.570682 33.5913 1.51719C27.7933 6.43457 23.5971 13.8719 23.5971 21.9027C23.5971 29.0575 27.8741 33 32.741 33C37.1655 33 40.705 29.4956 40.705 25.2611C40.705 20.8805 37.6079 17.8142 33.4784 17.8142C32.4574 17.8142 31.6742 17.0608 31.9657 16.0823C32.8596 13.0813 34.932 9.83599 37.5095 7.24633C39.0822 5.66623 39.2102 2.94372 37.4717 1.54812Z"
        fill="#363A3D"
      />
    </svg>
  )
  return (
    <Box sx={{ backgroundColor: 'gray2' }}>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage?.url})`,
          maskImage: `url(${backgroundImage?.url})`,
          maskSize: 'cover',
          backgroundSize: 'cover',
          backgroundColor: 'gray2',
          maskRepeat: ' no-repeat',
          pt: ['230px', '230px', '205px'],
          pb: ['', '50px', '100px'],
          overflow: 'hidden'
        }}
      >
        <SectionLayout
          anchorId={anchorLinkId}
          title={{ text: title }}
          subtitle={subtitle?.json}
          headingContainerPushSx={{
            letterSpacing: '-0.07px'
          }}
          pushSx={{
            maxWidth: 1600,
            'div>p': {
              fontSize: [14, 22]
            }
          }}
          isVerifiedByJepsen
          largeWidth
        >
          <Grid
            columns={['1fr', null, '9fr 12fr']}
            gap={[4, 4, null, '50px']}
            sx={{ mx: [2, 5, 2, 5], mt: '28px' }}
          >
            <div
              sx={{
                position: 'relative',
                gridRow: [2, null, 'unset'],
                height: ['250px', null, 'auto']
              }}
            >
              <img
                sx={{
                  position: 'absolute',
                  width: '100%',
                  borderRadius: '6px',
                  boxShadow: '0px 4px 20px rgba(15, 29, 47, 0.07)',
                  border: '1px solid',
                  borderColor: 'border',
                  mt: ['20px', '']
                }}
                src={image?.url ?? ''}
                alt={image?.title ?? ''}
              />
            </div>
            {quote?.__typename === 'Quote2' && (
              <div>
                <img
                  src={quote.person?.avatar?.url ?? ''}
                  alt={quote.person?.avatar?.title ?? ''}
                  sx={{
                    width: ['48px', '88px'],
                    height: ['48px', '88px'],
                    objectFit: 'cover'
                  }}
                />
                <Quotes />
                <Text
                  sx={{
                    my: 3,
                    maxWidth: '760px',
                    fontSize: '22px',
                    lineHeight: '34px'
                  }}
                >
                  {withHighlightedText(quote.quote)}
                </Text>
                <Text variant="small" sx={{ fontWeight: 600, mb: 3 }}>
                  – {quote.person?.name}
                </Text>
                <SideBySideLinks
                  actions={actionsCollection?.items}
                  linkProps={{ variant: 'accent', arrow: true }}
                />
              </div>
            )}
          </Grid>
        </SectionLayout>
      </Box>
    </Box>
  )
}

export default VerifiedByJepsenSection

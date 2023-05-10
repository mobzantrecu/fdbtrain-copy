import SectionLayout from 'components/layouts/section'
import Logo from 'components/primitives/logo'
import { SectionFragment } from 'lib/contentful/generated'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import { Box, Heading } from 'theme-ui'

const LogosCardSection = ({
  title,
  logosCollection,
  anchorLinkId
}: SectionFragment) => {
  return (
    <SectionLayout
      anchorId={anchorLinkId}
      pushSx={{
        backgroundColor: 'logosCard',
        pb: ['64px', null, '100px']
      }}
    >
      <Heading
        as="h1"
        sx={{
          fontSize: '48px',
          fontWeight: 600,
          color: 'gray1',
          position: 'relative',
          maxWidth: '748px',
          mx: 'auto',
          textAlign: 'center',
          mt: 55
        }}
      >
        {withHighlightedText(title)}
      </Heading>
      <Box
        variant="layout.sectionContent"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}
      >
        {logosCollection?.logosCollection?.items.map((logo) => (
          <Box
            key={logo?.name}
            sx={{
              width: '250px',
              maxHeight: '82px',
              backgroundColor: 'background',
              boxShadow: 'cardNew',
              borderRadius: '8px',
              mx: '11px',
              mt: [3, 3, 3, 3, '0'],
              p: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: '82px'
            }}
          >
            <Logo
              key={logo?.name}
              {...logo}
              pushSx={{ width: '100%', height: '100%' }}
            />
          </Box>
        ))}
      </Box>
    </SectionLayout>
  )
}

export default LogosCardSection

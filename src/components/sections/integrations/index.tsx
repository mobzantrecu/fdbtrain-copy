/** @jsx jsx */
import { jsx, Text, Box } from 'theme-ui'
import Link from 'components/primitives/link'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import { SectionFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'

const IntegrationsCard = ({
  title,
  image,
  subtitle,
  actionsCollection,
  additionalTitle
}: SectionFragment) => (
  <Box
    sx={{
      backgroundColor: 'gray2',
      py: ['64px', null, '100px'],
      px: ['32px', '100px', '100px', '192px', '192px'],
      display: 'flex',
      justifyContent: 'center'
    }}
  >
    <Box
      sx={{
        position: 'relative',
        maxWidth: '1172px',
        display: 'flex',
        flexDirection: ['column', 'column', 'column', 'column', 'row', 'row'],
        gap: ['50px', '50px', '50px', '50px', '20px', '20px'],
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: ['center', 'left'],
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <Box
        sx={{
          backgroundColor: 'transparent',
          maxWidth: [null, null, null, null, '473px', '473px'],
          minHeight: [null, null, null, null, '306px', '306px']
        }}
      >
        <Text
          sx={{
            fontWeight: '700',
            color: 'darkBackgroundAnchor'
          }}
        >
          {additionalTitle}
        </Text>
        <Text sx={{ color: 'gray10', fontSize: 28, fontWeight: 600, mb: 20 }}>
          {withHighlightedText(title)}
        </Text>

        <Text sx={{ color: 'gray10', mb: 20 }}>
          {defaultRenderer(subtitle?.json)}
        </Text>
        {actionsCollection?.items.map((action) => (
          <Link
            {...action}
            key={action?.href}
            sx={{
              height: '35px',
              fontWeight: 600,
              textTransform: 'uppercase',
              fontSize: ['11px', '12px'],
              letterSpacing: '0.5px',
              mr: [0, '12px'],
              variant: 'gradients.button'
            }}
            variant="buttons.primary"
          />
        ))}
      </Box>
      {image?.url && (
        <Box
          sx={{
            width: ['100%', '100%', '576px', '576px', '576px', '576px'],
            height: '220px',
            display: 'flex',
            justifyContent: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundImage: image ? `url(${image.url})` : null,
            backgroundPosition: 'center',
            backgroundSize: [
              'cover',
              'cover',
              'cover',
              'cover',
              'cover',
              'cover'
            ]
          }}
        ></Box>
      )}
    </Box>
  </Box>
)

export default IntegrationsCard

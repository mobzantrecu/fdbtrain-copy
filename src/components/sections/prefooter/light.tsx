import Link from 'components/primitives/link'
import { SectionFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import { Box, Container, Grid, Heading, SxStyleProp, Text } from 'theme-ui'

const sx: SxStyleProp = {
  textTransform: 'uppercase',
  height: '35px',
  fontSize: '12px',
  letterSpacing: '0.5px',
  mr: [0, '12px']
}

const PrefooterLight = ({
  title,
  subtitle,
  actionsCollection
}: SectionFragment) => (
  <Box
    sx={
      {
        zIndex: 'general2',
        position: 'relative',
        background:
          'linear-gradient(147deg,#320d86 24%, #4c299c 54%,#937fe5 100%)',
        height: '387px'
        // mt: '100px'
      } as any
    }
  >
    <Container
      sx={{
        background: 'transparent',
        borderRadius: 'xl',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        p: ['32px', '56px', '90px'],
        maxWidth: '100%',
        color: 'background',
        textAlign: 'center'
      }}
    >
      <Heading
        as="h1"
        sx={{ fontSize: [7, 8, 9], letterSpacing: '.15px', fontWeight: 600 }}
      >
        {withHighlightedText(title)}
      </Heading>
      <Text
        sx={{
          maxWidth: '773px',
          mx: 'auto',
          lineHeight: '26px',
          mt: 2,
          mb: '24px',
          fontSize: [1, 2, '22px']
        }}
      >
        {defaultRenderer(subtitle?.json)}
      </Text>
      <Grid sx={{ display: ['grid', 'block'] }}>
        {actionsCollection?.items.map((action, i) => {
          if (!action) return null
          const isFirst = i === 0
          return (
            <Link
              key={`${action?.href}-${i}`}
              variant={isFirst ? 'buttons.secondary' : 'buttons.primary'}
              sx={
                isFirst
                  ? sx
                  : {
                      ...sx,
                      fontWeight: 400,
                      variant: 'gradients.button'
                    }
              }
              {...action}
            />
          )
        })}
      </Grid>
    </Container>
  </Box>
)

export default PrefooterLight

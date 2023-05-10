import Link from 'components/primitives/link'
import { SectionFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import {
  Box,
  Card,
  Container,
  Grid,
  Heading,
  SxStyleProp,
  Text
} from 'theme-ui'

const sx: SxStyleProp = {
  textTransform: 'uppercase',
  height: '35px',
  fontSize: '12px',
  letterSpacing: '0.5px',
  mr: [0, '12px']
}

const PrefooterWithLinks = ({
  additionalTitle,
  title,
  subtitle,
  actionsCollection,
  blocksCollection
}: SectionFragment) => (
  <Box
    sx={{
      zIndex: 'general2',
      position: 'relative',
      background: 'linear-gradient(147deg,#300391 45%,#886AFD 100%)',
      height: '387px'
    }}
  >
    <Container
      sx={{
        background: 'transparent',
        borderRadius: 'xl',
        display: 'flex',
        height: '100%',
        gap: '20px',
        flexDirection: ['column', 'row', 'row', 'row', 'row', 'row'],
        justifyContent: ['center', null, null, null, 'space-between'],
        padding: [
          '56px',
          null,
          null,
          '80px 30px 80px 30px',
          '80px 160px 80px 160px'
        ],
        color: 'background',
        textAlign: 'center',
        alignItems: 'center'
      }}
    >
      <Box sx={{ textAlign: ['center', 'left', 'left', 'left', 'left'] }}>
        <Heading
          as="h1"
          sx={{
            fontSize: [7, 8, 9],
            letterSpacing: '.15px',
            fontWeight: 600,
            mb: [0, null, null, null, 20]
          }}
        >
          {withHighlightedText(title)}
        </Heading>
        <Text
          sx={{
            maxWidth: '660px',
            lineHeight: '26px',
            mr: 'auto',
            mb: 20,
            fontSize: [1, 2, '22px'],
            mt: [2, null, null, null, 0]
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
      </Box>
      <Card
        sx={{
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          width: ['375px', '300px', '375px', '375px', '375px'],
          alignItems: 'center',
          height: '230px',
          borderRadius: '4px',
          display: ['none', 'block', 'block', 'block', 'block']
        }}
      >
        <Text
          sx={{
            textAlign: 'left',
            mb: '12px',
            fontWeight: '700',
            color: '#896BFF'
          }}
        >
          {additionalTitle}
        </Text>
        <Box
          sx={{
            display: 'flex',
            flexDirection: ['column', null, null, null, 'column'],
            width: '100%',
            justifyContent: ['space-between', null, null, null, 'unset'],
            gap: ['0px', null, null, null, '0px'],
            alignItems: 'flex-start'
          }}
        >
          {blocksCollection?.items.map((action, i) => {
            if (!action) return null
            if (action?.__typename === 'CallToAction') {
              return (
                <Link
                  key={`${action?.href}-${i}`}
                  variant="accentLightPreFooter"
                  arrowColor="#896BFF"
                  arrow
                  sx={{ mb: '10px', fontWeight: '400' }}
                  {...action}
                />
              )
            }
          })}
        </Box>
      </Card>
    </Container>
  </Box>
)

export default PrefooterWithLinks

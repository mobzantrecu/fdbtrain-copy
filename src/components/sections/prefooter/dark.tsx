import Link from 'components/primitives/link'
import { SectionFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import { Box, Container, Grid, Heading, Text } from 'theme-ui'

const PrefooterDark = ({
  title,
  subtitle,
  image,
  actionsCollection
}: SectionFragment) => (
  <Box sx={{ px: 4, zIndex: 'general2', position: 'relative' } as any}>
    <Container
      sx={{
        backgroundImage: `url(${image?.url})`,
        backgroundSize: 'cover',
        borderRadius: 'xl',
        p: ['32px', '56px', '90px'],
        maxWidth: 900,
        color: 'background',
        boxShadow:
          '0px 100px 80px rgba(0, 0, 0, 0.07), 0px 42px 33px rgba(0, 0, 0, 0.05), 0px 22px 17px rgba(0, 0, 0, 0.04), 0px 12px 10px rgba(0, 0, 0, 0.03), 0px 6px 5px rgba(0, 0, 0, 0.02), 0px 3px 3px rgba(0, 0, 0, 0.01)',
        my: ['64px', null, '80px'],
        textAlign: ['center', null, 'left']
      }}
    >
      <Heading as="h1" sx={{ fontSize: [7, 8, 9] }}>
        {withHighlightedText(title)}
      </Heading>
      <Text
        sx={{
          maxWidth: 'xl',
          lineHeight: 'large',
          mb: '24px',
          mt: 4
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
              variant={isFirst ? 'buttons.primary' : 'buttons.outline'}
              sx={
                isFirst
                  ? {
                      mr: [0, '12px'],
                      background:
                        'linear-gradient(94.18deg, #7D0CFF 1.7%, #9924FE 100%);'
                    }
                  : {
                      backgroundColor: 'transparent',
                      color: 'background',
                      border: '1px solid',
                      borderColor: 'primaryLight'
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

export default PrefooterDark

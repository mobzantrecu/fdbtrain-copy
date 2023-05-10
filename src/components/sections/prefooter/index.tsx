import Link from 'components/primitives/link'
import { SectionFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import { Box, Container, Heading, Text } from 'theme-ui'

const Prefooter = ({
  title,
  subtitle,
  image,
  actionsCollection
}: SectionFragment) => (
  <Box sx={{ px: [3, 4], zIndex: 'general2', position: 'relative' }}>
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
          mt: 2,
          mb: '24px'
        }}
      >
        {defaultRenderer(subtitle?.json)}
      </Text>
      {actionsCollection?.items.map((action, i) => {
        if (!action) return null
        const isFirst = i === 0
        return (
          <Link
            key={`${action?.href}-${i}`}
            variant={isFirst ? 'buttons.primary' : 'buttons.secondary'}
            sx={
              isFirst
                ? { mr: '12px', variant: 'gradients.button' }
                : { color: 'background' }
            }
            {...action}
          />
        )
      })}
    </Container>
  </Box>
)

export default Prefooter

/** @jsx jsx */
import { jsx, Box, Card, Heading, Text, Flex } from 'theme-ui'
import { CustomerFragment } from 'lib/contentful/generated'
import Logo from 'components/primitives/logo'
import defaultRenderer from 'lib/contentful/renderers'
import Link from 'components/primitives/link'
import AspectRatio from 'components/primitives/aspect-ratio'

const CustomerCard = ({
  name,
  description,
  actionsCollection,
  logo
}: CustomerFragment) => {
  return (
    <Card
      sx={{
        p: 0,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'cardInteractive',
        position: 'relative',
        ':hover': {
          boxShadow: 'cardHover'
        }
      }}
    >
      {logo && (
        <Box
          sx={{
            p: '16.5px',
            bg: 'background',
            borderBottom: '1px solid',
            borderColor: 'border'
          }}
        >
          <AspectRatio ratio={368 / 131}>
            <Logo
              {...logo}
              pushSx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            />
          </AspectRatio>
        </Box>
      )}
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
        {name || description ? (
          <Box sx={{ p: 24, pb: 0 }}>
            {name && (
              <Heading
                as="h1"
                variant="heading.base"
                sx={{ fontWeight: 600, fontSize: '18px' }}
              >
                {name}
              </Heading>
            )}
            {description && (
              <Text variant="small" sx={{ mt: '12px', lineHeight: '20px' }}>
                {defaultRenderer(description.json)}
              </Text>
            )}
          </Box>
        ) : null}
        <Box sx={{ p: 24, pt: 0 }}>
          {actionsCollection?.items.length ? (
            <Flex sx={{ justifyContent: 'flex-start', mt: '16px' }}>
              {actionsCollection.items.map((action) => (
                <Link
                  key={action?.href}
                  {...action}
                  sx={{ ':not(:last-of-type)': { mr: 3 } }}
                  variant="accent"
                  arrow
                />
              ))}
            </Flex>
          ) : null}
        </Box>
      </Flex>
    </Card>
  )
}

export default CustomerCard

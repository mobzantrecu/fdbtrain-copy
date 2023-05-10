/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui'
import { PersonFragment } from 'lib/contentful/generated'
import AspectRatio from 'components/primitives/aspect-ratio'

const BoardMemberCard = ({ name, position, avatar }: PersonFragment) => (
  <Box
    sx={{
      p: 0,
      boxShadow: 'card',
      borderRadius: '8px',
      backgroundColor: 'background',
      mx: '3px'
    }}
  >
    {avatar && (
      <AspectRatio ratio={1 / 1}>
        <img
          src={avatar?.url ?? ''}
          alt={avatar?.title ?? ''}
          sx={{
            width: '100%',
            objectFit: 'cover',
            height: '100%',
            borderRadius: '8px 8px 0px 0px'
          }}
        />
      </AspectRatio>
    )}
    <Box sx={{ py: avatar ? 24 : 22, px: avatar ? 18 : 24 }}>
      <Heading
        as="h1"
        variant="heading.base"
        sx={{ color: 'gray10', fontWeight: 700, fontSize: '28px' }}
      >
        {name}
      </Heading>
      {position && (
        <Text sx={{ mt: '10px', mb: avatar ? '12px' : '' }}>{position}</Text>
      )}
    </Box>
  </Box>
)

export default BoardMemberCard

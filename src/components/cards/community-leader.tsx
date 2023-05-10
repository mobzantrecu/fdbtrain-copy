/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui'
import SocialIcons from 'components/compound/social-icons'
import { PersonFragment } from 'lib/contentful/generated'
import CardImage from 'components/primitives/card-cover'

const CommunityLeaderCard = ({
  name,
  bio,
  avatar,
  socialMedia
}: PersonFragment) => (
  <Box
    sx={{
      backgroundColor: 'background',
      boxShadow: 'card',
      borderRadius: '8px',
      p: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      overflow: 'visible',
      mt: '56px'
    }}
  >
    {avatar && (
      <CardImage
        image={avatar}
        ratio={1}
        pushImageSx={{ borderRadius: 'full' }}
        pushSx={{ width: '88px', mt: '-40px' }}
      />
    )}
    <Box sx={{ pt: 3, px: '20px', pb: !socialMedia ? '55px' : 0 }}>
      <Heading
        as="h1"
        variant="heading.base"
        sx={{ fontWeight: 700, fontSize: '28px' }}
      >
        {name}
      </Heading>
      {bio && (
        <Text variant="normal" sx={{ mt: 3, lineHeight: '24px' }}>
          {bio}
        </Text>
      )}
      {socialMedia && (
        <SocialIcons {...socialMedia} pushSx={{ mt: 2, mb: 2, mx: 'auto' }} />
      )}
    </Box>
  </Box>
)

export default CommunityLeaderCard

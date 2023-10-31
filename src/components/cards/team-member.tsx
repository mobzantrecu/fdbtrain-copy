/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, Box, Heading, Text } from 'theme-ui'
import SocialIcons from 'components/compound/social-icons'
import { PersonFragment } from 'lib/contentful/generated'
import AspectRatio from 'components/primitives/aspect-ratio'

const TeamMemberCard = ({
  name,
  position,
  bio,
  avatar,
  socialMedia
}: PersonFragment) => (
  <Box
    sx={{
      p: 0,
      boxShadow: 'card',
      borderRadius: '8px',
      backgroundColor: 'background'
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
    <Box
      sx={{
        p: 22
      }}
    >
      <Heading
        as="h1"
        variant="heading.base"
        sx={{ color: 'gray10', fontWeight: 700, fontSize: '28px' }}
      >
        {name}
      </Heading>
      {position && <Text sx={{ mt: '8px' }}>{position}</Text>}
      {bio && (
        <Text sx={{ mt: 2, fontSize: '16px', lineHeight: '24px' }}>{bio}</Text>
      )}
      {socialMedia && <SocialIcons {...socialMedia} pushSx={{ mt: 3 }} />}
    </Box>
  </Box>
)

export default TeamMemberCard

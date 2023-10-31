import ViewportWidthBox from 'components/layouts/viewport-width-box'
import Link from 'components/primitives/link'
import { navHeight } from 'components/sections/nav'
import ROUTES from 'lib/routes'
import Image from 'next/image'

import { Box, Container, Heading, Text } from 'theme-ui'

const height = `calc(100vh - ${navHeight})`

const Error404: React.FC<unknown> = () => {
  return (
    <ViewportWidthBox sx={{ minHeight: height }}>
      <Image
        layout="fill"
        src="/images/backgrounds/404-background.svg"
        alt="error 404 background"
      />
      <Container
        variant="section"
        sx={{
          minHeight: height,
          pt: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Image
          layout="fill"
          src="/images/backgrounds/404.png"
          alt="error 404"
        />
        <Box
          sx={
            {
              position: 'relative',
              zIndex: 'general',
              textAlign: 'center',
              maxWidth: '612px'
            } as any
          }
        >
          <Heading variant="heading.1" sx={{ fontSize: ['48px', '56px'] }}>
            The page you were looking for <b>was not found.</b>
          </Heading>
          <Text
            variant="normal"
            sx={{ mt: 3, mb: 4, maxWidth: '464px', mx: 'auto' }}
          >
            If you are looking for a page check the url again or return home by
            clicking the button below.
          </Text>
          <Link variant="buttons.primary" href={ROUTES.home}>
            Back home
          </Link>
        </Box>
      </Container>
    </ViewportWidthBox>
  )
}

export default Error404

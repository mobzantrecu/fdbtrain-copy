/** @jsx jsx */
import FaunaLogo from 'components/compound/fauna-logo'
import AccordionLink from 'components/primitives/accordion-link'
import DropdownLink from 'components/primitives/dropdown-link'
import Link from 'components/primitives/link'
import usePolyfilledMeasure from 'hooks/use-polyfilled-measure'
import {
  DropdownLinkFragment,
  LinkFragment,
  MediaFragment
} from 'lib/contentful/generated'
import { isInRoute } from 'lib/util/router'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  Box,
  Container,
  Flex,
  Grid,
  IconButton,
  jsx,
  SxStyleProp,
  Text
} from 'theme-ui'
import TopNotification from './top-notification'

const navHeight = '72px'

type Props = {
  centerLinks: (LinkFragment | DropdownLinkFragment | null)[] | undefined
  rightLinks: (LinkFragment | DropdownLinkFragment | null)[] | undefined
  logo: MediaFragment | null | undefined
  topNotification:
    | React.ComponentPropsWithRef<typeof TopNotification>
    | null
    | undefined
}

const Nav = ({ topNotification, centerLinks, rightLinks, logo }: Props) => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  const [
    topNotificationRef,
    { height: topNotificationHeight }
  ] = usePolyfilledMeasure()
  const router = useRouter()

  useEffect(() => {
    const offset = topNotification ? topNotificationHeight : 0
    function handleScroll() {
      const { scrollTop } = document.documentElement
      if (scrollTop > offset) setHasScrolled(true)
      else setHasScrolled(false)
    }
    handleScroll()
    document.addEventListener('scroll', handleScroll)

    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [topNotification, topNotificationHeight])
  return (
    <>
      <Box
        sx={{
          bg: 'background',
          color: 'gray10',
          position: 'sticky',
          top: 0,
          width: '100%',
          zIndex: mobileMenuIsOpen ? '101' : 'header',
          transition: 'box-shadow .3s, top .3s',
          boxShadow: hasScrolled ? 'magical' : 'border'
        }}
      >
        {topNotification && !mobileMenuIsOpen && (
          <TopNotification {...topNotification} ref={topNotificationRef} />
        )}
        <Grid
          sx={{
            gridTemplateColumns: [
              '1fr 1fr',
              '1fr 1fr',
              null,
              null,
              'repeat(3, 1fr)'
            ],
            columnGap: '24px',
            alignItems: 'center',
            height: navHeight,
            px: 32
          }}
        >
          <Grid variant="one">
            <div sx={{ width: 'fit-content' }}>
              <FaunaLogo logo={logo} />
            </div>
          </Grid>
          <Box
            sx={{
              justifyContent: 'center',
              display: ['none', null, null, null, 'flex'],
              height: '100%',
              minWidth: '470px'
            }}
          >
            <Grid
              sx={{
                gap: 4,
                gridTemplateColumns: `repeat(${centerLinks?.length}, auto)`,
                textAlign: 'center'
              }}
            >
              {centerLinks?.map((link) => {
                switch (link?.__typename) {
                  case 'CallToAction': {
                    if (!link.href) return null
                    const isActive = isInRoute(router.pathname, link.href)
                    return (
                      <Link
                        key={link.children}
                        {...link}
                        isNav={true}
                        variant="nav"
                        sx={{
                          color: isActive ? 'gray10' : 'gray8'
                        }}
                      />
                    )
                  }
                  case 'NavLink':
                    return (
                      <DropdownLink
                        key={link.children}
                        {...link}
                        sx={{ fontSize: 1 }}
                        topNotification={topNotification}
                      />
                    )
                  default:
                    return null
                }
              })}
            </Grid>
          </Box>
          <Grid
            sx={{
              display: ['none', null, null, null, 'grid'],
              gridTemplateColumns: 'auto auto auto',
              alignItems: 'center',
              justifyItems: 'center',
              justifySelf: 'end',
              fontSize: 1,
              gap: 0
            }}
          >
            {rightLinks?.map((link, i, { length }) => {
              if (!link) return null
              let variant = undefined
              let sx: SxStyleProp | undefined = undefined
              switch (i) {
                default:
                  variant = 'nav'
                  sx = { display: ['none', null, null, null, 'flex'] }
                  break
                case length - 3:
                  variant = 'accent'
                  sx = {
                    fontWeight: 600,
                    lineHeight: '19px',
                    textTransform: 'uppercase',
                    fontSize: '12px',
                    mr: ['', '', '', '8px', '16px']
                  }
                  break
                case length - 2:
                  variant = 'buttons.primary.small'
                  sx = {
                    color: 'primary',
                    backgroundColor: 'background',
                    textTransform: 'uppercase',
                    border: '1px solid #604BE9',
                    height: '35px',
                    textAlign: 'center',
                    width: ['', '', '', '80px', 'auto'],
                    display: 'inline-block',
                    p: '8px 10px',
                    fontSize: '12px',
                    '&:hover': {
                      color: '#3A1AB6',
                      outlineColor: '#3A1AB6',
                      backgroundColor: 'background'
                    },
                    mr: ['', '', '', '8px', '16px']
                  }
                  break
                case length - 1:
                  variant = 'buttons.primary.small'
                  sx = {
                    textTransform: 'uppercase',
                    fontSize: '12px',
                    letterSpacing: '0.05em',
                    height: '35px',
                    width: ['', '', '', '80px', 'auto'],
                    p: '8px 10px'
                  }
                  break
              }

              switch (link.__typename) {
                case 'CallToAction': {
                  if (!link.href) return null
                  const isActive = isInRoute(router.pathname, link.href)
                  return (
                    <Link
                      key={link.children}
                      {...link}
                      variant={variant}
                      sx={{
                        color: isActive ? 'primary' : undefined,
                        ...sx,
                        fontWeight: 600,
                        m: '-1px -7px 0 0'
                      }}
                    />
                  )
                }
                case 'NavLink':
                  return (
                    <DropdownLink
                      key={link.children}
                      {...link}
                      sx={{ fontSize: 1, ...sx }}
                    />
                  )
                default:
                  return null
              }
            })}
          </Grid>
          <IconButton
            aria-label="open menu"
            sx={{
              color: 'gray10',
              display: ['flex', null, null, null, 'none'],
              justifySelf: 'end',
              fontSize: 6
            }}
            onClick={() => setMobileMenuIsOpen(true)}
          >
            <FiMenu size="24px" />
          </IconButton>
        </Grid>

        {/* Mobile menu */}

        <Box
          sx={{
            bg: 'background',
            color: 'gray10',
            position: 'fixed',
            top: 0,
            height: mobileMenuIsOpen ? '100vh' : 0,
            maxHeight: '100vh',
            transition: 'height .5s',
            overflowX: 'hidden',
            width: '100%',
            zIndex: 'dropdown',
            visibility: mobileMenuIsOpen ? 'visible' : 'hidden'
          }}
        >
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: navHeight
            }}
          >
            <FaunaLogo logo={logo} />
            <IconButton
              aria-label="close menu"
              sx={{ color: 'gray10', fontSize: 6 }}
              onClick={() => setMobileMenuIsOpen(false)}
            >
              <FiX size="24px" />
            </IconButton>
          </Container>
          <Container
            sx={{
              pb: 4,
              pt: '10vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: `calc(100vh - ${navHeight} - ${topNotificationHeight}px)`
            }}
          >
            <Flex
              sx={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                '& > a:not(:last-child)': { mb: 3 },
                '& > div:not(:last-child)': { mb: 3 }
              }}
            >
              {centerLinks?.map((link) => {
                switch (link?.__typename) {
                  case 'CallToAction':
                    return (
                      <Link
                        key={link.children}
                        {...link}
                        sx={{
                          color: 'gray10',
                          textAlign: 'center',
                          fontSize: 5,
                          '&:hover': { textDecoration: 'none' }
                        }}
                      />
                    )
                  case 'NavLink':
                    return (
                      <AccordionLink
                        key={link.children}
                        {...link}
                        pushSx={{
                          button: {
                            color: 'gray10',
                            textAlign: 'center',
                            fontSize: 5
                          },
                          a: {
                            '&:hover': { textDecoration: 'none' }
                          }
                        }}
                      />
                    )
                  default:
                    return null
                }
              })}
            </Flex>

            <Flex sx={{ flexDirection: 'column', mt: 3, alignItems: 'center' }}>
              {rightLinks?.map((link, i, { length }) => {
                let variant = undefined
                switch (i) {
                  default:
                    variant = 'nav'
                    break
                  case length - 3:
                    variant = 'accent'
                    break
                  case length - 2:
                    variant = 'buttons.primary'
                    break
                  case length - 1:
                    variant = 'buttons.primary'
                    break
                }
                return (
                  <Link
                    key={link?.children}
                    {...link}
                    variant={variant}
                    sx={{
                      fontWeight: 600,
                      mb: 3,
                      '&:nth-of-type(2)': {
                        color: 'primary',
                        backgroundColor: 'background',
                        border: '1px solid #604BE9',
                        height: '35px',
                        width: '100%',
                        p: '8px 10px',
                        '&:hover': {
                          color: '#3A1AB6',
                          outlineColor: '#3A1AB6',
                          backgroundColor: 'background'
                        },
                        textAlign: 'center'
                      },
                      '&:nth-of-type(3)': {
                        width: '100%',
                        height: '35px',
                        p: '8px 10px'
                      }
                    }}
                  />
                )
              })}
              <Text sx={{ fontSize: '14px', textAlign: 'center' }}>
                © {new Date().getFullYear()} Fauna, Inc. All Rights Reserved.
              </Text>
            </Flex>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Nav
export { navHeight }

/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, Container, Grid, Text } from 'theme-ui'
import Link from 'components/primitives/link'
import Divider from 'components/primitives/divider'
import SocialIcons from 'components/compound/social-icons'
import {
  DropdownLinkFragment,
  MediaFragment,
  SocialMediaFragment,
  LinkFragment
} from 'lib/contentful/generated'
import FaunaLogo from 'components/compound/fauna-logo'
import Status from './status'
import FooterAccordionLink from 'components/primitives/footer-accordion-link'

type Props = {
  lists: (DropdownLinkFragment | null)[] | undefined
  socialMedia: SocialMediaFragment | null | undefined
  logo: MediaFragment | null | undefined
  statusLink: LinkFragment | null | undefined
  copyRightMessage: string | null | undefined
  rightSideLinks: (LinkFragment | null)[] | null | undefined
  darkBackground?: boolean | null | undefined
}

const Footer = ({
  lists,
  socialMedia,
  logo,
  statusLink,
  copyRightMessage,
  rightSideLinks,
  darkBackground
}: Props) => {
  return (
    <footer
      sx={{
        bg: darkBackground ? '#1F1244' : 'footer'
      }}
    >
      <Container
        sx={{
          color: 'gray10',
          fontSize: 1,
          lineHeight: 'large',
          padding: ['90px 30px 40px 30px', '90px 160px 40px 160px']
        }}
      >
        <div
          sx={{
            display: ['flex', null, null, 'grid'],
            gridTemplateColumns: '35% 1fr',
            justifyContent: 'space-between',
            flexDirection: ['column-reverse', null, null, 'row'],
            alignItems: ['center', null, null, 'unset'],
            gap: '30px'
          }}
        >
          <div sx={{ flex: '2 2' }}>
            <div
              sx={{
                width: 'fit-content',
                mx: ['auto', null, null, 'unset'],
                opacity: darkBackground ? '0' : '1'
              }}
            >
              <FaunaLogo logo={logo} />
            </div>
            <div
              sx={{
                mt: 3,
                textAlign: ['center', null, null, 'left'],
                fontSize: 14
              }}
            >
              <Text color={darkBackground ? '#FFF' : ''}>
                400 S El Camino Real Ste 1250
              </Text>
              <Text color={darkBackground ? '#FFF' : ''}>
                San Mateo, CA 94402
              </Text>
              <Text color={darkBackground ? '#FFF' : ''}>(855) 432-8623</Text>
            </div>
            <div
              sx={{
                flex: '1 1',
                display: ['none', null, null, 'flex'],
                mt: '40px'
              }}
            >
              <SocialIcons
                {...socialMedia}
                width="25px"
                allWhite={darkBackground}
                sx={{
                  maxWidth: 'none'
                }}
              />
            </div>
          </div>
          <div
            sx={{
              display: ['block', null, null, 'none'],
              my: [4, null, null, 0]
            }}
          >
            <Status {...statusLink} />
          </div>
          <Grid
            columns={[1, null, null, lists?.length === 3 ? 3 : 4]}
            gap={[0, 2, 2, lists?.length === 3 ? 5 : 2]}
            sx={{
              flex: '1.5 1.5',
              gridColumnStart: 2,
              gridColumnEnd: 6,
              minWidth: 'fit-content',
              width: ['100%', null, null, '100%']
            }}
          >
            {lists?.map((list) => {
              if (!list) return null
              return (
                <div key={list.children as any}>
                  <div
                    sx={{
                      display: ['none', null, null, 'block']
                    }}
                  >
                    <Text
                      sx={{
                        color: darkBackground ? '#896BFF' : 'unset',
                        textTransform: 'capitalize',
                        fontSize: 1,
                        fontWeight: 700,
                        mb: 15
                      }}
                    >
                      {list.children}
                    </Text>
                    <ul>
                      {list.dropdownLinksCollection?.items.map((item) => {
                        if (!item) return null
                        return (
                          <li
                            key={item.href as any}
                            sx={{ '&:not(:last-of-type)': { mb: 3 } }}
                          >
                            <Link
                              sx={{
                                color: darkBackground ? '#FFF' : 'unset'
                              }}
                              {...item}
                              variant="nav"
                              icon={null}
                            />
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <div
                    sx={{
                      display: ['block', null, null, 'none']
                    }}
                  >
                    <FooterAccordionLink
                      {...list}
                      pushSx={{
                        borderBottom: '1px solid',
                        borderColor: 'border',
                        button: {
                          py: 2,
                          justifyContent: 'space-between',
                          width: '100%',
                          fontSize: 2,
                          fontWeight: 600,
                          color: darkBackground ? '#FFF' : 'unset'
                        },
                        a: {
                          fontSize: 1,
                          height: '24px',
                          mb: '10px',
                          '&:hover': { textDecoration: 'none' },
                          color: darkBackground ? '#FFF' : 'unset'
                        }
                      }}
                    />
                  </div>
                </div>
              )
            })}
          </Grid>
        </div>
        <Divider
          bg="none"
          size="100%"
          mt="5"
          mb="4"
          pushSx={{ display: ['none', 'none', 'block'] }}
        />
        <div
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 3,
            flexDirection: ['column-reverse', 'column-reverse', 'row'],
            alignItems: ['center', 'center', 'unset'],
            mt: [4, 4, 0]
          }}
        >
          <Text
            sx={{
              color: darkBackground ? '#896BFF' : 'unset',
              flex: '1 1',
              mt: [2, 2, 0]
            }}
          >
            {copyRightMessage}
          </Text>
          <div
            sx={{ flex: '1 1', display: 'flex', justifyContent: 'flex-end' }}
          >
            <div sx={{ display: 'flex' }}>
              {rightSideLinks?.map((link, idx) => (
                <Link
                  href={link?.href}
                  key={idx}
                  sx={{
                    color: darkBackground ? '#896BFF' : 'unset',
                    mr: 3,
                    ':last-child': { mr: 0 }
                  }}
                  variant="nav"
                >
                  {link?.children}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

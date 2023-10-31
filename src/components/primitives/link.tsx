/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { Box, jsx, Link as A, LinkProps as AProps, Text } from 'theme-ui'
import NextLink, { LinkProps } from 'next/link'
import { FiExternalLink } from 'react-icons/fi'
import { forwardRef } from 'react'
import { resolveRoute } from 'lib/routes'
import getIcon from 'lib/get-icon'
import Arrow from './arrow'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import { Maybe } from 'graphql/jsutils/Maybe'
import getAnchorTarget from '../../lib/util/getAnchorTarget'

type Props = Omit<AProps, 'href'> &
  Omit<LinkProps, 'as' | 'passHref' | 'href'> & {
    children?: React.ReactNode
    iconExternal?: boolean
    icon?: string | null
    arrow?: boolean
    arrowColor?: string
    href?: string | null
    labelDescription?: string | null
    isNav?: boolean
    backgroundImageColor?: Maybe<string>
  }

const Link = forwardRef<HTMLAnchorElement, Props>(
  ({ children, ...restProps }, ref) => {
    const {
      backgroundImageColor,
      href,
      icon,
      iconExternal,
      arrow,
      arrowColor,
      labelDescription,
      isNav,
      // NextLink Props
      replace,
      scroll,
      shallow,
      prefetch,
      // Rest
      ...aProps
    } = restProps

    const { href: resolvedHref, isExternal } = resolveRoute(href)

    const target = getAnchorTarget(resolvedHref)
    const Icon = getIcon(icon) as any

    return isNav ? (
      <Box
        sx={
          {
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            mb: labelDescription ? '24px' : ''
          } as any
        }
      >
        <NextLink
          href={resolvedHref}
          replace={replace}
          scroll={scroll}
          shallow={shallow}
          prefetch={prefetch}
          passHref
        >
          <A
            {...aProps}
            target={target}
            ref={ref}
            style={{
              alignItems: labelDescription ? 'start' : '',
              color:
                backgroundImageColor?.includes('blue') && arrow
                  ? 'darkBackgroundAnchor'
                  : 'inherit'
            }}
          >
            {icon && (
              <i
                className={`fa-light ${icon} `}
                sx={{
                  mr: 2,
                  mt: 1,
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'start',
                  minWidth: '20px'
                }}
              ></i>
            )}
            <Box>
              {children}

              {labelDescription && (
                <Text
                  sx={{
                    color: 'gray8',
                    fontWeight: 400,
                    fontSize: 0,
                    lineHeight: '16px'
                  }}
                >
                  {labelDescription}
                </Text>
              )}
            </Box>
            {iconExternal && isExternal && (
              <>
                {' '}
                <span sx={{ display: 'inline-flex' }}>
                  <FiExternalLink />
                </span>
              </>
            )}
            {arrow && (
              <span sx={{ display: 'inline-flex', ml: 2 }}>
                <Arrow />
              </span>
            )}
          </A>
        </NextLink>
      </Box>
    ) : (
      <NextLink
        href={resolvedHref}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        passHref
      >
        <A {...aProps} target={target} ref={ref}>
          {Icon && (
            <i
              sx={{
                mr: 2,
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Icon />
            </i>
          )}
          {typeof children === 'string'
            ? withHighlightedText(children)
            : children}
          {iconExternal && isExternal && (
            <>
              {' '}
              <span sx={{ display: 'inline-flex' }}>
                <FiExternalLink />
              </span>
            </>
          )}
          {arrow && (
            <Box
              sx={{
                display: 'inline-flex',
                ml: 2,
                '&>i': {
                  color: arrowColor && arrowColor
                }
              }}
            >
              <Arrow />
            </Box>
          )}
        </A>
      </NextLink>
    )
  }
)

export default Link

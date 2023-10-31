/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, SxStyleProp } from 'theme-ui'
import Link from 'components/primitives/link'
import { SocialMediaFragment } from 'lib/contentful/generated'

const linkSx: SxStyleProp = {
  '&:hover': { opacity: 0.75, color: 'currentColor' },
  opacity: 1,
  transition: 'opacity .2s'
}

type SocialIconsProps = {
  pushSx?: SxStyleProp
  width?: string
  allWhite?: boolean | null
  youtubeChannel?: string
  discord?: string
  write?: string
  color?: boolean
} & SocialMediaFragment

const resolveTag = (tagOrUrl: string, base: string) => {
  try {
    const url = new URL(tagOrUrl)
    return url.href
  } catch (error) {
    return `${base}/${tagOrUrl}`
  }
}

const SocialIcons = ({
  discord,
  twitter,
  linkedIn,
  facebook,
  devTo,
  youTube,
  youtubeChannel,
  gitHub,
  write,
  color,
  allWhite,
  pushSx,
  width = '18px'
}: SocialIconsProps) => (
  <div
    sx={{
      mt: -12,
      a: {
        display: 'inline-block',
        '&:not(:last-of-type)': { mr: 25 },
        mt: 12
      },
      ...pushSx
    }}
  >
    {discord && (
      <Link
        aria-label="Discord"
        sx={{
          ...linkSx,
          fontSize: width,
          color: allWhite ? '#FFF' : '#5965F2'
        }}
        href={resolveTag(discord, 'https://discord.com/invite')}
      >
        <i className="fa-brands fa-discord"></i>
      </Link>
    )}
    {devTo && (
      <Link
        aria-label="Dev"
        sx={{
          ...linkSx,
          fontSize: width,
          color: allWhite ? '#FFF !important' : 'unset'
        }}
        href={resolveTag(devTo, 'https://dev.to')}
      >
        <i className="fa-brands fa-dev"></i>
      </Link>
    )}
    {twitter && (
      <Link
        aria-label="Twitter"
        sx={{
          ...linkSx,
          fontSize: width,
          color: color ? '#55ACEE' : allWhite ? '#FFF !important' : ''
        }}
        href={resolveTag(twitter, 'https://twitter.com')}
      >
        <i className="fa-brands fa-twitter"></i>
      </Link>
    )}

    {gitHub && (
      <Link
        aria-label="GitHub"
        sx={{
          ...linkSx,
          fontSize: width,
          color: allWhite ? '#FFF !important' : ''
        }}
        href={resolveTag(gitHub, 'https://github.com')}
      >
        <i className="fa-brands fa-github"></i>
      </Link>
    )}
    {youTube && (
      <Link
        aria-label="YouTube"
        sx={{
          ...linkSx,
          fontSize: width,
          color: allWhite ? '#FFF !important' : ''
        }}
        href={resolveTag(youTube, 'https://youtube.com/watch?v=')}
      >
        <i className="fa-brands fa-youtube"></i>
      </Link>
    )}
    {youtubeChannel && (
      <Link
        aria-label="YouTube"
        sx={{
          ...linkSx,
          fontSize: width,
          color: allWhite ? '#FFF !important' : '#FF0000'
        }}
        href={resolveTag(youtubeChannel, 'https://youtube.com/channel')}
      >
        <i className="fa-brands fa-youtube"></i>
      </Link>
    )}
    {linkedIn && (
      <Link
        aria-label="LinkedIn"
        sx={{
          ...linkSx,
          fontSize: width,
          color: allWhite ? '#FFF !important' : ''
        }}
        href={resolveTag(linkedIn, 'https://www.linkedin.com/company')}
      >
        <i className="fa-brands fa-linkedin-in"></i>
      </Link>
    )}
    {facebook && (
      <Link
        aria-label="Facebook"
        sx={{
          ...linkSx,
          fontSize: width,
          color: allWhite ? '#FFF !important' : ''
        }}
        href={resolveTag(facebook, 'https://facebook.com')}
      >
        <i className="fa-brands fa-facebook"></i>
      </Link>
    )}
    {write && (
      <Link
        aria-label="Facebook"
        sx={{
          ...linkSx,
          fontSize: width,
          color: allWhite ? '#FFF !important' : ''
        }}
        href={resolveTag(write, 'https://www2.fauna.com')}
      >
        <i className="fa-solid fa-comment-lines"></i>
      </Link>
    )}
  </div>
)

export default SocialIcons

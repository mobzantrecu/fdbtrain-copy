/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { Suspense } from 'react'
React

import { jsx } from 'theme-ui'
import Link from 'next/link'
import ROUTES from 'lib/routes'
import { MediaFragment } from 'lib/contentful/generated'
import Image from 'next/image'

type Props = {
  isLink?: boolean
  logo: MediaFragment | null | undefined
}

const FaunaLogo = ({ isLink = true, logo }: Props) => {
  if (!logo) return null
  if (!logo.url) return null
  if (!isLink) {
    return (
      <Image
        src={logo.url ?? ''}
        alt="Fauna logo"
        width={logo.width ?? 136}
        height={logo.height ?? 36}
        layout="fixed"
      />
    )
  }

  return (
    <Link href={ROUTES.home} passHref>
      <a>
        <Suspense fallback={null}>
          <Image
            src={logo.url ?? ''}
            alt="Fauna logo"
            width={logo.width ?? 136}
            height={logo.height ?? 36}
            layout="fixed"
          />
        </Suspense>
      </a>
    </Link>
  )
}

export default FaunaLogo

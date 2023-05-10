import Link from 'components/primitives/link'
import ROUTES from 'lib/routes'
import { Button, Container, Text } from 'theme-ui'
import { useCallback, useEffect, useState } from 'react'
import Transition from '../transition'

import s from './style.module.css'

const localStorageKey = 'fauna-accepted-cookies'
const transitionDuration = 500

const CookieDisclaimer = () => {
  const [isDismissed, setIsDismissed] = useState<boolean>(true)

  useEffect(() => {
    const acceptedCookies = window.localStorage.getItem(localStorageKey)
    setIsDismissed(acceptedCookies ? acceptedCookies === 'true' : false)
  }, [])

  const handleDismiss = useCallback(() => {
    window.localStorage.setItem(localStorageKey, 'true')
    setIsDismissed(true)
  }, [])

  return (
    <Transition
      show={!isDismissed}
      duration={transitionDuration}
      className={s.base}
      classNameShow={s.show}
      classNameHide={s.hide}
    >
      <Container
        variant="sectionSmall"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: [3, 4]
        }}
      >
        <Text variant="small" sx={{ maxWidth: '3xl' }}>
          This website uses cookies to enhance the user experience and to better
          understand how our site is used. By continuing to use this site or
          clicking on Accept, you are consenting to our use of cookies and our{' '}
          <Link href={ROUTES.privacy} variant="accent">
            privacy policy.
          </Link>
        </Text>
        <Button aria-label="accept cookie" onClick={handleDismiss}>
          Accept
        </Button>
      </Container>
    </Transition>
  )
}

export default CookieDisclaimer

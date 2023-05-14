/** @jsx jsx */
import { jsx, Box, SxStyleProp, Grid } from 'theme-ui'
import { Document } from '@contentful/rich-text-types'
import Link from 'components/primitives/link'
import {
  LinkFragment,
  LogosCollectionFragment,
  MediaFragment
} from 'lib/contentful/generated'
import SectionLayout from './section'
import { useLinesAnimation } from 'lib/gsap'
import ViewportWidthBox from './viewport-width-box'
import HeroDots from 'components/svgs/hero-dots'
import LanguagesSlider from 'components/compound/languages-slider'
import SignUpForm from 'fe-components/src/legacy/components/SignUpForm'
import axios from 'axios'
import cookies from 'js-cookie'
import { useState } from 'react'
import { isDev } from 'lib/constants'

type Props = {
  title: string | null | undefined
  subtitle?: string | Document | null
  actions?: (LinkFragment | null)[] | null
  withoutLines?: boolean
  children?: React.ReactNode
  pushSx?: SxStyleProp
  containerSx?: SxStyleProp
  slider?: LogosCollectionFragment | null | undefined
  isHome?: boolean
  isFeatures?: boolean
  image?: MediaFragment | null
  backGroundImageColor?: string
  imageIsStacked?: boolean | null
  cookieDomain: string | null | undefined
  apiUrl: string | null | undefined
  dashboardUrl: string | null | undefined
  captchaSiteKey: string | null | undefined
}

const HeroSignupForm = ({
  backGroundImageColor,
  title,
  subtitle,
  actions,
  withoutLines,
  children,
  pushSx,
  containerSx,
  slider,
  isHome,
  isFeatures,
  cookieDomain,
  apiUrl,
  dashboardUrl,
  captchaSiteKey
}: Props) => {
  if (
    !title &&
    !children &&
    (typeof subtitle === 'string' ? !subtitle : !subtitle?.nodeType)
  ) {
    return null
  }

  const svgRef = useLinesAnimation()

  const [showError, setShowError] = useState(false)

  const login = async (email: string, password: string) => {
    return await axios.post(
      `${apiUrl}/login`,
      {
        email,
        password
      },
      { withCredentials: true }
    )
  }

  const register = async (
    email: string,
    password: string,
    captchaToken: string | null | undefined
  ) => {
    return await axios.post(
      `${apiUrl}/register?utm_content=lp-signup`,
      {
        email,
        password,
        captcha_token: captchaToken,
        strategy: 'email_and_password'
      },
      { withCredentials: true }
    )
  }

  const onSuccess = (response: any) => {
    cookies.set('session', JSON.stringify(response), {
      domain: cookieDomain ? cookieDomain : ''
    })
    if (dashboardUrl) {
      window.location.href = dashboardUrl + '/?first_session=true'
    }
  }

  const handleError = (error: any) => {
    setShowError(true)
    console.error(
      'handleError',
      JSON.stringify(error?.response?.data ?? 'Error desconocido', null, 2)
    )
  }

  const onLoginError = (error: any) => {
    handleError(error)
  }

  const onRegisterError = (error: any) => {
    handleError(error)
  }

  const onSubmit = async (
    email: string,
    password: string,
    captchaToken: string | null | undefined
  ) => {
    try {
      await register(email, password, captchaToken)
    } catch (error) {
      onRegisterError(error)
      return
    }

    try {
      const loginResponse = await login(email, password)
      onSuccess(loginResponse)
    } catch (error) {
      onLoginError(error)
      return
    }
  }

  return (
    <>
      <Grid
        gap={1}
        columns={[1, 1, '59% 41%', '53% 47%', '53% 47%']}
        sx={{
          ...containerSx
        }}
      >
        <Box>
          <SectionLayout
            title={{ text: title }}
            subtitle={subtitle}
            pushSx={{
              pb: ['16px', null, '32px'],
              ...pushSx
            }}
            noContentDivider
            isHero
            backgroundImageColor={backGroundImageColor}
          >
            <Box>
              {actions?.map((action, i) => {
                if (!action) return null
                return (
                  <Link
                    key={`${action?.href}-${i}`}
                    variant={i === 0 ? 'buttons.primary' : 'buttons.secondary'}
                    sx={{
                      ':not(:last-of-type)': { mr: 15 },
                      zIndex: 'general',
                      position: 'relative',
                      height: '35px',
                      textTransform: 'uppercase',
                      fontSize: ['11px', '12px'],
                      letterSpacing: '0.5px',
                      lineHeight: '16px',
                      ml: '2px',
                      px: ['13px', '33px'],
                      ':last-of-type': {
                        px: '23.5px',
                        lineHeight: '17px'
                      },
                      width: 'fit-content'
                    }}
                    {...action}
                  />
                )
              })}
            </Box>
            {children && isFeatures && (
              <Box
                sx={{
                  pt: '11px',
                  textAlign: 'center',
                  backgroundColor: isHome ? '#f9f9f9' : '',
                  '&>div>div:nth-of-type(2)': {
                    marginTop: '50px',
                    paddingBottom: '30px'
                  },
                  '&>div>div>a': {
                    backgroundColor: isHome ? '#fff' : '',
                    '&>img': {
                      height: '120%'
                    }
                  }
                }}
              >
                {children}
              </Box>
            )}
          </SectionLayout>
        </Box>

        <Box
          sx={{
            display: 'block',
            maxWidth: 'none',
            position: 'relative',
            margin: ['0px auto 64px', '15px auto 64px', '64px auto 64px'],
            paddingLeft: '15px',
            paddingRight: '15px'
          }}
        >
          <SignUpForm
            apiUrl={apiUrl ? apiUrl : ''}
            dashboardUrl={dashboardUrl ? dashboardUrl : ''}
            onSubmit={onSubmit}
            captchaEnabled={isDev ? false : true}
            captchaSiteKey={captchaSiteKey ? captchaSiteKey : ''}
            githubSignUpEnabled={true}
            netlifySignUpEnabled={false}
            showFormError={showError}
          />
        </Box>
      </Grid>
      {!withoutLines && (
        <ViewportWidthBox>
          <Box>
            <HeroDots pushSx={{ mt: 64 }} ref={svgRef} />
          </Box>
        </ViewportWidthBox>
      )}
      {children && !isFeatures && (
        <Box
          sx={{
            pt: [2, 5],
            textAlign: 'center',
            backgroundColor: isHome ? '#f9f9f9' : '',
            '&>div>div:nth-of-type(2)': {
              marginTop: '50px',
              paddingBottom: '30px'
            },
            '&>div>div>a': {
              backgroundColor: isHome ? '#fff' : '',
              '&>img': {
                height: '120%'
              }
            }
          }}
        >
          {children}
        </Box>
      )}
      <Box sx={{ backgroundColor: 'gray2' }}>
        {slider && (
          <LanguagesSlider
            {...slider}
            pushSx={{ mt: actions?.length ? 5 : undefined }}
          />
        )}
      </Box>
    </>
  )
}

export default HeroSignupForm

import { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import theme from 'lib/theme'
import 'keen-slider/keen-slider.min.css'
import 'css/global.css'
import 'css/markdown.scss'
import { useEffect } from 'react'
import { forcePreview, isDev } from 'lib/constants'
import declareBuilderComponents from '../builder'
import builder from '@builder.io/react'

function setVw() {
  const vw = document.documentElement.clientWidth / 100
  document.documentElement.style.setProperty('--vw', `${vw}px`)
}

builder.init(
  process.env.BUILDER_SPACE_API_KEY || '72fd2c7b8b5d42b39d102460089f9251'
)

declareBuilderComponents()

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    setVw()
    window.addEventListener('resize', setVw)
    return () => window.removeEventListener('resize', setVw)
  }, [])

  useEffect(() => {
    try {
      const preview = pageProps.preview
      if (!isDev && forcePreview && preview === false) {
        fetch(
          `/api/force-preview?secret=${process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET}`,
          { method: 'GET' }
        )
          .then(async (r) => {
            if (r.status !== 200) {
              const error = await r.json()
              console.error(error)
            } else {
              window.location.reload()
            }
          })
          .catch((error) => console.error(error))
      }
    } catch (error) {
      // Ignore
    }
  }, [pageProps])

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App

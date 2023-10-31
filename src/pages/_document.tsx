import GoDlGlobal from 'lib/scripts/google-optimize/go-dl-global'
import GoogleOptimizeScript from 'lib/scripts/google-optimize/go-script'
import ZendeskSnippetScript from 'lib/scripts/zendesk-snippet'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import dynamic from 'next/dynamic'
import VwoSnippetScript from '../lib/scripts/vwo'

const GAScript = dynamic(() => import('lib/scripts/ga'))
const FontAwesomeScript = dynamic(() => import('lib/scripts/fontawesome'))
const PardotScript = dynamic(() => import('lib/scripts/pardot-drift'), {
  ssr: false
})

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="https://p.typekit.net"
            crossOrigin="true"
          />
          <link
            rel="preconnect"
            href="https://dev.visualwebsiteoptimizer.com"
          />
          <VwoSnippetScript />
          <GoogleOptimizeScript />
          <GoDlGlobal />
        </Head>
        <body>
          <PardotScript />
          <FontAwesomeScript />
          <Main />
          <NextScript />
          <GAScript />
          <ZendeskSnippetScript />
        </body>
      </Html>
    )
  }
}

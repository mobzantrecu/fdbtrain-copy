import GoDlGlobal from 'lib/scripts/google-optimize/go-dl-global'
import GoogleOptimizeScript from 'lib/scripts/google-optimize/go-script'
import ZendeskSnippetScript from 'lib/scripts/zendesk-snippet'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import dynamic from 'next/dynamic'
import { vwoScript } from '../lib/constants'

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
          <script
            type="text/javascript"
            id="vwoCode"
            dangerouslySetInnerHTML={{
              __html: vwoScript
            }}
          />
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

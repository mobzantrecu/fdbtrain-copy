import ZendeskSnippetScript from 'lib/scripts/zendesk-snippet'
import Document, { Head, Html, Main, NextScript } from 'next/document'
import dynamic from 'next/dynamic'

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
            src="https://dev.visualwebsiteoptimizer.com/lib/685475.js"
            id="vwoCode"
          />
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

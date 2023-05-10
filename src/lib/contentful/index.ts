import { GraphQLClient } from 'graphql-request'
import { getSdk } from './generated'

type Environments = 'master' | 'sandbox' | 'backup' | 'redesign' | 'development'
let environment: Environments = 'master'
switch (process.env.VERCEL_GIT_COMMIT_REF) {
  case 'sandbox':
    environment = 'sandbox'
    break
  default:
    break
}

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${environment}`

const contentfulSdk = (preview?: boolean) =>
  getSdk(
    new GraphQLClient(endpoint, {
      headers: {
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`
      }
    })
  )

export default contentfulSdk

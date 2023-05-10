const { GraphQLClient, gql } = require('graphql-request')

let environment = 'development'
switch (process.env.VERCEL_GIT_COMMIT_REF) {
  case 'sandbox':
    environment = 'sandbox'
    break
  default:
    break
}

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/environments/${environment}`

const client = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
  }
})

const RedirectFragmentDoc = gql`
  fragment Redirect on Redirect {
    source
    destination
    permanent
  }
`

const RedirectsDocument = gql`
  query Redirects {
    redirectsCollection(limit: 1, order: sys_firstPublishedAt_DESC) {
      items {
        redirectsCollection(limit: 1000) {
          items {
            ...Redirect
          }
        }
      }
    }
  }
  ${RedirectFragmentDoc}
`

exports.getRedirects = async function getRedirects() {
  const { redirectsCollection } = await client.request(RedirectsDocument)
  return redirectsCollection.items[0].redirectsCollection.items
}

exports.oldRedirects = [
  {
    source: '/account',
    destination: 'https://app.fauna.com/account',
    permanent: true
  },
  {
    source: '/support',
    destination:
      'https://faunadb.atlassian.net/servicedesk/customer/user/login?destination=portals',
    permanent: true
  },
  {
    source: '/blog/faas-providers-in-2019-what-are-my-options',
    destination: '/blog/comparison-faas-providers',
    permanent: true
  },
  {
    source: '/blog/fauna-ceo-interview',
    destination: 'https://youtu.be/1dIIk69RJ8o',
    permanent: true
  },
  {
    source: '/blog/secure-hierarchical-multi-tenancy-patterns',
    destination: 'https://app.fauna.com/tutorials/multitenant',
    permanent: true
  },
  {
    source: '/blog/write-with-fauna-calling-all-jamstack-enthusiasts',
    destination: 'https://fauna.com/blog/write-with-fauna',
    permanent: true
  },
  {
    source: '/cloudcast',
    destination: '/',
    permanent: true
  },
  {
    source: '/db',
    destination: 'https://dashboard.fauna.com/db',
    permanent: true
  },
  {
    source: '/documentation',
    destination: 'https://app.fauna.com/documentation/gettingstarted',
    permanent: true
  },
  {
    source: '/docs',
    destination: 'https://app.fauna.com/documentation/gettingstarted',
    permanent: true
  },
  {
    source: '/documentation/:slug*',
    destination: 'https://app.fauna.com/documentation/:slug*',
    permanent: true
  },
  {
    source: '/faunadb',
    destination: '/features',
    permanent: true
  },
  {
    source: '/faunadb-latency',
    destination: 'https://status.fauna.com/',
    permanent: true
  },
  { source: '/feed.rss', destination: '/blog/feed', permanent: true },
  { source: '/feed', destination: '/blog/feed', permanent: true },
  { source: '/rss', destination: '/blog/feed', permanent: true },
  { source: '/blog/rss', destination: '/blog/feed', permanent: true },
  { source: '/blog/feed.atom', destination: '/blog/feed', permanent: true },
  { source: '/blog/feed.rss', destination: '/blog/feed', permanent: true },
  {
    source: '/tutorials',
    destination: 'https://docs.fauna.com/fauna/current/howto/index.html',
    permanent: true
  },
  { source: '/product', destination: '/features', permanent: true },
  {
    source: '/request-info',
    destination: 'https://www2.fauna.com/requestinfo',
    permanent: true
  },
  { source: '/serverless-cloud', destination: '/features', permanent: true },
  {
    source: '/serverless-cloud-sign-up',
    destination: 'https://app.fauna.com/sign-up',
    permanent: true
  },
  {
    source: '/sign-up',
    destination: 'https://app.fauna.com/sign-up',
    permanent: true
  },
  {
    source: '/tutorials/:slug*',
    destination: 'https://app.fauna.com/tutorials/:slug*',
    permanent: true
  },
  { source: '/use-cases/:slug*', destination: '/customers', permanent: true },
  {
    source: '/whitepaper',
    destination: 'https://www2.fauna.com/techwhitepaper',
    permanent: true
  },
  {
    source: '/write',
    destination: 'https://www2.fauna.com/write-with-fauna',
    permanent: true
  },
  {
    source: '/write-with-fauna',
    destination: 'https://www2.fauna.com/write-with-fauna',
    permanent: true
  },
  { source: '/team', destination: '/about', permanent: true },
  { source: '/company', destination: '/about', permanent: true },
  {
    source: '/team/careers',
    destination: '/careers',
    permanent: true
  },
  { source: '/enterprise', destination: '/features', permanent: true },
  {
    source: '/faunadb/serverless-cloud',
    destination: '/features',
    permanent: true
  }
]

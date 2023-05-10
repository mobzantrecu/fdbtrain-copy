const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-svgr')
const { getRedirects, oldRedirects } = require('./redirects')
const withTM = require('next-transpile-modules')([
  'gsap',
  'gsap/dist/DrawSVGPlugin'
])

const homeToIndexRedirect = {
  source: '/home',
  destination: '/',
  permanent: false
}

module.exports = withPlugins([
  withTM,
  withSvgr({
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }

      return config
    },
    redirects: async () => {
      const cmsRedirects = await getRedirects()
      const filteredOldRedirects = oldRedirects.filter((oldRedirect) =>
        cmsRedirects.every((r) => r.source !== oldRedirect.source)
      )

      return [...filteredOldRedirects, ...cmsRedirects, homeToIndexRedirect]
      // return [...filteredOldRedirects, ...cmsRedirects]
    },
    images: {
      domains: ['images.ctfassets.net']
    }
  })
])

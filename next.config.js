/* eslint-disable @typescript-eslint/no-unused-vars */
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
  {
    images: {
      domains: ['images.ctfassets.net', 'cdn.builder.io']
    }
  },
  {
    eslint: {
      ignoreDuringBuilds: true
    }
  },
  {
    externals: {
      react: 'React'
    }
  }
])

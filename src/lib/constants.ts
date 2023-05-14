/* eslint-disable no-useless-escape */
const isDev = process.env.NODE_ENV === 'development'
const isClient = typeof window !== 'undefined'
const forcePreview =
  isClient &&
  window.location.origin.includes('https://fauna-preview.vercel.app')

export { isDev, isClient, forcePreview }

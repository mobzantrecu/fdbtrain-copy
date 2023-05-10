import { Flex, Box, Button } from 'theme-ui'
import { useCallback, useEffect, useState } from 'react'
import { FiCheck, FiCopy, FiXCircle } from 'react-icons/fi'
import { useRouter } from 'next/router'
import copyToClipboard from 'lib/util/copy'
import { originURL } from 'lib/util/router'
import { forcePreview } from 'lib/constants'

const PreviewButtons = () => {
  const router = useRouter()
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    let fullURL = ''
    if (forcePreview) {
      fullURL = window.location.href
    } else {
      if (router.query.slug) {
        fullURL = `${originURL}/api/preview?secret=${process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET}&slug=${router.query.slug}`
      } else {
        const page = router.asPath.replace('/', '')
        fullURL = `${originURL}/api/preview?secret=${
          process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET
        }&page=${page === '' ? 'home' : page}`
      }
    }
    copyToClipboard(fullURL)
    setCopied(true)
  }, [router])

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  return (
    <Flex sx={{ flexDirection: 'column', alignItems: 'flex-end' }}>
      <Button
        as="a"
        aria-label="exit preview"
        variant="primary"
        sx={{
          fontSize: 1,
          height: 8,
          borderRadius: 'lg',
          py: 0,
          px: 2,
          cursor: 'pointer',
          lineHeight: 1,
          mb: 2,
          background: '#d73535'
        }}
        // @ts-ignore
        href={
          forcePreview ? `${originURL}${router.asPath}` : '/api/preview-disable'
        }
      >
        Exit preview{' '}
        <Box ml="2">
          <FiXCircle />
        </Box>
      </Button>
      <Button
        aria-label="preview link"
        sx={{
          fontSize: 1,
          height: 8,
          borderRadius: 'lg',
          py: 0,
          px: 2,
          cursor: 'pointer',
          lineHeight: 1,
          background: '#d73535'
        }}
        onClick={handleCopy}
      >
        {copied ? 'Copied' : 'Copy preview link'}{' '}
        <Box ml="2">{copied ? <FiCheck /> : <FiCopy />}</Box>
      </Button>
    </Flex>
  )
}

export default PreviewButtons

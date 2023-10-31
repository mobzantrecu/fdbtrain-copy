import { getAsPath } from 'lib/util/router'
import { useRouter } from 'next/dist/client/router'
import { Children, useCallback } from 'react'
import { FiLink } from 'react-icons/fi'
import { Box, Heading } from 'theme-ui'
import slugify from '@sindresorhus/slugify'

function flatten(text: string, child: any): string {
  return typeof child === 'string'
    ? text + child
    : Children.toArray(child.props.children).reduce(flatten, text)
}

const HeadingRenderer = ({ level, children }: any) => {
  const router = useRouter()
  children = Children.toArray(children)
  const text = children.reduce(flatten, '')
  const slug = slugify(text)
  const id = slug.endsWith('-') ? slug.slice(0, -1) : slug

  const handleClick = useCallback(() => {
    const cleanAsPath = getAsPath(router.asPath, {})
    router.push(`${cleanAsPath}#${id}`)
  }, [id, router])

  return (
    <Heading
      // @ts-ignore
      as={`h${level}`}
      variant={`blog.heading.${level}`}
      onClick={handleClick}
      sx={{
        position: 'relative',
        transition: 'all .2s',
        cursor: 'pointer',
        width: 'fit-content',
        '&:hover': {
          '.anchor-icon': {
            opacity: 1,
            pointerEvents: 'all',
            color: 'primary'
          }
        }
      }}
    >
      <span
        id={id}
        style={{
          position: 'absolute',
          top: '-100px',
          scrollMarginTop: '1.5rem'
        }}
      />
      {children}
      <Box
        className="anchor-icon"
        sx={
          {
            display: 'inline-flex',
            p: 0,
            opacity: 0,
            transition: 'all .2s',
            fontSize: 4,
            pointerEvents: 'none',
            ml: 2
          } as any
        }
      >
        <FiLink />
      </Box>
    </Heading>
  )
}

export default HeadingRenderer

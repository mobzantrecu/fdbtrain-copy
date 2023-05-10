/** @jsx jsx */
import { jsx, Heading, Card, Text } from 'theme-ui'
import Link from 'components/primitives/link'
import Divider from 'components/primitives/divider'
import defaultRenderer, {
  Description,
  resolveDescription
} from 'lib/contentful/renderers'
import { SectionBlockFragment } from 'lib/contentful/generated'
import withHighlightedText from 'lib/contentful/renderers/highlight'
import ROUTES from 'lib/routes'

type Props = {
  prevPostSlug: string | null | undefined
  nextPostSlug: string | null | undefined
  slug: string | null | undefined
  title: string | null | undefined
  excerpt: string | null | undefined
  footerText: Description
  newsletterBlock: SectionBlockFragment | null | undefined
}

const BlogPostFooter = ({
  prevPostSlug,
  nextPostSlug,
  slug,
  title,
  excerpt,
  footerText,
  newsletterBlock
}: Props) => {
  const encodedUrl = encodeURI(`https://fauna.com/blog/${slug}`)
  const encodedTitle = encodeURIComponent(title ?? '')
  const encodedSummary = encodeURIComponent(excerpt ?? '')

  return (
    <>
      <Text variant="small" sx={{ mt: 4, mx: ['15px', '15px', '15px', ''] }}>
        {resolveDescription(footerText)}
      </Text>
      <div
        sx={{
          my: '32px',
          display: 'flex',
          flexDirection: 'row',
          mx: ['15px', '15px', '15px', '']
        }}
      >
        <Heading
          variant="heading.base"
          sx={{ fontSize: '22px', fontWeight: 600, lineHeight: '24px' }}
        >
          Share this post
        </Heading>
        <Link
          sx={{
            mx: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#fff',
            fontWeight: 600,
            fontSize: '22px',
            p: '4px 8px',
            position: 'relative',
            top: '-4px',
            borderRadius: '4px',
            letterSpacing: '0.05em',
            border: '1px solid #64696C',
            '&:hover': {
              color: 'background',
              background: '#0172e2',
              textDecoration: 'none'
            },
            '&:focus': {
              boxShadow: 'none',
              background: '#0172e2',
              color: 'background'
            }
          }}
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        >
          <i
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2
            }}
          >
            <i className="fa-brands fa-twitter"></i>
          </i>
          <span sx={{ fontSize: '14px' }}>TWITTER</span>
        </Link>
        <Link
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#fff',
            fontWeight: 600,
            fontSize: '22px',
            p: '4px 8px',
            position: 'relative',
            top: '-4px',
            borderRadius: '4px',
            letterSpacing: '0.05em',
            border: '1px solid #64696C',
            '&:hover': {
              color: 'background',
              background: '#285f8c',
              textDecoration: 'none'
            },
            '&:focus': {
              boxShadow: 'none',
              background: '#285f8c',
              color: 'background'
            }
          }}
          href={`https://www.linkedin.com/shareArticle/?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedSummary}&source=Fauna.com`}
        >
          <i
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2
            }}
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </i>
          <span sx={{ fontSize: '14px' }}>LINKEDIN</span>
        </Link>
      </div>
      <Divider size="100%" mb="26px" />
      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mb: '48px',
          mx: ['15px', '15px', '15px', '']
        }}
      >
        {prevPostSlug ? (
          <Link
            href={ROUTES.blogPost(prevPostSlug as string)}
            sx={{
              lineHeight: '8px',
              position: 'relative',
              top: '-2px',
              ':hover': { textDecoration: 'none' }
            }}
          >
            <span
              sx={{
                fontSize: '35px',
                position: 'relative',
                top: '3px',
                mr: 3,
                ':hover': { textDecoration: 'none' }
              }}
            >
              {'‹︁'}
            </span>{' '}
            Previous
          </Link>
        ) : (
          <div />
        )}
        {nextPostSlug ? (
          <Link
            href={ROUTES.blogPost(nextPostSlug as string)}
            sx={{
              lineHeight: '8px',
              position: 'relative',
              top: '-2px',
              ':hover': { textDecoration: 'none' }
            }}
          >
            Next{' '}
            <span
              sx={{
                fontSize: '35px',
                position: 'relative',
                top: '3px',
                ml: 3,
                ':hover': { textDecoration: 'none' }
              }}
            >
              {'›︁'}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
      {newsletterBlock && (
        <Card
          sx={{
            py: '25px',
            boxShadow: 'card',
            mx: ['15px', '15px', '15px', '']
          }}
        >
          <Heading variant="heading.3" sx={{ fontWeight: 600 }}>
            {withHighlightedText(newsletterBlock.title)}
          </Heading>
          <Text variant="small" sx={{ mt: 2, mb: 3 }}>
            {defaultRenderer(newsletterBlock.subtitle?.json)}
          </Text>
          <iframe
            title="subscribe to newsletter form"
            src="https://www2.fauna.com/l/517431/2020-11-11/71k42s"
            sx={{
              width: '100%',
              height: '164px',
              '@media screen and (min-width: 754px)': {
                height: '66px'
              }
            }}
          />
        </Card>
      )}
    </>
  )
}

export default BlogPostFooter

/** @jsxRuntime classic */
/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import Link from 'components/primitives/link'
import ReactMarkdown from 'react-markdown'
import { Box, Container, Text, jsx } from 'theme-ui'
import CodeRenderer from './renderers/code'
import HeadingRenderer from './renderers/heading'
import ImageRenderer from './renderers/image'
import SimpleBar from 'simplebar-react'

type Props = Omit<
  React.ComponentPropsWithoutRef<typeof ReactMarkdown>,
  'renderers'
>

type MarkdownBodyProps = {
  isFullSize?: boolean
}

const MarkdownBody = ({ isFullSize, ...props }: Props & MarkdownBodyProps) => (
  <div
    sx={{ table: { variant: 'table', overflowX: 'auto' }, overflowX: 'auto' }}
    className="markdown-body"
  >
    <ReactMarkdown
      escapeHtml={false}
      renderers={{
        // text - Text rendered inside of other elements, such as paragraphs
        // break - Hard-break (<br>)
        // paragraph - Paragraph (<p>)
        // emphasis - Emphasis (<em>)
        // strong - Strong/bold (<strong>)
        // thematicBreak - Horizontal rule / thematic break (<hr>)
        // blockquote - Block quote (<blockquote>)
        // delete - Deleted/strike-through (<del>)
        // link - Link (<a>)
        // image - Image (<img>)
        // linkReference - Link (through a reference) (<a>)
        // imageReference - Image (through a reference) (<img>)
        // table - Table (<table>)
        // tableHead - Table head (<thead>)
        // tableBody - Table body (<tbody>)
        // tableRow - Table row (<tr>)
        // tableCell - Table cell (<td>/<th>)
        // list - List (<ul>/<ol>)
        // listItem - List item (<li>)
        // definition - Definition (not rendered by default)
        // heading - Heading (<h1>-<h6>)
        // inlineCode - Inline code (<code>)
        // code - Block of code (<pre><code>)
        heading: HeadingRenderer,
        paragraph: (props) => {
          const element = props.children[0]
          // Fix for invalid dom nesting with image renderer
          if (element.type === ImageRenderer) return { ...element }
          return (
            <Text
              as="div"
              {...props}
              sx={{
                fontSize: 2,
                lineHeight: 'large',
                fontWeight: 400,
                my: 24
              }}
            />
          )
        },
        blockquote: (props) => (
          <Text
            as="blockquote"
            {...props}
            sx={{
              fontStyle: 'italic',
              pl: 3,
              borderLeft: '6px solid',
              borderColor: 'border'
            }}
          />
        ),
        link: (props) => (
          <>
            <Link
              {...props}
              variant="accent"
              target="_blank"
              rel="noopener noreferrer"
            />
            <Link
              {...props}
              variant="accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span sx={{ ml: 1 }}>
                <i className="fa-regular fa-2xs fa-arrow-up-right-from-square"></i>
              </span>
            </Link>
          </>
        ),
        code: CodeRenderer,
        list: ({ ordered, children }) => (
          <Box
            as={ordered ? 'ol' : 'ul'}
            sx={{
              listStyle: ordered ? 'decimal' : 'disc',
              pl: '24px',
              lineHeight: 'large',
              margin: '24px 0'
            }}
          >
            {children}
          </Box>
        ),
        image: ImageRenderer,
        table: ({ children }) => (
          <Container
            variant={isFullSize ? 'container' : 'blogPost'}
            sx={{
              overflowX: 'auto',
              p: 0,
              border: '1px solid #CDCDD2',
              borderRadius: '8px'
            }}
          >
            <SimpleBar style={{ maxHeight: '500px' }}>
              <table
                sx={{
                  variant: 'table',
                  my: '0 !important',
                  width: '100%',
                  p: 3
                }}
              >
                {children}
              </table>
            </SimpleBar>
          </Container>
        )
      }}
      {...props}
    />
  </div>
)

export default MarkdownBody

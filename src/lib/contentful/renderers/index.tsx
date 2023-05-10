/** @jsx jsx */
import { jsx } from 'theme-ui'
import {
  documentToReactComponents,
  Options
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document, INLINES } from '@contentful/rich-text-types'
import Link from 'components/primitives/link'
import withHighlightedText from './highlight'
import { Maybe } from '../generated'
import ListItemComponent from '../../../components/primitives/list-item'
import { hasBulletPoint, getParagraph } from '../../util/link-utils'

const defaultRenderer = (
  doc: Document,
  light?: boolean,
  backgroundImageTitle?: Maybe<string>,
  noLinkIcon?: boolean
) => {
  const hasBlue = backgroundImageTitle?.includes('blue')
  const linkSx = { color: 'darkBackgroundAnchor' }

  const options: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => {
        const childrenAsStringList = children as string[]
        const hasBullet = childrenAsStringList.some((child) =>
          hasBulletPoint(child)
        )

        const arrowType = light ? 'light' : 'dark'
        const arrowSrc = `/images/misc/arrow-right-solid-${arrowType}.svg`
        const text = getParagraph(childrenAsStringList, hasBullet)

        if (hasBullet) {
          return <ListItemComponent text={text} arrowSrc={arrowSrc} />
        }

        return text
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return (
          <>
            <Link
              href={node.data?.uri}
              variant={light ? 'accentLightGray' : 'accent'}
              rel="noopener noreferrer"
              sx={hasBlue ? linkSx : {}}
            >
              {children}
            </Link>
            {!noLinkIcon && (
              <Link
                href={node.data?.uri}
                variant={light ? 'accentLightGray' : 'accent'}
                rel="noopener noreferrer"
                sx={hasBlue ? linkSx : {}}
              >
                <span sx={{ ml: 1 }}>
                  <i className="fa-regular fa-2xs fa-arrow-up-right-from-square"></i>
                </span>
              </Link>
            )}
          </>
        )
      }
    }
  }
  return documentToReactComponents(doc, options)
}

export type Description = string | null | undefined | { json: Document }

// To support rich text or string
function resolveDescription(description: Description) {
  if (!description) return null
  if (typeof description === 'string') return withHighlightedText(description)
  return defaultRenderer(description.json)
}

export default defaultRenderer
export { resolveDescription }

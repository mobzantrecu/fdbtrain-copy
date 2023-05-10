/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import SectionLayout from 'components/layouts/section'
import { ColumnFragment, SectionFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import Link from 'components/primitives/link'
import Marked from 'components/compound/marked'

import s from './table.module.scss'
import MarkdownBody from 'components/compound/markdown-body'
import { useMemo } from 'react'

type Props = {
  comingSoonText?: string
  isPricingPage?: boolean
} & SectionFragment
const TableSection = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId,
  actionsCollection,
  comingSoonText,
  markdownBody,
  textBelowSection,
  isPricingPage
}: Props) => {
  const columns = (blocksCollection?.items.filter(
    (b) => b?.__typename === 'Column'
  ) ?? []) as ColumnFragment[]
  const rows = columns[0].rowsCollection?.items.length

  const rowsLength = columns.reduce((maxLength, column) => {
    const newLength = column.rowsCollection?.items.length ?? 0
    return maxLength < newLength ? newLength : maxLength
  }, 0)

  const sectionLayoutExtraProps = isPricingPage
    ? { backgroundColor: '#F9F9F9' }
    : {}

  const sectionLayoutExtraStyles = isPricingPage
    ? {
        '@media screen and (min-width: 1100px)': {
          backgroundColor: 'gray2',
          py: ['64px', null, '50px'],
          maxWidth: '1200px',
          display: 'flex',
          px: 0,
          margin: 'auto',
          alignItems: 'center',
          '&>div:nth-of-type(1)': {
            width: 473,
            marginRight: 'auto',

            '&>h2:nth-of-type(1)': {
              textAlign: 'start'
            },
            '&>div:nth-of-type(1)': {
              textAlign: 'start'
            }
          },
          '&>div:nth-of-type(2)': {
            display: 'none'
          },
          '&>div:nth-of-type(3)': {
            margin: '0px'
          }
        }
      }
    : {
        backgroundColor: 'gray2',
        py: ['64px', null, '50px'],
        '&>div:nth-of-type(1)': {
          maxWidth: '771px',
          margin: 'auto',
          marginBottom: '40px'
        }
      }

  const hasActions = useMemo(() => !!actionsCollection?.items.length, [
    actionsCollection?.items.length
  ])

  return (
    <SectionLayout
      anchorId={anchorLinkId}
      title={{ text: title }}
      subtitle={subtitle?.json}
      largeWidth
      {...sectionLayoutExtraProps}
      pushSx={sectionLayoutExtraStyles}
    >
      {markdownBody ? (
        <MarkdownBody source={markdownBody} isFullSize />
      ) : (
        <div
          sx={{
            overflowX: 'auto',
            maxWidth: columns.length === 2 && rows === 5 ? '605px' : '1200px',
            margin: 'auto',
            boxShadow: 'card',
            borderRadius: '8px'
          }}
        >
          <table
            sx={{
              variant: 'table',
              borderCollapse: 'separate',
              borderSpacing: '0 5px',
              padding: '15px 15px',
              margin: 'auto',
              minWidth: columns.length === 2 ? '605px' : '1200px'
            }}
          >
            <thead>
              <tr>
                {columns.map((c) => {
                  return (
                    <th
                      key={c.head}
                      sx={{
                        width: c.widthPercentage
                          ? `${c.widthPercentage}%`
                          : undefined
                      }}
                    >
                      {c.head}
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {[...Array(rowsLength).keys()].map((n) => {
                return (
                  <tr key={n}>
                    {columns.map((c) => {
                      const row = c.rowsCollection?.items[n]
                      const asMarkdown =
                        row?.__typename === 'DescriptionMarkdown' ? row : null
                      const asRichText =
                        row?.__typename === 'Description' ? row : null

                      if (asRichText) {
                        return (
                          <td key={`${c.head}-row-${n}`}>
                            {defaultRenderer(asRichText.text?.json)}
                          </td>
                        )
                      } else if (asMarkdown) {
                        return (
                          <td key={`${c.head}-row-${n}`}>
                            <Marked className={s.markdown}>
                              {asMarkdown.description ?? ''}
                            </Marked>
                          </td>
                        )
                      }
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
      {hasActions && (
        <div sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          {actionsCollection?.items.map((action) => (
            <Link
              {...action}
              key={action?.href}
              sx={{ ':not(:last-of-type)': { mr: 3 } }}
              variant="accent"
              arrow
            />
          ))}
        </div>
      )}
      {comingSoonText && (
        <Text variant="small" sx={{ margin: 'auto', maxWidth: '1200px' }}>
          {comingSoonText}
        </Text>
      )}
      {textBelowSection && (
        <Text
          variant="small"
          sx={{
            maxWidth: '1200px',
            lineHeight: 'heading',
            margin: 'auto'
          }}
        >
          {textBelowSection && <MarkdownBody source={textBelowSection} />}
        </Text>
      )}
    </SectionLayout>
  )
}

export default TableSection

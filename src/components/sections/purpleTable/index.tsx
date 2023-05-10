/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import Image from 'next/image'
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
const PurpleTableSection = ({
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
        py: ['64px', null, '90px'],
        px: ['32px', '100px', '100px', '192px', '192px'],
        paddingBottom: '10px !important',
        '&>div:nth-of-type(1)': {
          margin: 'auto',
          marginBottom: '40px'
        }
      }

  const hasActions = useMemo(() => !!actionsCollection?.items.length, [
    actionsCollection?.items.length
  ])

  const getIconUrl = (text: any) => {
    if (text.text) {
      const {
        json: { content }
      } = text.text

      const icon = content[0].content[0].value
      if (icon == '✅') {
        return '/images/misc/check.svg'
      }
      if (icon == '❌') {
        return '/images/misc/xmark.svg'
      }
    }
    return null
  }

  const trs = [...Array(rowsLength).keys()]
  return (
    <SectionLayout
      anchorId={anchorLinkId}
      title={{ text: title }}
      subtitle={subtitle?.json}
      {...sectionLayoutExtraProps}
      pushSx={sectionLayoutExtraStyles}
    >
      {markdownBody ? (
        <MarkdownBody source={markdownBody} isFullSize />
      ) : (
        <div
          sx={{
            overflowX: 'auto',
            maxWidth: columns.length === 2 && rows === 5 ? '605px' : '1172px',
            mx: 'auto',
            boxShadow: 'card',
            borderRadius: '8px'
          }}
        >
          <table
            sx={{
              variant: 'table',
              minWidth: columns.length === 2 ? '605px' : '1172px',
              position: 'relative'
            }}
          >
            <thead sx={{ background: '#6742F1' }}>
              <tr>
                {columns.map((c) => {
                  return (
                    <th
                      key={c.head}
                      sx={{
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        color: 'white !important',
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
            <tbody style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  height: 'calc(100% - 60px)',
                  background: 'white',
                  width: '30px',
                  top: '60px'
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: 'calc(100% - 60px)',
                  background: 'white',
                  width: '30px',
                  top: '60px',
                  left: '1141px'
                }}
              ></div>
              {trs.map((n, trI) => {
                return (
                  <tr key={n}>
                    {columns.map((c, i) => {
                      const isGrey = i % 2 !== 0 && i !== 0
                      const row = c.rowsCollection?.items[n]
                      const asMarkdown =
                        row?.__typename === 'DescriptionMarkdown' ? row : null
                      const asRichText =
                        row?.__typename === 'Description' ? row : null

                      const imageUrl = getIconUrl(asRichText)
                      if (asRichText) {
                        return (
                          <td
                            style={{
                              fontSize: i === 0 ? '17px' : '25px',
                              paddingTop: trI === 0 ? '30px' : '10px',
                              paddingLeft: i === 0 ? '30px' : 'initial',
                              fontWeight: 600,
                              paddingBottom:
                                trI === trs.length - 1 ? '30px' : '10px',
                              textAlign: i === 0 ? 'left' : 'center',
                              background: isGrey ? '#F9F9F9' : 'inherit'
                            }}
                            key={`${c.head}-row-${n}`}
                          >
                            {imageUrl ? (
                              <div
                                sx={{
                                  opacity: imageUrl.includes('xmark') ? 0.3 : 1
                                }}
                              >
                                <Image
                                  height={28}
                                  width={28}
                                  src={imageUrl}
                                  alt="check"
                                />
                              </div>
                            ) : (
                              defaultRenderer(asRichText.text?.json)
                            )}
                          </td>
                        )
                      } else if (asMarkdown) {
                        return (
                          <td
                            style={{
                              textAlign: trI === 0 ? 'left' : 'center',
                              background: isGrey ? '#F9F9F9' : 'inherit'
                            }}
                            key={`${c.head}-row-${n}`}
                          >
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
        <Text variant="small" sx={{ margin: 'auto', maxWidth: '1172px' }}>
          {comingSoonText}
        </Text>
      )}
      {textBelowSection && (
        <Text
          variant="small"
          sx={{
            maxWidth: '1172px',
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

export default PurpleTableSection

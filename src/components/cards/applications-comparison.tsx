/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, Card, Heading, Text } from 'theme-ui'
import { Fragment } from 'react'
import { ListBlockFragment } from 'lib/contentful/generated'
import defaultRenderer from 'lib/contentful/renderers'
import getIcon from 'lib/get-icon'

type Props = {
  blocks: (ListBlockFragment & { isPositive: boolean })[]
}

const ApplicationsComparisonCard = ({ blocks }: Props) => (
  <Card
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      p: 5,
      flexDirection: ['column', null, 'row']
    }}
  >
    {blocks.map((item, i) => (
      <Fragment key={item.title as any}>
        <div sx={{ textAlign: 'center', maxWidth: 'lg', mx: 'auto' }}>
          <Heading sx={{ fontWeight: 600, fontSize: 3, mb: 3 }}>
            {item.title}
          </Heading>
          <Text variant="small">{defaultRenderer(item.subtitle?.json)}</Text>
          <div sx={{ mb: [3, null, 5], mt: 3 }}>
            {item.listItems?.map((listItem) => {
              const Icon = getIcon(item.icon)
              return (
                <Text
                  key={listItem as any}
                  as="span"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    ':not(:last-of-type)': { mr: 3 }
                  }}
                  variant="small"
                >
                  <i
                    sx={{
                      mr: 2,
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.isPositive ? 'green' : 'red'
                    }}
                  >
                    {Icon && <Icon />}
                  </i>
                  {listItem}
                </Text>
              )
            })}
          </div>
          <div
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img src={item.media?.url ?? ''} alt={item.media?.title ?? ''} />
          </div>
        </div>
        {i !== blocks.length - 1 && (
          <div
            sx={{
              border: 'dashed 1px',
              borderColor: 'primary',
              borderImage: 'url("/images/misc/border.png") 2 round',
              mx: [0, null, 40],
              my: [40, null, 0]
            }}
          />
        )}
      </Fragment>
    ))}
  </Card>
)

export default ApplicationsComparisonCard

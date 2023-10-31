/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx } from 'theme-ui'
import ApplicationsComparisonCard from 'components/cards/applications-comparison'
import SectionLayout from 'components/layouts/section'
import Link from 'components/primitives/link'
import { ListBlockFragment, SectionFragment } from 'lib/contentful/generated'

const ApplicationsComparisonSection = ({
  title,
  subtitle,
  actionsCollection,
  blocksCollection,
  anchorLinkId
}: SectionFragment) => {
  const listBlocks = (blocksCollection?.items.filter(
    (b) => b?.__typename === 'ListBlock'
  ) ?? []) as ListBlockFragment[]

  return (
    <SectionLayout
      anchorId={anchorLinkId}
      title={{ text: title }}
      subtitle={subtitle?.json}
    >
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ...(!title && !subtitle?.json ? { pt: 0 } : undefined)
        }}
      >
        <ApplicationsComparisonCard
          blocks={listBlocks.map((b, i) =>
            i === 0 ? { ...b, isPositive: false } : { ...b, isPositive: true }
          )}
        />
        {actionsCollection?.items[0] && (
          <Link
            sx={{ display: 'block', mt: 4 }}
            variant="accent"
            arrow
            {...actionsCollection?.items[0]}
          />
        )}
      </div>
    </SectionLayout>
  )
}

export default ApplicationsComparisonSection

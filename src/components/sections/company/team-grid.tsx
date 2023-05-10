/** @jsx jsx */

import TeamMemberCard from 'components/cards/team-member'
import SectionLayout from 'components/layouts/section'
import { SectionFragment } from 'lib/contentful/generated'
import { Grid, jsx } from 'theme-ui'

const TeamGridSection = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId
}: SectionFragment) => {
  return (
    <div>
      <SectionLayout
        anchorId={anchorLinkId}
        title={{ text: title }}
        subtitle={subtitle?.json}
        isHero
        pushSx={{
          '&>div>h1': {
            fontWeight: 600
          }
        }}
      >
        <Grid
          variant="three"
          sx={{ mx: ['0', '25px', '50px', '50px', '155px'] }}
        >
          {blocksCollection?.items.map((block) => {
            if (block?.__typename === 'Person') {
              return <TeamMemberCard key={block.name} {...block} />
            }
          })}
        </Grid>
      </SectionLayout>
    </div>
  )
}

export default TeamGridSection

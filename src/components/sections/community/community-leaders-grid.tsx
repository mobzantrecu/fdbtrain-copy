/** @jsx jsx */
import { Grid, jsx } from 'theme-ui'
import SectionLayout from 'components/layouts/section'
import Link from 'components/primitives/link'
import { PersonFragment, SectionFragment } from 'lib/contentful/generated'
import CommunityLeaderCard from 'components/cards/community-leader'

const CommunityLeadersGridSection = ({
  title,
  subtitle,
  actionsCollection,
  blocksCollection,
  anchorLinkId
}: SectionFragment) => {
  const people = (blocksCollection?.items.filter(
    (b) => b?.__typename === 'Person'
  ) ?? []) as PersonFragment[]

  return (
    <SectionLayout
      anchorId={anchorLinkId}
      title={{ text: title }}
      subtitle={subtitle?.json}
      pushSx={{ backgroundColor: 'gray2' }}
      largeWidth
    >
      <Grid
        variant="three"
        sx={{
          mx: '71px',
          columnGap: '36px',
          '@media screen and (max-width: 425px)': {
            mx: '0',
            width: '100%'
          }
        }}
      >
        {people.map((person, i) => (
          <CommunityLeaderCard {...person} key={`${person.name}-${i}`} />
        ))}
      </Grid>
      {actionsCollection?.items[0] && (
        <Link
          sx={{ display: 'block', mt: 4 }}
          variant="accent"
          arrow
          {...actionsCollection?.items[0]}
        />
      )}
    </SectionLayout>
  )
}

export default CommunityLeadersGridSection

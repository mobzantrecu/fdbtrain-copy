import BoardMemberCard from 'components/cards/board-member'
import SectionLayout from 'components/layouts/section'
import { SectionFragment } from 'lib/contentful/generated'
import { Grid } from 'theme-ui'

const BoardMembersGridSection = ({
  title,
  subtitle,
  blocksCollection,
  anchorLinkId
}: SectionFragment) => {
  return (
    <SectionLayout
      anchorId={anchorLinkId}
      title={{ text: title }}
      subtitle={subtitle?.json}
      isHero
      pushSx={{
        backgroundColor: 'gray2',
        '&>div>h1': {
          fontWeight: 600
        }
      }}
    >
      <Grid variant="four" sx={{ mx: ['0', '25px', '50px', '50px', '150px'] }}>
        {blocksCollection?.items.map((block) => {
          if (block?.__typename === 'Person') {
            return <BoardMemberCard key={block.name} {...block} />
          }
        })}
      </Grid>
    </SectionLayout>
  )
}

export default BoardMembersGridSection

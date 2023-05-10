import EventCard from 'components/cards/event'
import SectionLayout from 'components/layouts/section'
import { EventFragment } from 'lib/contentful/generated'
import { Grid } from 'theme-ui'

type Props = {
  upcomingEvents: EventFragment[]
  pastEvents: EventFragment[]
}

const EventsGridSection = ({ upcomingEvents, pastEvents }: Props) => {
  return (
    <>
      {/* Upcoming events section */}
      <SectionLayout pushSx={{ pt: 0 }}>
        <Grid
          variant="two"
          sx={{
            mx: 'auto',
            width: 'fit-content',
            rowGap: 5,
            columnGap: 4
          }}
        >
          {/* Dispaly all upcoming events  */}
          {upcomingEvents.map((item) => (
            <EventCard key={item?.eventTitle} isPast={false} {...item} />
          ))}
        </Grid>
      </SectionLayout>

      {/* Past events section */}
      <SectionLayout title={{ text: 'Past Events' }} pushSx={{ pt: 0 }}>
        <Grid
          variant="three"
          sx={{
            mx: 'auto',
            width: 'fit-content',
            rowGap: 5,
            columnGap: 4
          }}
        >
          {/* Display all past events */}
          {pastEvents.map((item) => (
            <EventCard key={item?.eventTitle} isPast={true} {...item} />
          ))}
        </Grid>
      </SectionLayout>
    </>
  )
}
export default EventsGridSection

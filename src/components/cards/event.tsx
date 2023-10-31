/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
React

import { jsx, Box, Heading, Text, Flex } from 'theme-ui'
import Link from 'components/primitives/link'
import defaultRenderer from 'lib/contentful/renderers'
import CardImage from 'components/primitives/card-cover'
import { GoCalendar, GoLocation } from 'react-icons/go'
import { EventFragment } from 'lib/contentful/generated'

type Props = EventFragment & { isPast: boolean }

const formatEventDates = (eventStartDate: string, eventEndDate: string) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  // Get only the date, ignore the timestamp, into a string array
  let tempArr = eventStartDate.slice(0, 10).split('-')

  // convert string array to number array
  const startDateArr = tempArr.map((i) => Number(i))

  // for end date also ignore the timestamp, get date into a string array
  tempArr = eventEndDate.slice(0, 10).split('-')

  // convert string array to number array
  const endDateArr = tempArr.map((i) => Number(i))
  /*
    Fomatting should be
    Different Years -> Dec 31st, 2021 - Jan 01st, 2021
    Same Year,  -> Aug 29th - Sep 01st, 2021
    Same Month ->  Aug 19 - 21, 2021
  
    Month Name : months[(startDateArr[1] - 1)]
    */

  // Check if the start and end event year is the sdifferentame
  if (endDateArr[0] != startDateArr[0]) {
    return (
      // start Date format - "DD MMM, YYYY"
      startDateArr[2] +
      ' ' +
      months[startDateArr[1] - 1] +
      ', ' +
      startDateArr[0] +
      ' - ' +
      // End Date format - "DD MMM, YYYY"
      endDateArr[2] +
      ' ' +
      months[endDateArr[1] - 1] +
      ', ' +
      endDateArr[0]
    )
  }
  // Check if Month is the same
  if (endDateArr[1] == startDateArr[1]) {
    return (
      // start Date format - "DD "
      startDateArr[2] +
      ' - ' +
      // End Date format - "DD MMM, YYYY"
      endDateArr[2] +
      ' ' +
      months[endDateArr[1] - 1] +
      ', ' +
      endDateArr[0]
    )
  }
  // At this point the month is diff and year is the same.
  return (
    // start Date format - "DD MMM"
    startDateArr[2] +
    ' ' +
    months[startDateArr[1] - 1] +
    ' - ' +
    // End Date format - "DD MMM, YYYY"
    endDateArr[2] +
    ' ' +
    months[endDateArr[1] - 1] +
    ', ' +
    endDateArr[0]
  )
}

const EventCard = ({
  eventTitle,
  eventDescription,
  eventStartDate,
  eventEndDate,
  eventLocation,
  eventUrl,
  featuredImage,
  isPast
}: Props) => (
  <Link
    href={eventUrl ? eventUrl : undefined}
    as={eventUrl ? 'a' : 'div'}
    variant="cards.primary"
    sx={{
      maxWidth: 600,
      p: 0,
      display: 'flex',
      flexDirection: 'column',
      variant: 'gradients.eventCard',
      '&:hover': { boxShadow: 'cardHover' }
    }}
  >
    <CardImage
      ratio={800 / 333}
      image={featuredImage}
      pushImageSx={{ objectFit: 'cover', bg: 'text' }}
    />

    <Flex
      sx={
        {
          py: 40,
          p: 24,
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%'
        } as any
      }
    >
      <Box>
        {eventTitle && (
          <Heading
            as="h4"
            variant="heading.base"
            sx={{ mb: 3, fontSize: '20px' }}
          >
            {eventTitle}
          </Heading>
        )}

        {eventDescription && (
          <Text variant="small" sx={{ mt: 3, mb: 4 }}>
            {defaultRenderer(eventDescription.json)}
          </Text>
        )}
      </Box>
      {
        /* If the event is in Past do not display the dates and location details. */
        !isPast == true && (
          <Box sx={{ mb: 15 }}>
            <Box
              sx={{
                width: ['100%', 'fit-content'],
                paddingBottom: ['15px', '0'],
                paddingRight: ['0', '40px'],
                display: ['block', 'inline-block']
              }}
            >
              <i
                sx={{
                  mt: '2px',
                  display: 'inline-block',
                  verticalAlign: 'text-top'
                }}
              >
                <GoCalendar />
              </i>
              <Text
                sx={{
                  fontSize: '14px',
                  px: '10px',
                  display: 'inline-block'
                }}
              >
                {eventStartDate &&
                  formatEventDates(eventStartDate, eventEndDate)}
              </Text>
            </Box>
            <Box
              sx={{
                width: ['100%', 'fit-content'],
                display: ['block', 'inline-block']
              }}
            >
              <i
                sx={{
                  mt: '2px',
                  display: 'inline-block',
                  verticalAlign: 'text-top'
                }}
              >
                <GoLocation />
              </i>
              <Text
                sx={{
                  fontSize: '14px',
                  px: '10px',
                  display: 'inline-block'
                }}
              >
                {eventLocation}
              </Text>
            </Box>

            <Box
              sx={{
                width: '100%'
              }}
            >
              <Text
                sx={{
                  color: 'primaryLight',
                  mt: 3,
                  fontWeight: 700,
                  textAlign: 'right'
                }}
              >
                Learn More {'->'}
              </Text>
            </Box>
          </Box>
        )
      }
    </Flex>
  </Link>
)

export default EventCard

import { Grid } from '@mantine/core'
import { Calendar } from '@mantine/dates'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import { EventCard } from './EventCard.tsx'
import styles from '@/patina/community/events/MainSection.module.css'

type Event = {
  name: string
  message: string
  location: string
  date: string
}

/**
 * Convert inputted date as a string in local EST timezone ISO format to a Date object
 * representing that inputted day at midnight 00:00:00 in EST.
 */
function convertToDateObject(inputtedDate: string) {
  const timeSuffix = 'T00:00:00.000'
  return new Date(inputtedDate + timeSuffix)
}

/**
 * Component rendering a calendar on the left and events on the right.
 */
export function MainSection() {
  const query = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const response = await fetch('/api/events')
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    },
  })

  let allEventDates = []
  if (query.status === 'success') {
    allEventDates = query.data.events.map((event: Event) =>
      convertToDateObject(event.date),
    )
  }

  const handleDate = (givenDate: Date) => {
    const givenDay = givenDate.getDate()
    if (
      allEventDates.some(
        (eventDate: Date) =>
          eventDate.toISOString() === givenDate.toISOString(),
      )
    ) {
      return <div className={styles.calendarCellHighlight}>{givenDay}</div>
    }
    return <div>{givenDay}</div>
  }

  return (
    <Grid grow>
      <Grid.Col span={4}>
        <Calendar
          classNames={{
            calendarHeader: styles.calendarHeader,
            calendarHeaderLevel: styles.calendarHeaderText,
            yearsList: styles.calendarBody,
            monthsList: styles.calendarBody,
            month: styles.calendarBody, //body of calendar at month view
            monthCell: styles.calendarCell, // each cell within month view
          }}
          hideOutsideDates
          previousIcon={<IconChevronLeft size={24} />}
          nextIcon={<IconChevronRight size={24} />}
          renderDay={(date) => handleDate(date)}
        />
      </Grid.Col>
      <Grid.Col span={8}>
        {query.status === 'success' && (
          <div>
            {query.data.events.map((event: Event, index: number) => (
              <EventCard
                key={index}
                name={event.name}
                location={event.location}
                details={event.message}
                actualDate={convertToDateObject(event.date)}
              />
            ))}
          </div>
        )}
      </Grid.Col>
    </Grid>
  )
}

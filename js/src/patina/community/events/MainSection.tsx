import { Grid } from '@mantine/core'
import { Calendar } from '@mantine/dates'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { EventCard } from './EventCard.tsx'
import styles from '@/patina/community/events/MainSection.module.css'

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
  const eventsData = [
    {
      name: 'Event Name',
      location: 'Location',
      details:
        'Lorem ipsoiosafjsaofjsaofijsfojaiofmefoijs jlzkf jlkafj oiejf oj afd ldflk pr',
      inputtedDate: '2024-07-08',
    },
    {
      name: 'Event Name',
      location: 'Location',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      inputtedDate: '2024-07-15',
    },
  ]
  const allEventDates = eventsData.map((event) =>
    convertToDateObject(event.inputtedDate),
  )
  const handleDate = (givenDate: Date) => {
    const givenDay = givenDate.getDate()
    if (
      allEventDates.some(
        (eventDate) => eventDate.toISOString() === givenDate.toISOString(),
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
        {eventsData.map((event) => (
          <EventCard
            name={event.name}
            location={event.location}
            details={event.details}
            actualDate={convertToDateObject(event.inputtedDate)}
          />
        ))}
      </Grid.Col>
    </Grid>
  )
}

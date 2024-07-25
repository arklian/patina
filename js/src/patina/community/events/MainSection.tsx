import { Grid } from '@mantine/core'
import { Calendar } from '@mantine/dates'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { EventCard } from './EventCard.tsx'
import styles from '@/patina/community/events/MainSection.module.css'

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
      date: '8/Monday',
    },
    {
      name: 'Event Name',
      location: 'ALASKA NEBRASKA',
      details: 'i live in alaska nebraska',
      date: '15/Tuesday',
    },
  ]

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
        />
      </Grid.Col>
      <Grid.Col span={8}>
        {eventsData.map((event) => (
          <EventCard
            name={event.name}
            location={event.location}
            details={event.details}
            date={event.date}
          />
        ))}
      </Grid.Col>
    </Grid>
  )
}

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
      date: new Date('2024-7-8'),
    },
    {
      name: 'Event Name',
      location: 'Location',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
      date: new Date('2024-7-15'),
    },
  ]
  const allDates = eventsData.map((event) => event.date)
  const handleDate = (date: Date) => {
    const givenDay = date.getDate()
    let match = false
    allDates.forEach((dateObject) => {
      if (dateObject.toLocaleDateString() === date.toLocaleDateString()) {
        match = true
      }
    })
    if (match) {
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
            date={event.date}
          />
        ))}
      </Grid.Col>
    </Grid>
  )
}

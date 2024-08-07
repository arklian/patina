import { Grid } from '@mantine/core'
import { Calendar } from '@mantine/dates'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import dayjs from 'dayjs'
import { EventCard } from './EventCard.tsx'
import styles from '@/patina/pages/community/events/MainSection.module.css'

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
  return dayjs(inputtedDate).toDate()
}

/**
 * Component rendering a calendar on the left and events on the right.
 */
export function MainSection() {
  const [currentMonth, setCurrentMonth] = useState(0)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
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

  const filteredEvents = query.data?.events.filter(
    (event: Event) => dayjs(event.date).get('month') === currentMonth,
  )

  const allEventDates = filteredEvents?.map((event: Event) =>
    convertToDateObject(event.date),
  )

  const handleDate = (givenDate: Date) => {
    if (givenDate.getDate() === 15) {
      setCurrentMonth(givenDate.getMonth())
    }
    const givenDay = givenDate.getDate()
    if (
      allEventDates?.some(
        (eventDate: Date) =>
          eventDate.toISOString() === givenDate.toISOString(),
      )
    ) {
      return <div className={styles.calendarCellHighlight}>{givenDay}</div>
    }
    return <div>{givenDay}</div>
  }

  return (
    <Grid grow className={styles.grid}>
      <Grid.Col span={4}>
        <Calendar
          classNames={{
            calendarHeader: styles.calendarHeader,
            calendarHeaderLevel: styles.calendarHeaderText,
            yearsList: styles.calendarBody,
            yearsListCell: styles.calendarCell,
            monthsList: styles.calendarBody,
            monthsListCell: styles.calendarCell,
            month: styles.calendarBody, //body of calendar at month view
            monthCell: styles.calendarCell, // each cell within month view
          }}
          hideOutsideDates
          maxLevel="month"
          previousIcon={<IconChevronLeft size={24} />}
          nextIcon={<IconChevronRight size={24} />}
          getDayProps={(date) => ({
            onClick: () => {
              if (dayjs(date).isSame(dayjs(selectedDate))) {
                setSelectedDate(null)
              } else setSelectedDate(date)
            },
          })}
          onNextMonth={() => setSelectedDate(null)}
          onPreviousMonth={() => setSelectedDate(null)}
          renderDay={(date: Date) => handleDate(date)}
        />
      </Grid.Col>
      <Grid.Col span={8}>
        {filteredEvents
          ?.filter(
            (event: Event) =>
              dayjs(event.date).isSame(dayjs(selectedDate)) ||
              selectedDate === null,
          )
          .sort((a: Event, b: Event) => a.date.localeCompare(b.date))
          .map((event: Event, index: number) => (
            <EventCard
              key={index}
              name={event.name}
              location={event.location}
              details={event.message}
              actualDate={convertToDateObject(event.date)}
            />
          ))}
      </Grid.Col>
    </Grid>
  )
}

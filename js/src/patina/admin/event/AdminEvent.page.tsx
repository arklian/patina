import { useState } from 'react'
import {
  Button,
  Space,
  Stack,
  Textarea,
  TextInput,
  Title,
  Container,
} from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { DatePickerInput } from '@mantine/dates'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import styles from '@/patina/admin/event/AdminEvent.module.css'
import { EditEvent } from './EditEvent.tsx'

export function AdminEventPage() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [location, setLocation] = useState('')
  const [date, setDate] = useState<Date | null>()
  const [eventId, setEventId] = useState('')

  const handleAdd = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const reformattedDate = date?.toISOString().substring(0, 10)
    const formData = { name, message, location, date: reformattedDate }
    try {
      const response = await fetch('/api/admin/events/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ event: formData }),
      })
      if (response.ok) {
        notifications.show({
          title: 'Event Submitted',
          message: 'Your Event titled: was successfully submitted!',
          color: 'green',
          position: 'top-right',
        })
      } else {
        console.error('HTTP error:', response.statusText)
        // Handle the HTTP error response here
      }
    } catch (error) {
      console.error('Fetch error:', error)
    }
  }

  const handleDelete = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    try {
      const response = await fetch(`/api/admin/event/delete/${eventId}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        notifications.show({
          title: 'Event Deleted',
          message: 'Your Event titled: was successfully Deleted!',
          color: 'green',
          position: 'top-right',
        })
      } else {
        console.error('HTTP error:', response.statusText)
        // Handle the HTTP error response here
      }
    } catch (error) {
      console.error('Fetch error:', error)
    }
  }

  return (
    <Container>
      <Title>{'Events'}</Title>
      <form onSubmit={handleAdd}>
        <Stack>
          <Title order={3}>{'Add Event'}</Title>
          <TextInput
            label="Name"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
            required
          />
          <TextInput
            label="Location"
            value={location}
            onChange={(event) => setLocation(event.currentTarget.value)}
            required
          />
          <DatePickerInput
            label="Pick date"
            value={date}
            onChange={setDate}
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
            previousIcon={<IconChevronLeft size={24} />}
            nextIcon={<IconChevronRight size={24} />}
            required
          />
          <Textarea
            label={'Message'}
            value={message}
            onChange={(event) => setMessage(event.currentTarget.value)}
            minRows={2}
            autosize
            required
          />
          <Button type="submit">{'Add'}</Button>
        </Stack>
      </form>
      <Space h="xl" />
      <form onSubmit={handleDelete}>
        <Stack>
          <Title order={3}>{'Delete Event'}</Title>
          <TextInput
            label="Event ID"
            value={eventId}
            onChange={(event) => setEventId(event.currentTarget.value)}
            required
          />
          <Button type="submit">{'Delete'}</Button>
        </Stack>
      </form>
      <EditEvent />
    </Container>
  )
}

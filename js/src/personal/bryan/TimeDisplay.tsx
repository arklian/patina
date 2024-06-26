import { useMemo, useState, useEffect } from 'react'
import { Title } from '@mantine/core'
import styles from './Bryan.module.css'

/** Component to display current time and day */
export function TimeDisplay() {
  const months = [
    'Jan.',
    'Feb.',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug.',
    'Sept',
    'Oct.',
    'Nov.',
    'Dec',
  ]
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const [date, setDate] = useState(new Date())
  // Refresh the time every second to keep it at the current time.
  useEffect(() => {
    setInterval(() => setDate(new Date()), 250)
  })

  const Hours = useMemo(() => {
    const hour = date.getHours()
    if (hour > 12) {
      if (hour < 22) {
        return '0'.concat(String(hour - 12))
      }
      return String(hour - 12)
    }
    if (hour === 12) {
      return 12
    }
    if (hour === 0) {
      return 12
    }
    if (hour < 10) {
      return '0'.concat(String(hour))
    }
    return String(hour)
  }, [date])
  const Minutes = useMemo(() => {
    const minute = date.getMinutes()
    if (minute < 10) {
      return '0'.concat(String(minute))
    }
    return String(minute)
  }, [date])
  const AM = useMemo(() => {
    if (date.getHours() < 12) return 'AM'
    return 'PM'
  }, [date])
  const Colon = useMemo(() => {
    if (date.getSeconds() % 2 === 0) return ' '
    return ':'
  }, [date])

  return (
    <Title
      className={styles.title}
      ta="center"
      mt={50}
    >
      {`${Hours}${Colon}${Minutes}${AM} EST`}
      <br />
      {'Today is '}
      <br />
      {`${weekday[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`}
    </Title>
  )
}

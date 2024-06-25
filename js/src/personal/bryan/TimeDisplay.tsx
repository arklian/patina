import { useMemo, useState, useEffect } from 'react'
import { Title } from '@mantine/core'
import styles from './Bryan.module.css'

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
  const [date, setDate] = useState(new Date())
  // Refresh the time every second to keep it at the current time.
  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000)
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
  //rewrite away from function
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

  return (
    <Title
      className={styles.title}
      ta="center"
      mt={50}
    >
      {`${Hours}:${Minutes}${AM} EST`}
      <br />
      {months[date.getMonth()]} {date.getDate()}
    </Title>
  )
}

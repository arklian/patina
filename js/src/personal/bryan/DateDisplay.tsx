import { useState, useEffect } from 'react'
import { Title } from '@mantine/core'
import styles from './Bryan.module.css'

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
/** Component to display current day */
export function DateDisplay() {
  const [date, setDate] = useState(new Date())
  // Refresh the time every minute to maintain current date.
  useEffect(() => {
    setInterval(() => setDate(new Date()), 60000)
  })

  return (
    <>
      <Title
        className={styles.title2}
        component="span"
        ta="center"
      >
        {'Today is '}
      </Title>
      <Title
        className={styles.title}
        ta="center"
      >
        {`${weekday[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}`}
      </Title>
    </>
  )
}

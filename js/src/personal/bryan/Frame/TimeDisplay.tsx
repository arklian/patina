import { useMemo, useState, useEffect } from 'react'
import { Title, Space } from '@mantine/core'
import styles from '@/personal/bryan/Bryan.module.css'

/** Component to display current time */
export function TimeDisplay() {
  const [date, setDate] = useState(new Date())
  // Refresh the time every quarter second to keep it at the current time.
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
  const colon = date.getSeconds() % 2 === 0 ? ' ' : ':'

  return (
    <Title
      className={styles.title}
      ml="5rem"
    >
      {`${Hours}${colon}${Minutes}${AM} EST`}
      <Space h="xs" />
    </Title>
  )
}

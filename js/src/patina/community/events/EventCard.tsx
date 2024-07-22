import { Text, Stack, Group } from '@mantine/core'
import styles from './EventCard.module.css'

type EventCardProps = {
  name: string
  location: string
  details: string
  date: string
}
/**
 * Card component displaying each event's info, including name, location, details, all as strings,
 * and a date in format of "day/DayOfWeek" (ex: "8/Monday")
 */
export function EventCard({ name, location, details, date }: EventCardProps) {
  return (
    <div className={styles.eventCard}>
      <Stack gap={0}>
        <Group justify={'space-between'}>
          <div>
            <Stack gap={0}>
              <Text className={styles.title}>{name}</Text>
              <Text>{location}</Text>
            </Stack>
          </div>
          <div>
            <Text>{date}</Text>
          </div>
        </Group>
        <Text>{details}</Text>
      </Stack>
    </div>
  )
}

import { Text, Stack, Group } from '@mantine/core'
import styles from './EventCard.module.css'

type EventCardProps = {
  name: string
  location: string
  details: string
  date: Date
}
/**
 * Card component displaying each event's info, including name, location, details, date.
 */
export function EventCard({ name, location, details, date }: EventCardProps) {
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri']
  return (
    <div className={styles.eventCard}>
      <Stack gap={0}>
        <Group justify={'space-between'}>
          <Stack gap={0}>
            <Text className={styles.title}>{name}</Text>
            <Text>{location}</Text>
          </Stack>
          <Stack gap={0} align={'center'}>
            <Text className={styles.dayHighlight}>{date.getDate()}</Text>
            <Text className={styles.dayDim}>{daysOfWeek[date.getDay()]}</Text>
          </Stack>
        </Group>
        <Text>{details}</Text>
      </Stack>
    </div>
  )
}

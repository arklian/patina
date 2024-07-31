import { Text, Stack, Group } from '@mantine/core'
import styles from './EventCard.module.css'

type EventCardProps = {
  name: string
  location: string
  details: string
  actualDate: Date
}
/**
 * Card component displaying each event's info, including name, location, details, date.
 */
export function EventCard({
  name,
  location,
  details,
  actualDate,
}: EventCardProps) {
  const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
  return (
    <div className={styles.eventCard}>
      <Stack gap={0}>
        <Group justify={'space-between'}>
          <Stack gap={0}>
            <Text className={styles.title}>{name}</Text>
            <Text>{location}</Text>
          </Stack>
          <Stack gap={0} align={'center'}>
            <Text className={styles.dayHighlight}>{actualDate.getDate()}</Text>
            <Text className={styles.dayDim}>
              {daysOfWeek[actualDate.getDay()]}
            </Text>
          </Stack>
        </Group>
        <Text>{details}</Text>
      </Stack>
    </div>
  )
}

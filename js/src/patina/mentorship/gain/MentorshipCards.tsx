import { Card, Image, Text } from '@mantine/core'
import styles from './MentorshipCards.module.css'

// Card component for Mentorship
export function MentorshipCards() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text className={styles.title}>{'Norway Fjord Adventures'}</Text>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>
      <Text size="sm" ta={'center'}>
        {
          'With Fjord Tours you can explore more of the magical fjord landscapes'
        }
        {'with tours and activities on and around the fjords of Norway'}
      </Text>
    </Card>
  )
}

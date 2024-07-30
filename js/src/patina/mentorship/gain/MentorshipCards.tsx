import { Card, Image, Text } from '@mantine/core'
import styles from './MentorshipCards.module.css'

type CardsProps = {
  title: string
  details: string
  img: string
  alt: string
}

// Card component for Mentorship
export function MentorshipCards({ title, details, img, alt }: CardsProps) {
  return (
    <Card radius="md" withBorder className={styles.card}>
      <Text className={styles.title}>{title}</Text>
      <Card.Section className={styles.image}>
        <Image src={img} height={160} alt={alt} />
      </Card.Section>
      <Card.Section className={styles.description}>
        <Text ta={'center'}>{details}</Text>
      </Card.Section>
    </Card>
  )
}

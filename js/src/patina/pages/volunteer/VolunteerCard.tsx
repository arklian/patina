import { Card, Title, Text } from '@mantine/core'
import styles from './VolunteerCard.module.css'

interface CardProps {
  title: string
  description: string
  type: string
}

export function VolunteerCard({ title, description, type }: CardProps) {
  return (
    <Card className={styles.card}>
      <Title order={4} className={styles.cardTitle}>
        {title}
      </Title>
      <Text size="sm" className={styles.cardRoleType}>
        {type}
      </Text>
      <Text size="sm" className={styles.cardDescription}>
        {description}
      </Text>
    </Card>
  )
}

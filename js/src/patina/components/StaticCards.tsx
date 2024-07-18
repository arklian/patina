import { Button, Card, Image } from '@mantine/core'
import styles from '@/patina/components/StaticCards.module.css'

type StaticCardsProps = {
  title: string
  imageUrl: string
  imageAlt: string
  description: string
}

export function StaticCards({
  title,
  imageUrl,
  imageAlt,
  description,
}: StaticCardsProps) {
  return (
    <Card className={styles.card}>
      <h3>{title}</h3>
      <div className={styles.cardImageContainer}>
        <Image src={imageUrl} alt={imageAlt} className={styles.cardImage} />
      </div>
      <p className={styles.cardText}>{description}</p>
      <Button variant={'outline'} className={styles.cardButton}>
        {'Check it out'}
      </Button>
    </Card>
  )
}

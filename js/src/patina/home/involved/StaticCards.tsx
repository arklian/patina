import { Button, Card, Image, Center } from '@mantine/core'
import { useRef } from 'react'
import styles from '@/patina/home/involved/StaticCards.module.css'

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
  const flashlightRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (flashlightRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      flashlightRef.current.style.left = `${x}px`
      flashlightRef.current.style.top = `${y}px`
    }
  }
  return (
    <Center className={styles.centering}>
      <Card className={styles.card} onMouseMove={handleMouseMove}>
        <div ref={flashlightRef} className={styles.flashlight}></div>
        <h3>{title}</h3>
        <div className={styles.cardImageContainer}>
          <Image src={imageUrl} alt={imageAlt} className={styles.cardImage} />
        </div>
        <p className={styles.cardText}>{description}</p>
        <Button variant={'outline'} className={styles.cardButton}>
          {'Check it out'}
        </Button>
      </Card>
    </Center>
  )
}

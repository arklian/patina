import { Button, Card, Image, Center } from '@mantine/core'
import { useRef } from 'react'
import styles from './StaticCards.module.css'

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

  /**
   * @param e - The mouse event triggered by moving the cursor.
   *
   * This function calculates the position of the mouse relative to the element
   * that triggered the event. It then updates the position of the flashlight effect
   * (represented by `flashlightRef.current`) to follow the mouse cursor within the
   * boundaries of the element.
   *
   * 1. Check if `flashlightRef.current` exists.
   * 2. Get the bounding rectangle of the element that triggered the event (`e.currentTarget`).
   * 3. Calculate the mouse position relative to the element using `e.clientX` and `e.clientY`,
   *    and the element's bounding rectangle.
   * 4. Update the position of the flashlight element by setting its `left` and `top` CSS properties
   *    based on the calculated mouse position.
   */
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

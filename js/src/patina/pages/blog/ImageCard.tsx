import { Image, Pill } from '@mantine/core'
import styles from './ImageCard.module.css'

/**
 * Component for each blog's card. Can be flex horizontal or vertical.
 */
type ImageCardProps = {
  horizontal: boolean
}

export function ImageCard({ horizontal }: ImageCardProps) {
  return (
    <div className={styles.border}>
      <div className={horizontal ? styles.cardHorizontal : styles.cardVertical}>
        <Image
          className={horizontal ? styles.imageHorizontal : styles.imageVertical}
          src={'https://placehold.co/600x400'}
        />
        <div className={styles.textSection}>
          <div className={styles.textTitle}>{'Placeholder text'}</div>
          <div className={styles.textDesc}>{'Placeholder text'}</div>
          <div className={styles.pillsSection}>
            <Pill className={styles.pill}>{'Summer 2024'}</Pill>
            <Pill className={styles.pill}>{'Student Spotlight'}</Pill>
          </div>
        </div>
      </div>
    </div>
  )
}

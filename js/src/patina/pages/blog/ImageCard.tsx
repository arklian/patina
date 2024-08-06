import { Image, Pill } from '@mantine/core'
import styles from './ImageCard.module.css'

/**
 * Component for each blog's card. Can be flex horizontal or vertical.
 */
type ImageCardProps = {
  horizontal: boolean
  title: string
  content: string
  tags: string[]
}

export function ImageCard({
  horizontal,
  title,
  content,
  tags,
}: ImageCardProps) {
  return (
    <div className={styles.border}>
      <div className={horizontal ? styles.cardHorizontal : styles.cardVertical}>
        <Image
          className={horizontal ? styles.imageHorizontal : styles.imageVertical}
          src={'https://placehold.co/600x400'}
        />
        <div className={styles.textSection}>
          <div className={styles.textTitle}>{title}</div>
          <div className={styles.textDesc}>{content.substring(0, 60)}</div>
          <div className={styles.pillsSection}>
            {tags.map((tag, index: number) => (
              <Pill key={index} className={styles.pill}>
                {tag}
              </Pill>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

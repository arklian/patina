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
  image: string
}

export function ImageCard({
  horizontal,
  title,
  content,
  tags,
  image,
}: ImageCardProps) {
  let contentSubstring = ''
  let JSONParsable = false
  // Content should be a JSON.stringify'd string
  // Convert content back to JSON object for accessing innermost text to display in brief
  try {
    const contentJSON = JSON.parse(content)
    const innermostTextFields = contentJSON.content[0].content[0]
    contentSubstring = innermostTextFields.text.substring(0, 120)
    JSONParsable = true
  } catch (e) {
    console.log(e)
  }
  // Remove this once all existing blogs in SQL blog table have valid JSON parsable content column
  if (!JSONParsable) contentSubstring = content.substring(0, 120)

  return (
    <div className={styles.border}>
      <div className={horizontal ? styles.cardHorizontal : styles.cardVertical}>
        <Image
          className={horizontal ? styles.imageHorizontal : styles.imageVertical}
          src={image === '' ? 'https://placehold.co/600x400' : image}
        />
        <div className={styles.textSection}>
          <div className={styles.textTitle}>{title}</div>
          <div className={styles.textDesc}>{contentSubstring}</div>
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

import { useNavigate } from 'react-router-dom'
import { Image, Pill, UnstyledButton } from '@mantine/core'
import { Blog } from './blog.ts'
import styles from './ImageCard.module.css'

/**
 * Component for each blog's card. Can be flex horizontal or vertical.
 */
type ImageCardProps = {
  horizontal: boolean
  blog: Blog
  tags: string[]
}

export function ImageCard({ horizontal, blog, tags }: ImageCardProps) {
  const navigate = useNavigate()
  let contentSubstring = ''
  let JSONParsable = false
  // Content should be a JSON.stringify'd string
  // Convert content back to JSON object for accessing innermost text to display in brief
  try {
    const contentJSON = JSON.parse(blog.content)
    const innermostTextFields = contentJSON.content[0].content[0]
    contentSubstring = innermostTextFields.text.substring(0, 120)
    JSONParsable = true
  } catch (e) {
    console.log(e)
  }
  // Remove this once all existing blogs in SQL blog table have valid JSON parsable content column
  if (!JSONParsable) contentSubstring = blog.content.substring(0, 120)

  return (
    <UnstyledButton
      onClick={() => {
        console.log(`Navigating to blog ${blog.id}`)
        navigate(`/blog/${blog.id}`)
      }}
    >
      <div className={styles.border}>
        <div
          className={horizontal ? styles.cardHorizontal : styles.cardVertical}
        >
          <Image
            className={
              horizontal ? styles.imageHorizontal : styles.imageVertical
            }
            src={
              blog.image.substring(0, 5) !== 'https' ?
                'https://placehold.co/600x400'
              : blog.image
            }
          />
          <div className={styles.textSection}>
            <div className={styles.textTitle}>{blog.title}</div>
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
    </UnstyledButton>
  )
}

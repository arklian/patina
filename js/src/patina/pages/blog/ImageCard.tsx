import { useNavigate } from 'react-router-dom'
import { Image, Pill, UnstyledButton } from '@mantine/core'
import React from 'react'
import { Blog } from './blog.ts'
import styles from './ImageCard.module.css'
import { imageUrls } from '@/patina/assets/images'

/**
 * Component for each blog's card. Can be flex horizontal or vertical.
 */
type ImageCardProps = {
  horizontal: boolean
  blog?: Blog // TODO: Make Blog required and make skeleton card?
  tags: string[]
}

export function ImageCard({ horizontal, blog, tags }: ImageCardProps) {
  const navigate = useNavigate()

  // Content should be a JSON.stringify'd string
  // Convert content back to JSON object for accessing innermost text to display in brief
  // TODO: Normalize blog contents to have both JSON and raw text.
  const contentSubstring = React.useMemo(() => {
    try {
      const contentJSON = JSON.parse(blog?.content || '')
      const innermostTextFields = contentJSON.content[0].content[0]
      return innermostTextFields.text.substring(0, 120)
    } catch {
      return blog?.content.substring(0, 120)
    }
  }, [blog])

  if (!blog) return null // TODO: Add skeleton card for loading?
  return (
    <UnstyledButton
      className={horizontal ? styles.cardHorizontal : styles.cardVertical}
      onClick={() => {
        navigate(`/blog/${blog.id}`)
      }}
    >
      <Image
        className={horizontal ? styles.imageHorizontal : styles.imageVertical}
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
    </UnstyledButton>
  )
}

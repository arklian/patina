import { ImageCard } from './ImageCard.tsx'
import styles from './Blog.module.css'

/**
 * Component for displaying Blogs from DB in list view.
 */
export function BlogPage() {
  return (
    <div className={styles.page}>
      <div className={styles.latestPostsSection}>
        <div className={styles.titleContainer}>{'Blog'}</div>
        <div className={styles.subtitleContainer}>{'Latest posts'}</div>
        <div className={styles.latestPostsCards}>
          <ImageCard horizontal={false} />
          <ImageCard horizontal={false} />
        </div>
      </div>

      <div className={styles.allPostsSection}>
        <div className={styles.subtitleContainer}>{'All posts'}</div>
        <div className={styles.allPostsCards}>
          <ImageCard horizontal />
          <ImageCard horizontal />
          <ImageCard horizontal />
        </div>
      </div>
    </div>
  )
}

import { useQuery } from '@tanstack/react-query'
import { ImageCard } from './ImageCard.tsx'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { SearchBlogs } from './SearchBlogs'
import styles from './Blog.module.css'

/**
 * Component for displaying Blogs from DB in list view.
 */
export function BlogPage() {
  const { data, status } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const response = await fetch('/api/blogs')
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    },
  })

  const allBlogs = data?.blogs

  return (
    <ContentPage>
      <div className={styles.latestPostsSection}>
        <div className={styles.titleContainer}>{'Blog'}</div>
        <div className={styles.subtitleContainer}>{'Latest posts'}</div>
        {status === 'success' ?
          <div className={styles.latestPostsCards}>
            <ImageCard horizontal={false} blog={allBlogs[0]} tags={['']} />
            <ImageCard horizontal={false} blog={allBlogs[1]} tags={['']} />
          </div>
        : <div>{'Loading blogs...'}</div>}
      </div>
      <SearchBlogs />
    </ContentPage>
  )
}

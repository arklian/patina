import { useQuery } from '@tanstack/react-query'
import { ImageCard } from './ImageCard.tsx'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import styles from './Blog.module.css'

type Blog = {
  id: number
  author: string
  title: string
  createTime: string
  content: string
  image: string
}

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
            <ImageCard
              horizontal={false}
              title={allBlogs[0].title}
              content={allBlogs[0].content}
              tags={['']}
              image={allBlogs[0].image}
            />
            <ImageCard
              horizontal={false}
              title={allBlogs[1].title}
              content={allBlogs[1].content}
              tags={['']}
              image={allBlogs[1].image}
            />
          </div>
        : <div>{'Loading blogs...'}</div>}
      </div>

      <div className={styles.allPostsSection}>
        <div className={styles.subtitleContainer}>{'All posts'}</div>
        {status === 'success' ?
          <div className={styles.allPostsCards}>
            {allBlogs.map((blog: Blog) => (
              <ImageCard
                key={blog.id}
                horizontal
                title={blog.title}
                content={blog.content}
                tags={['Summer 2024', 'Student Spotlight']}
                image={blog.image}
              />
            ))}
          </div>
        : <div>{'Loading blogs...'}</div>}
      </div>
    </ContentPage>
  )
}

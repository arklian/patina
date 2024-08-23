import { Center, Pagination, Select } from '@mantine/core'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ImageCard } from './ImageCard.tsx'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { Blog } from './blog.ts'
import styles from './Blog.module.css'

/**
 * Component for displaying Blogs from DB in list view.
 */
export function BlogPage() {
  const [limit, setLimit] = useState<string | null>('10')
  const [activePage, setActivePage] = useState(1)
  const blogData = () => {
    const pageBlogs = useQuery({
      queryKey: ['blogs', limit, activePage],
      queryFn: async () => {
        const response = await fetch('/api/blogs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ limit: Number(limit), page: activePage }),
        })

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      },
    })
    const recentBlogs = useQuery({
      queryKey: ['blogs'],
      queryFn: async () => {
        const response = await fetch('/api/blogs/recent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
      },
    })
    return [recentBlogs, pageBlogs]
  }

  const recentBlogs = blogData()[0].data?.blogs
  const allBlogs = blogData()[1].data?.blogs
  const total = blogData()[1].data?.total

  useEffect(() => {
    setActivePage(1)
  }, [limit])

  return (
    <ContentPage>
      <div className={styles.latestPostsSection}>
        <div className={styles.titleContainer}>{'Blog'}</div>
        <div className={styles.subtitleContainer}>{'Latest posts'}</div>
        {blogData()[0].status === 'success' ?
          <div className={styles.latestPostsCards}>
            <ImageCard horizontal={false} blog={recentBlogs[0]} tags={['']} />
            <ImageCard horizontal={false} blog={recentBlogs[1]} tags={['']} />
          </div>
        : <div>{'Loading blogs...'}</div>}
      </div>

      <div className={styles.allPostsSection}>
        <div className={styles.subtitleWrapper}>
          <div className={styles.subtitleContainer}>{'All posts'}</div>
          <Select
            label="Blogs per page"
            placeholder="Pick value"
            data={['5', '10', '20', '50']}
            defaultValue="10"
            value={limit}
            onChange={setLimit}
          />
        </div>
        {blogData()[1].status === 'success' ?
          <div className={styles.allPostsCards}>
            {allBlogs.map((blog: Blog) => (
              <ImageCard
                key={blog.id}
                horizontal
                blog={blog}
                tags={['Summer 2024', 'Student Spotlight']}
              />
            ))}
          </div>
        : <div>{'Loading blogs...'}</div>}
        <Center>
          <Pagination
            total={Math.ceil(total / Number(limit))}
            value={activePage}
            onChange={setActivePage}
          />
        </Center>
      </div>
    </ContentPage>
  )
}

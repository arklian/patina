import { Center, Pagination, Select } from '@mantine/core'
import { useState } from 'react'
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
  const { data, status } = useQuery({
    queryKey: ['blogs', limit],
    queryFn: async () => {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ limit: Number(limit) }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    },
  })

  const allBlogs = data?.blogs
  const total = data?.total

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
        {status === 'success' ?
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
            total={total / Number(limit) + 1}
            value={activePage}
            onChange={setActivePage}
          />
        </Center>
      </div>
    </ContentPage>
  )
}

import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Image } from '@mantine/core'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import styles from './FocusedBlog.module.css'

/**
 * Component for displaying a specific blog.
 */
export function FocusedBlog() {
  const { id } = useParams()
  const { data, status } = useQuery({
    queryKey: ['blog'],
    queryFn: async () => {
      const response = await fetch(`/api/blog/${id}`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    },
  })

  const blog = data?.blog

  return status === 'success' ?
      <ContentPage>
        <Image src={blog.image} />
        <div className={styles.blogSection}>
          <div>{`Title: ${blog.title}`}</div>
          <div>{`Author: ${blog.author}`}</div>
          <div>{`Create_Time: ${blog.createTime}`}</div>
        </div>
      </ContentPage>
    : <div>{'Loading this blog'}</div>
}

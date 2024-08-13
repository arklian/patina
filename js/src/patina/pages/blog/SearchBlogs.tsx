import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { TextInput } from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import { ImageCard } from './ImageCard'
import styles from './Blog.module.css'
import { Blog } from '@/patina/pages/blog/blog'

export function SearchBlogs() {
  const [query, setQuery] = useState('')
  const [debouncedQuery] = useDebouncedValue(query, 600)

  const { data, status } = useQuery({
    queryKey: ['blogs', debouncedQuery],
    queryFn: async () => {
      const endpoint =
        debouncedQuery && debouncedQuery.length > 2 ?
          `/api/blogs/${debouncedQuery}`
        : '/api/blogs'
      const response = await fetch(endpoint)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <div className={styles.allPostsSection}>
      <div className={styles.subtitleContainer}>
        {query ? 'Search Results' : 'All posts'}
      </div>
      <TextInput
        variant="filled"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search blogs here..."
        className={styles.searchBar}
      />
      {status === 'success' && data?.blogs?.length > 0 ?
        <div className={styles.allPostsCards}>
          {data.blogs.map((blog: Blog) => (
            <ImageCard
              key={blog.id}
              horizontal
              blog={blog}
              tags={['Summer 2024', 'Student Spotlight']}
            />
          ))}
        </div>
      : status === 'success' && (
          <div className={styles.subtitleContainer}>{'No blogs found.'}</div>
        )
      }
    </div>
  )
}

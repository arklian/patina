import { useQuery } from '@tanstack/react-query'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import styles from './Generate.module.css'

export function GeneratePage() {
  const { data, status } = useQuery({
    queryKey: ['generate'],
    queryFn: async () => {
      const response = await fetch('/api/blog/hidden')
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    },
  })

  return (
    <ContentPage>
      <div className={styles.latestPostsSection}>
        <div className={styles.titleContainer}>{'Blog'}</div>
        <div className={styles.subtitleContainer}>{'Latest posts'}</div>
        {status === 'success' ?
          <div className={styles.latestPostsCards}>{data}</div>
        : <div>{'Bad'}</div>}
      </div>
    </ContentPage>
  )
}

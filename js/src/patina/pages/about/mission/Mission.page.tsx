import { Skeleton, Title, Space } from '@mantine/core'
import styles from './Mission.module.css'

export function MissionPage() {
  return (
    <div className={styles.container}>
      <Title order={1}>
        <Skeleton className={styles.titleSkeleton} />
      </Title>
      <Space h="md" />
      <Skeleton className={styles.paragraphSkeleton} />
      <Skeleton className={styles.paragraphSkeleton} />
      <Skeleton className={styles.paragraphSkeleton} />
      <Space h="lg" />
      <Title order={2}>
        <Skeleton className={styles.subtitleSkeleton} />
      </Title>
      <Space h="md" />
      <Skeleton className={styles.imageSkeleton} />
      <Space h="lg" />
      <Skeleton className={styles.paragraphSkeleton} />
      <Skeleton className={styles.paragraphSkeleton} />
      <Skeleton className={styles.paragraphSkeleton} />
    </div>
  )
}

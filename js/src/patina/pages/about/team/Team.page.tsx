import { Skeleton, Title, Space } from '@mantine/core'
import styles from './Team.module.css'

export function TeamPage() {
  return (
    <div className={styles.container}>
      <Title order={1}>{'Our Team'}</Title>
      <Space h="md" />
      <div className={styles.cardSkeleton}>
        <Skeleton className={styles.avatarSkeleton} />
        <div className={styles.infoSkeleton}>
          <Skeleton className={styles.nameSkeleton} />
          <Skeleton className={styles.roleSkeleton} />
        </div>
      </div>
      <div className={styles.cardSkeleton}>
        <Skeleton className={styles.avatarSkeleton} />
        <div className={styles.infoSkeleton}>
          <Skeleton className={styles.nameSkeleton} />
          <Skeleton className={styles.roleSkeleton} />
        </div>
      </div>
      <div className={styles.cardSkeleton}>
        <Skeleton className={styles.avatarSkeleton} />
        <div className={styles.infoSkeleton}>
          <Skeleton className={styles.nameSkeleton} />
          <Skeleton className={styles.roleSkeleton} />
        </div>
      </div>
      <div className={styles.cardSkeleton}>
        <Skeleton className={styles.avatarSkeleton} />
        <div className={styles.infoSkeleton}>
          <Skeleton className={styles.nameSkeleton} />
          <Skeleton className={styles.roleSkeleton} />
        </div>
      </div>
      <div className={styles.cardSkeleton}>
        <Skeleton className={styles.avatarSkeleton} />
        <div className={styles.infoSkeleton}>
          <Skeleton className={styles.nameSkeleton} />
          <Skeleton className={styles.roleSkeleton} />
        </div>
      </div>
    </div>
  )
}

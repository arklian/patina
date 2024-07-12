import { Skeleton } from '@mantine/core'
import styles from './Home.module.css'
import { Important } from '@/patina/home/Important.tsx'

export function HomePage() {
  return (
    <>
      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={70} width="100%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={600} width="100%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={50} width="40%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={900} width="80%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={50} width="40%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={500} width="80%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={50} width="40%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Important />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={70} width="100%" mt="xl" />
      </div>
    </>
  )
}

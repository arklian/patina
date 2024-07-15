import { Skeleton, Title } from '@mantine/core'
import styles from './Home.module.css'

export function HomePage() {
  return (
    <>
      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={70} width="100%" mb="xl" />
      </div>
      <div className={styles.hero}>
        <div>
          <Title className={styles.hero_title}>
            {'Empowering AANHPI leaders to '}
            <span className={styles.title_teal}>{'make their mark.'}</span>
          </Title>
        </div>
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
        <Skeleton animate={false} height={400} width="60%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={70} width="100%" mt="xl" />
      </div>
    </>
  )
}

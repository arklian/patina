import { Container, Skeleton, Title } from '@mantine/core'
import { Initiatives } from './Initiatives'
import { About } from './About.tsx'
import styles from './Home.module.css'
import { ImportantSection } from '@/patina/home/ImportantSection.tsx'

export function HomePage() {
  return (
    <Container className={styles.homeContainer}>
      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={70} width="100%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={600} width="100%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={50} width="40%" mb="xl" />
      </div>
      {/*this double initiative thing will be replace by <About></About>*/}
      <div className={styles.aboutInit}>
        <About />
        <Initiatives></Initiatives>
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={50} width="40%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={500} width="80%" mb="xl" />
      </div>

      <div className={styles.skeletonStyle}>
        <Title className={styles.importantSectionTitle}>
          {'Why is This Important?'}
        </Title>
      </div>

      <div className={styles.skeletonStyle}>
        <ImportantSection />
      </div>

      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={70} width="100%" mt="xl" />
      </div>
    </Container>
  )
}

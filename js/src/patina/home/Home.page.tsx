import { Container, Skeleton, Title } from '@mantine/core'
import { Initiatives } from './Initiatives'
import { About } from './About.tsx'
import { ImportantSection } from '@/patina/home/ImportantSection.tsx'
import { AboutScholarship } from '@/patina/scholarship/AboutScholarship'
import { ApplicationProcess } from '@/patina/scholarship/ApplicationProcess'
import { Application } from '@/patina/scholarship/Application'
import styles from './Home.module.css'

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
        <Initiatives />
      </div>

      <div className={styles.temp}>
        <ApplicationProcess />
        <AboutScholarship />
      </div>
      <div className={styles.temp}>
        <Application />
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

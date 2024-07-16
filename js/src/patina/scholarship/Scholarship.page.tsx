import { Container, Skeleton } from '@mantine/core'
import { AboutScholarship } from '@/patina/scholarship/AboutScholarship'
import { ApplicationProcess } from '@/patina/scholarship/ApplicationProcess'
import { Application } from '@/patina/scholarship/Application'
import styles from './Scholarship.module.css'

export function ScholarshipPage() {
  return (
    <Container className={styles.homeContainer}>
      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={70} width="100%" mb="xl" />
      </div>
      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={686} width="100%" mb="xl" />
      </div>
      <div className={styles.about}>
        <ApplicationProcess />
        <AboutScholarship />
      </div>
      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={563} width="100%" mb="xl" />
      </div>
      <div className={styles.app}>
        <Application />
      </div>
      <div className={styles.skeletonStyle}>
        <Skeleton animate={false} height={686} width="100%" mb="xl" />
      </div>
    </Container>
  )
}

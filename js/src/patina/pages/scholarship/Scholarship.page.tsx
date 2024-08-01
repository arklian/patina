import { SimpleGrid, Text } from '@mantine/core'
import { Forms } from '@/patina/components/Forms.tsx'
import { Criteria } from '@/patina/pages/scholarship/criteria/Criteria.tsx'
import { ApplicationProcess } from '@/patina/pages/scholarship/applicationprocess/ApplicationProcess.tsx'
import { AboutScholarship } from '@/patina/pages/scholarship/about/AboutScholarship.tsx'
import { Application } from '@/patina/pages/scholarship/application/Application.tsx'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { Hero } from '@/patina/components/Hero'
// import { DonorSection } from '@/patina/pages/scholarship/donors/Donors.page.tsx'
import { imageUrls } from '@/patina/assets/images.ts'
import styles from './Scholarship.module.css'

export function ScholarshipPage() {
  const message = (
    <Text className={styles.description}>
      {'The Patina Network Scholarship Fund intends to manifest our '}
      <span className={styles.colored}>{'vision'}</span>
      {
        ' by awarding scholarships annually to students who are of ethnicity, heritage, or ancestry in relations to the AANHPI communities and would benefit the most from the financial stipend.'
      }
    </Text>
  )
  return (
    <ContentPage>
      <SimpleGrid>
        <Hero
          title="Scholarship Fund"
          details={message}
          img={imageUrls.scholarshipHero.src}
          button="https://docs.google.com/forms/d/e/1FAIpQLSfE93_PaX8Eynv_6zdMQnYHiljFq7Ci_E0_9hzRs2z3aSE3-g/viewform?fbzx=-2135089361293927732"
          alt="Woman holding books"
        />
      </SimpleGrid>
      <div className={styles.about}>
        <ApplicationProcess />
        <AboutScholarship />
      </div>
      <Criteria />
      <div className={styles.application}>
        <Application />
      </div>
      <div className={styles.emailSection}>
        <Forms />
      </div>
      {/*<DonorSection />*/}
    </ContentPage>
  )
}

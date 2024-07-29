import { Text } from '@mantine/core'
import { Criteria } from '@/patina/scholarship/criteria/Criteria.tsx'
import { ApplicationProcess } from '@/patina/scholarship/applicationprocess/ApplicationProcess.tsx'
import { AboutScholarship } from '@/patina/scholarship/about/AboutScholarship.tsx'
import { Application } from '@/patina/scholarship/application/Application.tsx'
import { DonorSection } from '@/patina/scholarship/donors/Donors.page.tsx'
import { imageUrls } from '@/patina/assets/images.ts'
import styles from './Scholarship.module.css'

export function ScholarshipPage() {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.hero_container}>
          <Text className={styles.hero_title}>
            {'Patina Network Scholarship Fund '}
            <Text className={styles.hero_description}>
              {'The Patina Network Scholarship Fund intends to manifest our '}
              <span className={styles.colored}>{'vision'}</span>
              {
                ' by awarding scholarships annually to students who are of ethnicity, heritage, or ancestry in relations to the AANHPI communities and would benefit the most from the financial stipend.'
              }
            </Text>
          </Text>
          <div>
            <img
              className={styles.hero_image}
              alt={'scholarship hero'}
              src={imageUrls.scholarshipHome.src}
            />
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <ApplicationProcess />
        <AboutScholarship />
      </div>
      <Criteria />
      <div className={styles.application}>
        <Application />
      </div>
      <DonorSection />
    </div>
  )
}

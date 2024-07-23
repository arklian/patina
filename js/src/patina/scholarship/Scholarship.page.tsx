import { Text } from '@mantine/core'
import { Criteria } from './Criteria.tsx'
import { ApplicationProcess } from '@/patina/scholarship/ApplicationProcess'
import { AboutScholarship } from './AboutScholarship.tsx'
import { Gains } from './Gains.tsx'
import { Application } from '@/patina/scholarship/Application'
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
              {'The Patina Network Scholarship Fund intends to manifest our'}
              <span className={styles.colored}>
                &nbsp;<span className={styles.under}>{'vision'}</span>&nbsp;
              </span>
              {
                'by awarding scholarships annually to students who are of ethnicity, heritage, or ancestry in relations to the AANHPI communities and would benefit the most from the financial stipend.'
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
      <Gains />
    </div>
  )
}

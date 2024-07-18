import { Criteria } from './Criteria.tsx'
import { Gains } from './Gains.tsx'
import styles from './Scholarship.module.css'
import { imageUrls } from '@/patina/assets/images.ts'

export function ScholarshipPage() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_container}>
          <div className={styles.hero_title}>
            {'Patina Network Scholarship Fund'}
            <div className={styles.hero_description}>
              {
                'The Patina Network Scholarship fund is... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            </div>
          </div>
          <div>
            <img
              className={styles.hero_image}
              alt={'scholarship hero'}
              src={imageUrls.scholarHero.src}
            />
          </div>
        </div>
      </div>
      <Criteria />
      <Gains />
    </>
  )
}

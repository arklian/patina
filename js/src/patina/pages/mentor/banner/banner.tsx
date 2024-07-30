import { Button, BackgroundImage } from '@mantine/core'
import styles from './banner.module.css'
import { imageUrls } from '@/patina/assets/images.ts'

export function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.imageContainer}>
        <BackgroundImage
          src={imageUrls.mentorshipHome.src}
          className={styles.backgroundImage}
        >
          <div className={styles.overlay}>
            <div className={styles.textContainer}>
              <h1>
                {
                  'Applications for both students and mentors are on a rolling basis.'
                }
              </h1>
              <p>{'Create meaningful impact in a student’s life'}</p>
            </div>
          </div>
        </BackgroundImage>
      </div>
      <div className={styles.buttonContainer}>
        <Button className={styles.applyButton}>{'Apply Now'}</Button>
      </div>
    </div>
  )
}

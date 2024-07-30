import { Button, Text, BackgroundImage } from '@mantine/core'
import styles from './banner.module.css'
import { imageUrls } from '@/patina/assets/images.ts'

export function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <BackgroundImage
        src={imageUrls.mentorBwApply.src}
        className={styles.banner}
      >
        <div className={styles.content}>
          <div className={styles.titleContainer}>
            <Text className={styles.title}>
              {
                'Applications for both students and mentors are on a rolling basis.'
              }
            </Text>
          </div>
          <div className={styles.subtitleContainer}>
            <Text className={styles.subtitle}>
              {'Create meaningful impact in a student’s life'}
            </Text>
          </div>
          <div className={styles.button}>
            <Button variant="filled" size="md" color="#47FFFF">
              {'Apply now'}
            </Button>
          </div>
        </div>
      </BackgroundImage>
    </div>
  )
}

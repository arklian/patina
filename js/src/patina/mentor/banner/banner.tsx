import { Button, Image } from '@mantine/core'
import styles from '@/patina/mentor/banner/banner.module.css'
import { imageUrls } from '@/patina/assets/images.ts'

export function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}>
        <Image
          src={imageUrls.mentorshipHome.src}
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          className={styles.image}
        />
        <div className={styles.grayOverlay}></div>
        <div className={styles.overlay}>
          <div className={styles.textContainer}>
            <h1>
              {
                'Applications for both students and mentors are on a rolling basis.'
              }
            </h1>
            <p>{'Create meaningful impact in a student’s life'}</p>
            <Button className={styles.applyButton}>{'Apply Now'}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

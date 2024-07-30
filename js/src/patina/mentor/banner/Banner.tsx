import { Button, Image, Text } from '@mantine/core'
import styles from '@/patina/mentor/banner/Banner.module.css'
import { imageUrls } from '@/patina/assets/images.ts'

export function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.banner}>
        <Image
          src={imageUrls.mentorBanner.src}
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          className={styles.image}
        />
        <div className={styles.grayOverlay}></div>
        <div className={styles.overlay}>
          <div className={styles.textContainer}>
            <Text className={styles.top}>
              {'Applications for both students'}
              <br />
              {'and mentors are on a rolling basis.'}
            </Text>
            <Text className={styles.bottom}>
              {'Create meaningful impact in a student’s life'}
            </Text>
            <Button className={styles.applyButton}>
              <Text className={styles.buttonText}>{'Apply Now'}</Text>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

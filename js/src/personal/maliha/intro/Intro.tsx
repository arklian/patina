import { Text, Image } from '@mantine/core'
import styles from './Intro.module.css'

export function Intro() {
  return (
    <div className={styles.introduction}>
      <div className={styles.tagContainer}>
        <Text
          variant="gradient"
          gradient={{
            from: 'var(--mali-light-red)',
            to: 'var(--mali-red)',
            deg: 90,
          }}
          className={styles.tagline}
        >
          {"hey, it's "}
          <a
            href="https://patina-dev.nyc3.digitaloceanspaces.com/personal/maliha/Resume7-29-24.pdf"
            target="_blank"
            className={styles.mali}
            rel="noreferrer"
          >
            {'mali'}
          </a>
        </Text>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.educationContainer}>
          <Image
            className={styles.image}
            src="https://patina-dev.nyc3.digitaloceanspaces.com/personal/maliha/mali_about.JPG"
          />
          <div className={styles.educationTextContainer}>
            <Text className={`${styles.educationText} ${styles.one}`}>
              {'junior computer science major @ hunter college ’26'}
            </Text>
            <br />
            <Text className={`${styles.educationText} ${styles.two}`}>
              {'also pursuing a math minor and a literature concentration'}
            </Text>
            <Text className={`${styles.educationText} ${styles.three}`}>
              {'(as per '}
              <a
                href="https://www.hunter.cuny.edu/thhp"
                target="_blank"
                rel="noreferrer"
                className={styles.honorsLink}
              >
                {'thomas hunter honors'}
              </a>
              {')'}
            </Text>
            <br />
            <Text className={`${styles.educationText} ${styles.four}`}>
              {'bengali software engineer & '}
              <a
                href="https://www.instagram.com/birb.erry/"
                target="_blank"
                rel="noreferrer"
                className={styles.honorsLink}
              >
                {'artist'}
              </a>
              {' based in nyc'}
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}

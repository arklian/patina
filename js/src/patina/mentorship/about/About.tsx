import { Text } from '@mantine/core'
import styles from './About.module.css'

// Defining the About component
export function About() {
  return (
    <div className={styles.section2}>
      <div className={styles.left}>
        <h2 className={styles.aboutTitle}>About the Program</h2>
        <Text className={styles.aboutText}>
          If you ever felt that you were alone in the journey of educational or
          career navigation, this is a safe space for you to meet someone who
          will be like the older sibling, relative, or elder who can mentor and
          coach you to meet your workplace readiness goals. Our mentors will
          guide you to be better ready for your desired career track.
        </Text>
        <h2 className={styles.timeCommitmentTitle}>Time Commitment</h2>
        <Text className={styles.timeCommitmentText}>
          Students are expected to commit to a 12 week program where they meet
          their Mentor for 1 hour on a biweekly basis.
        </Text>
      </div>
      <div className={styles.right}>
        <Text className={styles.quote}>
          " Quote from a student about how mentorship has helped them "
        </Text>
      </div>
    </div>
  )
}

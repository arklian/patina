import { SimpleGrid, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import styles from './About.module.css'

// Defining the About component
export function About() {
  const largeScreen = useMediaQuery('(min-width: 60em)')
  return (
    <SimpleGrid
      cols={largeScreen ? 2 : 1}
      spacing="xl"
      className={styles.about}
    >
      <div className={styles.left}>
        <h2 className={styles.aboutTitle}>{'About the Program'}</h2>
        <Text className={styles.aboutText}>
          {
            'If you ever felt that you were alone navigating your educational journey or your career, this is a safe space for you to meet someone who can act as an older sibling, relative, or elder who can mentor and coach you to meet your workplace readiness goals. Our mentors will guide you to be more ready for your desired career track.'
          }
        </Text>
        <h2 className={styles.timeCommitmentTitle}>{'Time Commitment'}</h2>
        <Text className={styles.timeCommitmentText}>
          {
            'Students are expected to commit to a 12 week program where they meet their Mentor for one hour on a biweekly basis.'
          }
        </Text>
      </div>
      <div className={styles.right}>
        <Text className={styles.quote}>
          {'“Quote from a student about how mentorship has helped them.”'}
        </Text>
      </div>
    </SimpleGrid>
  )
}

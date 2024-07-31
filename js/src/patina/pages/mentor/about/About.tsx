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
        <Text className={styles.quote}>
          {'" Quote from a student about how mentorship makes a difference "'}
        </Text>
      </div>
      <div>
        <h2 className={styles.aboutTitle}>
          {'What it Means to be a PN Mentor'}
        </h2>
        <Text className={styles.aboutText}>
          {
            'We want our students to find their kuyas, sunbaes, and kakaks in their industries. Mentors are paired up with students that match best with their skills, learning styles, and industry. Our students are eager to learn about the realities of the workplace, networking for success, and transitioning into jobs. '
          }
        </Text>
        <h2 className={styles.timeCommitmentTitle}>{'Time Commitment'}</h2>
        <Text className={styles.timeCommitmentText}>
          {
            'The level of time commitment is really up to you, but we expect our mentors to check in with their mentees at least every other week, and attend the monthly Patina Network networking events together, for a total of at least 5 hours a month.'
          }
        </Text>
      </div>
    </SimpleGrid>
  )
}

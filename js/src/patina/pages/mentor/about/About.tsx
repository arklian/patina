import { Paper, SimpleGrid, Text } from '@mantine/core'
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
        <Paper withBorder>
          <Text className={styles.quote}>
            {
              '"... given me insight on how to properly prepare for my job search and a glimpse of what my future could be”'
            }
            <Text inherit className={styles.quoteAuthor}>
              {' - Amanda'}
            </Text>
          </Text>
        </Paper>
      </div>
      <div>
        <h2 className={styles.aboutTitle}>
          {'What it means to be a Patina Network Mentor'}
        </h2>
        <Text className={styles.aboutText}>
          {
            'We want our students to find their kuyas, sunbaes, and kakaks in their industries. Mentors are paired with students that match the best with their skills, learning styles, and industry. Our students are eager to learn about the realities of the workplace, networking for success, and transitioning into jobs. '
          }
        </Text>
        <h2 className={styles.timeCommitmentTitle}>{'Time Commitment'}</h2>
        <Text className={styles.timeCommitmentText}>
          {
            'The level of time commitment is really up to you, but we expect our mentors to check in with their mentees at least every other week, and attend the monthly Patina Network networking events together, for a total of at least five hours each month.'
          }
        </Text>
      </div>
    </SimpleGrid>
  )
}

import { Paper, Flex, Text } from '@mantine/core'
import styles from './About.module.css'

// Defining the About component
export function About() {
  return (
    <Flex className={styles.about}>
      <div className={styles.left}>
        <h2 className={styles.aboutTitle}>{'About the Program'}</h2>
        <Text className={styles.aboutText}>
          {
            'If you ever felt that you were alone navigating your educational journey or your career, this is a safe space for you to meet someone who can act as an older sibling, relative, or elder who can mentor and coach you to meet your workplace readiness goals. Our mentors will guide you to be more ready for your desired career track.'
          }
        </Text>
        {/*<h2 className={styles.timeCommitmentTitle}>{'Time Commitment'}</h2>*/}
        {/*<Text className={styles.timeCommitmentText}>*/}
        {/*  {*/}
        {/*    'Students are expected to commit to a 12 week program where they meet their Mentor for one hour on a weekly basis.'*/}
        {/*  }*/}
        {/*</Text>*/}
      </div>
      <div className={styles.right}>
        <Paper withBorder>
          <Text className={styles.quote}>
            {
              '“I feel more motivated and confident not only in what I want for my future but in reaching out to other professionals and building my network” - Jasmine'
            }
          </Text>
        </Paper>
      </div>
    </Flex>
  )
}

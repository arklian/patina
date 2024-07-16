import { Container, Skeleton, Stack, Text } from '@mantine/core'
import styles from './Mentorship.module.css'
/**
 * MentorshipPage component renders a mentorship page layout with multiple sections.
 * Each section is represented by a Skeleton component, which can be replaced with actual content.
 * */

export function MentorshipPage() {
  return (
    <Container>
      <Stack>
        {'Mentorship Page'}
        {/* Section 1 */}
        <Skeleton animate={false} height={70} width="100%" mb="xl" />
        {/* Section 2 */}
        <div className={styles.section2}>
          <div className={styles.right}>
            <h2 className={styles.aboutTitle}>About the Program</h2>
            <Text className={styles.aboutText}>
              If you ever felt that you were alone in the journey of educational
              or career navigation, this is a safe space for you to meet someone
              who will be like the older sibling, relative, or elder who can
              mentor and coach you to meet your workplace readiness goals. Our
              mentors will guide you to be better ready for your desired career
              track.
            </Text>
            <h2 className={styles.timeCommitmentTitle}>Time Commitment</h2>
            <Text className={styles.timeCommitmentText}>
              Students are expected to commit to a 12 week program where they
              meet their Mentor for 1 hour on a biweekly basis.
            </Text>
          </div>
          <div className={styles.left}>
            <Text className={styles.quote}>
              " Quote from a student about how mentorship has helped them "
            </Text>
          </div>
        </div>
        {/* Section 3 */}
        <Skeleton animate={false} height={70} width="100%" mb="xl" />
      </Stack>
    </Container>
  )
}

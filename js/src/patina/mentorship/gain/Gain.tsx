import { SimpleGrid, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { MentorshipCards } from '@/patina/mentorship/gain/MentorshipCards.tsx'
import styles from './Gain.module.css'

/**
 * Gain component for the Patina Network Mentorship program.
 * Displays a title, and 3 Cards Component displaying what you will gain after
 * this program
 */
export function Gain() {
  const largeScreen = useMediaQuery('(min-width: 40em)')
  return (
    <div>
      <Title className={styles.title}>{'What Will I Gain?'}</Title>
      <SimpleGrid cols={largeScreen ? 3 : 1}>
        <MentorshipCards />
        <MentorshipCards />
        <MentorshipCards />
      </SimpleGrid>
    </div>
  )
}

import { Text, SimpleGrid } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import styles from './Details.module.css'

/** Displays program details */
export function Details() {
  const largeScreen = useMediaQuery('(min-width: 60em)')
  return (
    <div className={styles.container}>
      <Text className={styles.title}>{'Program Details'}</Text>
      <Text className={styles.about}>
        {'There are two types of Mentors. Your'}
        <span className={styles.colored}>{' Track Mentor '}</span>
        {
          'will be your 1:1 Mentor who works in a field closest to the field you aim to pursue. Your '
        }
        <span className={styles.colored}>{' Group Mentor '}</span>
        {
          'is a Mentor who oversees all Mentees and provides DEI and Workplace readiness mentorship.'
        }
      </Text>
      <SimpleGrid cols={largeScreen ? 2 : 1} className={styles.list}>
        <div className={styles.list1}>
          <Text className={styles.item}>
            {'1. Match with your Track Mentor [Track]'}
          </Text>
          <Text className={styles.item}>{'2. Career Exploration [Track]'}</Text>
          <Text className={styles.item}>{'3. DEI Workshop [Group]'}</Text>
          <Text className={styles.item}>
            {'4. Networking Fundamentals [Group]'}
          </Text>
        </div>
        <div className={styles.list2}>
          <Text className={styles.item}>
            {'5. Workplace Readiness [Track/Group]'}
          </Text>
          <Text className={styles.item}>
            {'6. Progress Report Presentation [Group]'}
          </Text>
          <Text className={styles.item}>
            {'7. Execute Goals [Track/Group]'}
          </Text>
          <Text className={styles.item}>{'8. Final Evaluation [All]'}</Text>
        </div>
      </SimpleGrid>
    </div>
  )
}

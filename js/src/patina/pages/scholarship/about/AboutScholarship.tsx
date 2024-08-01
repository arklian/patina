import { Text } from '@mantine/core'
import styles from './AboutScholarship.module.css'

/** Displays information about the scholarship */
export function AboutScholarship() {
  return (
    <div className={styles.about}>
      <div className={styles.text}>
        <Text className={styles.title}>{'About the Scholarship'}</Text>
        <Text className={styles.body}>
          {
            'At this time, the Patina Network Scholarship is open to AANHPI undergraduate students attending any U.S. accredited university or college. Scholarship amounts to $500 for 1 (one) student for the fiscal year of 2024. Patina Network Scholarship has a special focus on supporting AANHPI students who would benefit the most financially; are in the first generation of their family to attend college; are representative of the AANHPI community’s diversity, (geographically and ethnically}, especially those ethnicities that have been underrepresented on college campuses due to limited access and opportunity. Strong applicants would also have an emphasis on community service, leadership, and academic achievement.'
          }
        </Text>
      </div>
    </div>
  )
}

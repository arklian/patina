import { Text } from '@mantine/core'
import styles from './AboutScholarship.module.css'

/** Displays information about the scholarship and application deadlines*/
export function AboutScholarship() {
  return (
    <div className={styles.about}>
      <div className={styles.process}></div>
      <div className={styles.text}>
        <Text>{'About the Scholarship'}</Text>
        <Text>
          {
            'The APIA Scholarship is our largest scholarship program, open to AANHPI undergraduate students attending any U.S. accredited university or college. Scholarship amounts range from $2,500 one-year awards to $20,000 multi-year awards. APIA Scholars has a special focus on supporting AANHPI students who live at or below the poverty line; are in the first generation of their family to attend college; are representative of the APIA community’s diversity, (geographically and ethnically}, especially those ethnicities that have been underrepresented on college campuses due to limited access and opportunity. Strong applicants would also have an emphasis on community service and leadership.'
          }
        </Text>
      </div>
    </div>
  )
}

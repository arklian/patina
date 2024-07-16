import { Text } from '@mantine/core'
import styles from './ApplicationProcess.module.css'

/** Displays information about the application deadlines */
export function ApplicationProcess() {
  return (
    <div className={styles.container}>
      <Text className={styles.title}>{'Application Process'}</Text>
      <div className={styles.itemsMain}>
        <div className={styles.itemContainer}>
          <Text className={styles.date}>{'OCT 10'}</Text>
          <Text className={styles.description}>{'Applications Open'}</Text>
        </div>
        <div className={styles.itemContainer}>
          <Text className={styles.date}>{'OCT 10'}</Text>
          <Text className={styles.description}>{'Application Deadline'}</Text>
        </div>
        <div className={styles.itemContainer}>
          <Text className={styles.date}>{'OCT 10'}</Text>
          <Text className={styles.description}>{'Recipients Announced'}</Text>
        </div>
      </div>
    </div>
  )
}

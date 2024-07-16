import { Text } from '@mantine/core'
import { Stacks } from './Stacks'
import styles from './ApplicationProcess.module.css'

const processStack = [
  { title: 'OCT 10', description: 'Applications Open' },
  { title: 'OCT 10', description: 'Application Deadline' },
  { title: 'OCT 10', description: 'Results Announced' },
]
/** Displays information about the application deadlines */
export function ApplicationProcess() {
  return (
    <div className={styles.container}>
      <Text className={styles.title}>{'Application Process'}</Text>
      <Stacks items={processStack} />
    </div>
  )
}

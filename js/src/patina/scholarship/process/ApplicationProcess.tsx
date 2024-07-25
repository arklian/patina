import { Stacks } from '../components/Stacks'
import styles from './ApplicationProcess.module.css'

const processStack = [
  { title: 'SEP 1', description: 'Applications Open' },
  { title: 'OCT 1', description: 'Applications Close' },
  { title: 'NOV 1', description: 'First Round Selections' },
  { title: 'DEC TBD', description: 'Finalist Announcement' },
]
/** Displays information about the application deadlines */
export function ApplicationProcess() {
  return (
    <div className={styles.container}>
      <Stacks items={processStack} />
    </div>
  )
}

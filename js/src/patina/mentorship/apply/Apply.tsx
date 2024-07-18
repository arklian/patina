import { Button, Text } from '@mantine/core'
import { Stacks } from '../../components/Stacks'
import styles from './Apply.module.css'

const applyStack = [
  { title: 'Requirement 1', description: 'Explain' },
  { title: 'Requirement 2', description: 'Explain' },
  { title: 'Requirement 3', description: 'Explain' },
]

/** Displays requirements on applying to the mentorship program */
export function Apply() {
  return (
    <div className={styles.itemContainer}>
      <Text className={styles.title}>{'How to Apply'}</Text>
      <Stacks items={applyStack}></Stacks>
      <div className={styles.buttonContainer}>
        {/*TODO: Replace link for the button when it's ready*/}
        <Button
          component="a"
          className={styles.appButton}
          variant="filled"
          color="white"
          href="templink"
        >
          <Text className={styles.appButtonText}>{'Apply Here'}</Text>
        </Button>
      </div>
    </div>
  )
}

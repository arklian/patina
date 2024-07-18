import { Button, Text } from '@mantine/core'
import { Stacks } from '../../components/Stacks'
import { Criteria } from '@/patina/components/Criteria'
import styles from './Apply.module.css'

const applyStack = [
  { title: 'Requirement 1', description: 'Explain' },
  { title: 'Requirement 2', description: 'Explain' },
  { title: 'Requirement 3', description: 'Explain' },
]

const criteria = [
  { item: 'Must be currently enrolled in an undergraduate program' },
  { item: 'Must be currently enrolled in an undergraduate program' },
  { item: 'Must be currently enrolled in an undergraduate program' },
  { item: 'Must be currently enrolled in an undergraduate program' },
  { item: 'Must be currently enrolled in an undergraduate program' },
]
/** Displays info on applying to the mentorship program */
export function Apply() {
  return (
    <div className={styles.itemContainer}>
      <Criteria items={criteria} />
      <div className={styles.itemContainer2}>
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
            <Text className={styles.appButtonText} size="20" fw={600}>
              {'Apply Here'}
            </Text>
          </Button>
        </div>
      </div>
    </div>
  )
}

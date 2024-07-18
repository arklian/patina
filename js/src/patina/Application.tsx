import { Text, Button } from '@mantine/core'
import { Stacks } from './components/Stacks'
import styles from './Application.module.css'

const applyStack = [
  { title: 'Requirement 1', description: 'Explain' },
  { title: 'Requirement 2', description: 'Explain' },
  { title: 'Requirement 3', description: 'Explain' },
]

/** Displays steps to apply to the scholarship */
export function Application() {
  return (
    <div className={styles.container}>
      <Text className={styles.title}>{'How to Apply'}</Text>
      <Stacks items={applyStack} />
      <div className={styles.buttonContainer}>
        {/*TODO: Replace link for the button when it's ready*/}
        <Button
          component="a"
          className={styles.appButton}
          variant="filled"
          color="var(--mantine-color-patina-blue-light)"
          href="templink"
        >
          <Text className={styles.appButtonText} size="20" fw={600}>
            {'Apply Here'}
          </Text>
        </Button>
      </div>
    </div>
  )
}

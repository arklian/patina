import { TextInput, PasswordInput, Button, Title, Flex } from '@mantine/core'
import styles from './Form.module.css'

export function Form() {
  return (
    <Flex direction={'column'}>
      <Title order={2} className={styles.formHeading}>
        {'Please sign in'}
      </Title>
      <form action="/login" method="post">
        <Flex direction={'column'} gap={'md'}>
          <TextInput
            label="Username"
            placeholder="Username"
            required
            name="username"
            autoFocus
            className={styles.formControl}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            required
            name="password"
            className={styles.formControl}
          />
          <Button className={styles.submitButton} type="submit" fullWidth>
            {'Sign in'}
          </Button>
        </Flex>
      </form>
    </Flex>
  )
}

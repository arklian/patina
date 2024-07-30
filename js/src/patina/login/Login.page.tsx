import { PasswordInput, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import styles from './Login.module.css'

/**
 * Component for login
 */
export function LoginPage() {
  const form = useForm({
    initialValues: {
      password: '',
    },
  })

  return (
    <div className={styles.loginSection}>
      <form onSubmit={form.onSubmit(() => '')}>
        <PasswordInput
          required
          label={'Password'}
          value={form.values.password}
          onChange={(event) =>
            form.setFieldValue('password', event.currentTarget.value)
          }
        />
        <Button className={styles.loginButton} type={'submit'}>
          {'Login'}
        </Button>
      </form>
    </div>
  )
}

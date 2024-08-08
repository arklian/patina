import { PasswordInput, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import styles from './Login.module.css'
import { ContentPage } from '@/patina/components/ContentPage.tsx'

/**
 * Component for login
 */
export function LoginPage() {
  const form = useForm({
    initialValues: {
      password: '',
    },
  })
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password: '' }),
  }

  return (
    <ContentPage>
      <form
        onSubmit={form.onSubmit(async (values) => {
          requestOptions.body = JSON.stringify({ password: values.password })
          const response = await fetch('/api/login', requestOptions)
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
          }
          return response.text()
        })}
      >
        <PasswordInput
          required
          label={'Password'}
          key={form.key('password')}
          {...form.getInputProps('password')}
        />
        <Button className={styles.loginButton} type={'submit'}>
          {'Login'}
        </Button>
      </form>
    </ContentPage>
  )
}

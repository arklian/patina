import { PasswordInput, Button } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useQuery } from '@tanstack/react-query'
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
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(''),
  }
  const { data, status, refetch } = useQuery({
    queryKey: ['login'],
    queryFn: async () => {
      const response = await fetch('/api/login', requestOptions)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.text()
    },
  })
  console.log('status:')
  console.log(status)

  return (
    <div className={styles.loginSection}>
      <form
        // onSubmit={form.onSubmit(async (values) => {
        //   requestOptions.body = JSON.stringify(values.password)
        //   const response = await fetch('/api/login', requestOptions)
        //   if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`)
        //   }
        //   return response.text()
        // })}
        onSubmit={form.onSubmit((values) => {
          requestOptions.body = JSON.stringify(values.password)
          refetch()
          console.log('DATA:')
          console.log(data)
          return data
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
    </div>
  )
}

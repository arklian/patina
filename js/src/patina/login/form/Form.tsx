import { PasswordInput, Button, TextInput, Flex } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useNavigate } from 'react-router-dom' // Import useNavigate for redirection
import styles from './Form.module.css'

/**
 * Component for login
 */
export function Form() {
  const navigate = useNavigate() // Initialize useNavigate for redirection

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
    <form
      onSubmit={form.onSubmit(async (values) => {
        requestOptions.body = JSON.stringify({ password: values.password })
        const response = await fetch('/api/login', requestOptions)
        if (response.ok) {
          // Redirect to /admin if login is successful
          navigate('/admin')
        } else {
          // Handle login failure
          const errorText = await response.text()
          alert(`Login failed: ${errorText}`)
        }
        return response.text()
      })}
    >
      <Flex direction={'column'} gap={'lg'}>
        <TextInput
          required
          label="Email"
          placeholder="hello@mantine.dev"
          onChange={(event) =>
            form.setFieldValue('email', event.currentTarget.value)
          }
          error={form.errors.email && 'Invalid email'}
          radius="md"
        />
        <PasswordInput
          required
          label={'Password'}
          key={form.key('password')}
          {...form.getInputProps('password')}
        />
        <Button className={styles.loginButton} type={'submit'}>
          {'Login'}
        </Button>
      </Flex>
    </form>
  )
}

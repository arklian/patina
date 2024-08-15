import { Container, Paper, PaperProps, Divider } from '@mantine/core'
import { OAuth2 } from '@/patina/login/oauth2/OAuth2.tsx'
import { Form } from '@/patina/login/form/Form.tsx'
import styles from './Login.module.css'

export function LoginPage(props: PaperProps) {
  return (
    <Container size="30rem" className={styles.container}>
      <Paper
        radius="md"
        p="xl"
        pb={'xl'}
        withBorder
        {...props}
        className={styles.oauth}
      >
        <OAuth2 />
        <Divider
          label="Or continue with password"
          labelPosition="center"
          my="lg"
        />
        <Form />
      </Paper>
    </Container>
  )
}

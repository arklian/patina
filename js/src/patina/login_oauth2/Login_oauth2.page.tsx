import { Text, Paper, PaperProps, Group } from '@mantine/core'
import { GoogleButton } from './GoogleButton'
import { GithubButton } from './GithubButton.tsx'

export function Login_oauth2Page(props: PaperProps) {
  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        {'Login with'}
      </Text>
      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">{'Google'}</GoogleButton>
        <GithubButton radius={'xl'}>{'Github'}</GithubButton>
      </Group>
    </Paper>
  )
}

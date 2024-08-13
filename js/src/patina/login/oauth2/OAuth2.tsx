import { Text, Group } from '@mantine/core'
import { GoogleButton } from './GoogleButton.tsx'
import { GithubButton } from './GithubButton.tsx'

export function OAuth2() {
  return (
    <div>
      <Text size="lg" fw={500}>
        {'Login with'}
      </Text>
      <Group grow mb="md" mt="md">
        <GoogleButton>{'Google'}</GoogleButton>
        <GithubButton>{'Github'}</GithubButton>
      </Group>
    </div>
  )
}

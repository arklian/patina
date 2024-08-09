import { Button } from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons-react'

export function GithubButton({ children }: { children: React.ReactNode }) {
  const handleGithubLogin = () => {
    // Redirect to the GitHub OAuth2 authorization endpoint
    window.location.href = '/oauth2/authorization/github'
  }

  return (
    <Button
      leftSection={<IconBrandGithub />}
      variant="default"
      onClick={handleGithubLogin}
      radius={'xl'}
    >
      {children}
    </Button>
  )
}

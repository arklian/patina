import { Button, ButtonProps } from '@mantine/core'
import { IconBrandGithub } from '@tabler/icons-react'

export function GithubButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<'button'>,
) {
  const handleGithubLogin = () => {
    // Redirect to the GitHub OAuth2 authorization endpoint
    window.location.href = '/oauth2/authorization/github'
  }

  return (
    <Button
      leftSection={<IconBrandGithub />}
      variant="default"
      onClick={handleGithubLogin}
      {...props}
    />
  )
}

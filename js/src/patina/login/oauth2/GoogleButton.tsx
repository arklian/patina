import { Button, ButtonProps } from '@mantine/core'
import { IconBrandGoogle } from '@tabler/icons-react'

export function GoogleButton(
  props: ButtonProps & React.ComponentPropsWithoutRef<'button'>,
) {
  const handleGoogleLogin = () => {
    // Redirect to the GitHub OAuth2 authorization endpoint
    window.location.href = '/oauth2/authorization/google'
  }
  return (
    <Button
      leftSection={<IconBrandGoogle />}
      variant="default"
      onClick={handleGoogleLogin}
      {...props}
    />
  )
}

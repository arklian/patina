import { Button } from '@mantine/core'
import { IconBrandGoogle } from '@tabler/icons-react'

<<<<<<< HEAD
export function GoogleButton({ children }: { children: React.ReactNode }) {
  return (
    <Button leftSection={<IconBrandGoogle />} variant="default" radius={'xl'}>
      {children}
    </Button>
=======
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
>>>>>>> e6d9410 (Oauth: Setup Google Cloud oauth)
  )
}

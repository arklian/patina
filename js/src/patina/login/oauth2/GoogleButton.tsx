import { Button } from '@mantine/core'
import { IconBrandGoogle } from '@tabler/icons-react'

export function GoogleButton({ children }: { children: React.ReactNode }) {
  const handleGoogleLogin = () => {
    // Redirect to the Google OAuth2 authorization endpoint
    window.location.href = '/oauth2/authorization/google'
  }
  return (
    <Button
      leftSection={<IconBrandGoogle />}
      variant="default"
      radius={'xl'}
      onClick={handleGoogleLogin}
    >
      {children}
    </Button>
  )
}

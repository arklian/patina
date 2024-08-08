import { Button } from '@mantine/core'
import { IconBrandGoogle } from '@tabler/icons-react'

export function GoogleButton({ children }: { children: React.ReactNode }) {
  return (
    <Button leftSection={<IconBrandGoogle />} variant="default" radius={'xl'}>
      {children}
    </Button>
  )
}

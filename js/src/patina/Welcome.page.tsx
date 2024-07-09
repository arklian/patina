import { MantineProvider } from '@mantine/core'
import { PatinaWelcome } from '@/components/Welcome/PatinaWelcome.tsx'
import { theme } from './theme.ts'

export function WelcomePage() {
  return (
    <MantineProvider theme={theme}>
      <PatinaWelcome />
    </MantineProvider>
  )
}

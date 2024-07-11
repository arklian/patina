import { MantineProvider } from '@mantine/core'
import { PatinaWelcome } from '@/patina/PatinaWelcome.tsx'
import { theme } from './theme.ts'

export function PatinaPage() {
  return (
    <MantineProvider theme={theme}>
      <PatinaWelcome />
    </MantineProvider>
  )
}

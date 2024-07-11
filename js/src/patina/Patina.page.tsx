import { MantineProvider } from '@mantine/core'
// import { PatinaWelcome } from '@/patina/PatinaWelcome.tsx'
import { Home } from '@/patina/home/Home.tsx'
import { theme } from './theme.ts'

export function PatinaPage() {
  return (
    <MantineProvider theme={theme}>
      <Home />
    </MantineProvider>
  )
}

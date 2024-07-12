import { MantineProvider } from '@mantine/core'
import { Home } from '@/patina/home/Home.tsx'
import { theme, resolver } from './theme.ts'

export function PatinaPage() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <Home />
    </MantineProvider>
  )
}

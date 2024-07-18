import { MantineProvider } from '@mantine/core'
import { HeaderNav } from './components/HeaderNav.tsx'
import { theme } from './theme.ts'

export function MartinPage() {
  return (
    <MantineProvider theme={theme}>
      <HeaderNav />
    </MantineProvider>
  )
}

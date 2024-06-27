import { MantineProvider } from '@mantine/core'
import { Welcome } from '@/components/Welcome/Welcome'
import { theme } from './theme.ts'

export function HomePage() {
  return (
    <MantineProvider theme={theme}>
      <Welcome />
    </MantineProvider>
  )
}

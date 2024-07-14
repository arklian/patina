import { MantineProvider } from '@mantine/core'
import { Welcome } from '@/components/Welcome/Welcome.tsx'
import { theme } from './theme.ts'

export function PersonalPage() {
  return (
    <MantineProvider theme={theme}>
      <Welcome />
    </MantineProvider>
  )
}

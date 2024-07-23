import { MantineProvider } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { theme } from './theme.ts'

export function LilacPage() {
  return (
    <MantineProvider theme={theme} forceColorScheme="dark">
      <Outlet />
    </MantineProvider>
  )
}

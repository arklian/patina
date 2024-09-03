import { MantineProvider } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { theme } from '../theme.ts'

export function MannyPage() {
  return (
    <MantineProvider theme={theme}>
      <Outlet />
    </MantineProvider>
  )
}

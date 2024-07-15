import { MantineProvider } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { theme, resolver } from './theme.ts'

export function PatinaPage() {
  return (
    <MantineProvider
      theme={theme}
      cssVariablesResolver={resolver}
      forceColorScheme="dark"
    >
      <Outlet />
    </MantineProvider>
  )
}

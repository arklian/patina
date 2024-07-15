import { MantineProvider, Stack } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { NavigationHeader } from '@/patina/NavigationHeader.tsx'
import { theme, resolver } from './theme.ts'

export function PatinaPage() {
  return (
    <MantineProvider
      theme={theme}
      cssVariablesResolver={resolver}
      forceColorScheme="dark"
    >
      <Stack>
        <NavigationHeader />
        <Outlet />
      </Stack>
    </MantineProvider>
  )
}

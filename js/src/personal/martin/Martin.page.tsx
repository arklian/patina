import { MantineProvider } from '@mantine/core'
import { HeaderNav } from './components/HeaderNav.tsx'
import { Outlet } from 'react-router-dom'
import { theme } from './theme.ts'

export function MartinPage() {
  return (
    <MantineProvider theme={theme}>
      <HeaderNav children={<Outlet />}/>
    </MantineProvider>
  )
}

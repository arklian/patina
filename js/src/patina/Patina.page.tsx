import { MantineProvider } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { theme, resolver } from './theme.ts'
import { NavBar } from './navbar/NavBar.tsx'
import { Footer } from '@/patina/components/Footer.tsx'

export function PatinaPage() {
  return (
    <MantineProvider
      theme={theme}
      cssVariablesResolver={resolver}
      forceColorScheme="dark"
    >
      <NavBar />
      <Outlet />
      <Footer />
    </MantineProvider>
  )
}

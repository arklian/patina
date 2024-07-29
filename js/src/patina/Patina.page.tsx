import { MantineProvider } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { theme, resolver } from './theme.ts'
import { NavBar } from './navbar/NavBar.tsx'
import { Footer } from '@/patina/components/Footer.tsx'

// Singleton query client for react-query
const queryClient = new QueryClient()

export function PatinaPage() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        theme={theme}
        cssVariablesResolver={resolver}
        forceColorScheme="dark"
      >
        <NavBar />
        <Outlet />
        <Footer />
      </MantineProvider>
    </QueryClientProvider>
  )
}

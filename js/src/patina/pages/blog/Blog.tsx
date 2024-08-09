import { MantineProvider } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { resolver, theme } from '@/patina/theme.ts'
import { NavBar } from '@/patina/navbar/NavBar.tsx'
import { Footer } from '@/patina/components/Footer.tsx'

const queryClient = new QueryClient()

export function Blog() {
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

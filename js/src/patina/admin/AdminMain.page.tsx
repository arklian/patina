import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Admin } from '@/patina/admin/Admin.tsx'
import { resolver } from '@/patina/theme.ts'

// Singleton query client for react-query
const adminQueryClient = new QueryClient()

export function AdminMainPage() {
  return (
    <QueryClientProvider client={adminQueryClient}>
      <MantineProvider cssVariablesResolver={resolver} forceColorScheme="dark">
        <Notifications />
        <Admin />
      </MantineProvider>
    </QueryClientProvider>
  )
}

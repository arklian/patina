import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { Admin } from '@/patina/admin/Admin.tsx'
import { resolver } from '@/patina/theme.ts'

export function AdminMainPage() {
  return (
    <MantineProvider cssVariablesResolver={resolver} forceColorScheme="dark">
      <Notifications />
      <Admin />
    </MantineProvider>
  )
}

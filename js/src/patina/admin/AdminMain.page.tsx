import { MantineProvider } from '@mantine/core'
import { Admin } from '@/patina/admin/Admin.tsx' // Adjust the import path as needed
import { resolver } from '@/patina/theme.ts'

export function AdminMainPage() {
  return (
    <MantineProvider cssVariablesResolver={resolver} forceColorScheme="dark">
      <Admin />
    </MantineProvider>
  )
}

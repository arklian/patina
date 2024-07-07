import { MantineProvider } from '@mantine/core'
import { MainPage } from './Main.page.tsx'
import { cssVariableResolver, theme } from './theme.ts'

export function AmandaPage() {
  return (
    <MantineProvider
      theme={theme}
      cssVariablesResolver={cssVariableResolver}
    >
      <MainPage />
    </MantineProvider>
  )
}

import { MantineProvider } from '@mantine/core'
import { useState } from 'react'
import { MainPage } from './Main.page.tsx'
import { LandingPage } from './Landing.page.tsx'
import { cssVariableResolver, theme } from './theme.ts'

enum Page {
  Landing,
  Main,
}

export function AmandaPage() {
  const [currentPage, setCurrentPage] = useState(Page.Landing)
  return (
    <MantineProvider
      theme={theme}
      cssVariablesResolver={cssVariableResolver}
    >
      {currentPage === Page.Landing && (
        <LandingPage onClick={() => setCurrentPage(Page.Main)} />
      )}
      {currentPage === Page.Main && <MainPage />}
    </MantineProvider>
  )
}

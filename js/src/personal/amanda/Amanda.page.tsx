import { Container, MantineProvider } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { cssVariableResolver, theme } from './theme.ts'
import styles from '@/personal/amanda/Amanda.module.css'
import { LightDarkButton } from '@/personal/amanda/LightDarkButton.tsx'
import { DownloadResume } from '@/personal/amanda/DownloadResume.tsx'
import { Sidebar } from '@/personal/amanda/Sidebar.tsx'

export function AmandaPage() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={cssVariableResolver}>
      <Container className={styles.header}>
        <DownloadResume />
        <LightDarkButton />
      </Container>
      <Container size="responsive" className={styles.mainPage}>
        <Sidebar />
        <Outlet />
      </Container>
    </MantineProvider>
  )
}

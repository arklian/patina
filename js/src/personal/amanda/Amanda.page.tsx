import { Container, MantineProvider } from '@mantine/core'
import { cssVariableResolver, theme } from './theme.ts'
import { Outlet } from 'react-router-dom'
import styles from '@/personal/amanda/Amanda.module.css'
import { LightDarkButton } from '@/personal/amanda/LightDarkButton.tsx'
import { Sidebar } from '@/personal/amanda/Sidebar.tsx'

export function AmandaPage() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={cssVariableResolver}>
      <Container className={styles.lightDark} mt="1rem">
        <LightDarkButton />
      </Container>
      <Container size="responsive" p="5rem" pb="0" className={styles.mainPage}>
        <Sidebar />
        <Outlet />
      </Container>
    </MantineProvider>
  )
}

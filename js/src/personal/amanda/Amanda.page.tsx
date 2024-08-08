import { Burger, Container, MantineProvider } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Outlet } from 'react-router-dom'
import { cssVariableResolver, theme } from './theme.ts'
import styles from '@/personal/amanda/Amanda.module.css'
import { LightDarkButton } from '@/personal/amanda/LightDarkButton.tsx'
import { DownloadResume } from '@/personal/amanda/DownloadResume.tsx'
import { Sidebar } from '@/personal/amanda/Sidebar.tsx'

export function AmandaPage() {
  const [opened, { toggle }] = useDisclosure(true)
  return (
    <MantineProvider theme={theme} cssVariablesResolver={cssVariableResolver}>
      <Container className={styles.header}>
        <Burger
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
          className={styles.headerLeft}
        />
        <div className={styles.headerRight}>
          <DownloadResume />
          <LightDarkButton />
        </div>
      </Container>
      <div className={styles.page}>
        <Sidebar opened={opened} toggle={toggle} />
        <Outlet />
      </div>
    </MantineProvider>
  )
}

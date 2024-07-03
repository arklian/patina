import { AppShell, MantineProvider } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { theme } from './theme.ts'
import styles from './Riyuan.module.css'
import { Nav } from '@/personal/riyuan/components/navigation/Navigation.tsx'
import { FooterCentered } from '@/personal/riyuan/components/footer/Footer.tsx'

// This component renders the basic layout of the website
/** Renders the base of the website with the navigation bar and footer
 *   Establishes the main layout for the site */
export function RiyuanPage() {
  return (
    <MantineProvider theme={theme}>
      <Nav />
      <AppShell className={styles.appshell}>
        <Outlet />
        <FooterCentered />
      </AppShell>
    </MantineProvider>
  )
}

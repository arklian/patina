import { AppShell, MantineProvider, Burger } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { theme } from './theme.ts'
import styles from './Riyuan.module.css'
import { Nav } from '@/personal/riyuan/component/navigation/NavbarNested.tsx'
import { FooterCentered } from '@/personal/riyuan/component/footer/Footer.tsx'

/**
 * This component renders the basic layout of the website
 * Renders the base of the website with the navigation bar and footer
 * Establishes the main layout for the site
 */
export function RiyuanPage() {
  const [opened, { toggle }] = useDisclosure(false)
  const isLargeScreen = useMediaQuery('(min-width: 60em)')
  return (
    <MantineProvider theme={theme}>
      <AppShell className={styles.appshell}>
        <AppShell
          padding="md"
          navbar={{
            width: { base: 200 },
            breakpoint: 'sm',
            collapsed: { mobile: !opened },
          }}
          header={{ height: isLargeScreen ? 0 : 30 }}
        >
          {!isLargeScreen && (
            <AppShell.Header style={{ borderBottom: 'none' }}>
              <Burger
                opened={opened}
                onClick={toggle}
                size="sm"
                color={theme.colors.gray[6]}
              />
            </AppShell.Header>
          )}
          <AppShell.Navbar pl={'lg'} pt={'lg'}>
            <Nav />
          </AppShell.Navbar>

          <AppShell.Main className={styles.AppShellMain}>
            <Outlet />
            <FooterCentered />
          </AppShell.Main>
        </AppShell>
      </AppShell>
    </MantineProvider>
  )
}

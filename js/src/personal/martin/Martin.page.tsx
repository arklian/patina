import { AppShell, Button, MantineProvider, Stack } from '@mantine/core'
import { Link, Outlet } from 'react-router-dom'
import { useDisclosure } from '@mantine/hooks'
import { HeaderNav } from './components/HeaderNav.tsx'
import { theme } from './theme.ts'

export function MartinPage() {
  const [openedNav, { toggle: toggleNav }] = useDisclosure(false)
  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: '5em' }}
        navbar={{
          width: '10em',
          breakpoint: 'sm',
          collapsed: { mobile: !openedNav, desktop: !openedNav },
        }}
        padding="md"
      >
        <HeaderNav open={openedNav} toggleNav={toggleNav} />
        <AppShell.Navbar>
          <Stack justify="center">
            <Link to="/personal/martin">
              <Button fullWidth>{'Home'}</Button>
            </Link>
            <Link to="/personal/martin/about">
              <Button fullWidth>{'About'}</Button>
            </Link>
            <Link to="/personal/martin/project">
              <Button fullWidth>{'Projects'}</Button>
            </Link>
            <Link to="/personal/martin/contact">
              <Button fullWidth>{'Contact'}</Button>
            </Link>
          </Stack>
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  )
}

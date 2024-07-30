import { AppShell, Burger, useMantineTheme } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export function AdminPage() {
  const theme = useMantineTheme()
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <AppShell
      padding="md"
      navbar={{
        width: { base: 300 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      header={{ height: 60 }}
    >
      <AppShell.Header>
        <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
          <div>{'Admin Dashboard'}</div>
        </div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <div>{'Admin Navigation'}</div>
      </AppShell.Navbar>

      <AppShell.Main>
        <div>{'Welcome to the Admin Page'}</div>
      </AppShell.Main>
    </AppShell>
  )
}

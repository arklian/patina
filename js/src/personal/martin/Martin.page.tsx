import {AppShell, Burger, Flex, Group, Image, MantineProvider, Title} from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { theme } from './theme.ts'
import Logo from "@/personal/martin/assets/MartinLogo.ico";
import {useDisclosure} from "@mantine/hooks";

export function MartinPage() {
  const [openedNav, { toggle: toggleNav }] = useDisclosure(false);
  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: '5em' }}
        navbar={{
          width: '10em',
          breakpoint:'sm',
          collapsed: { mobile: !openedNav, desktop: !openedNav },
        }}
        padding='md'
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Flex gap="xl" justify="flex-start">
              <Burger opened={openedNav} onClick={toggleNav} />
              <Image w={48} h={48} radius="md" src={ Logo } alt='Martin Logo'/>
              <Title order={1}>{"Martin's Page"}</Title>
            </Flex>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar>
          <Title order={2}>NavBar</Title>
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  )
}

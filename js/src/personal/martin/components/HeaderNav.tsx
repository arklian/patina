import {AppShell, Burger, Button, Flex, Group, Image, Title, Stack} from '@mantine/core'
import Logo from "@/personal/martin/assets/MartinLogo.ico";
import {useDisclosure} from "@mantine/hooks";
import {Link, Outlet} from "react-router-dom";

export function HeaderNav() {
  const [openedNav, { toggle: toggleNav }] = useDisclosure(false);
  return (
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
        <Stack justify="center">
          <Link to='/personal/martin'>
            <Button fullWidth>Home</Button>
          </Link>
          <Link to='/personal/martin/about'>
            <Button fullWidth>About</Button>
          </Link>
          <Link to='/personal/martin/project'>
            <Button fullWidth>Projects</Button>
          </Link>
          <Link to='/personal/martin/contact'>
            <Button fullWidth>Contact</Button>
          </Link>
        </Stack>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet/>
      </AppShell.Main>
    </AppShell>
  )
}

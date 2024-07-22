import { AppShell, Burger, Flex, Group, Image, Title } from '@mantine/core'
import Logo from '@/personal/martin/assets/MartinLogo.ico'

export type propNav = {
  open: boolean
  toggleNav: () => void
}

export function HeaderNav(props: propNav) {
  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        <Flex gap="xl" justify="flex-start">
          <Burger opened={props.open} onClick={props.toggleNav} />
          <Image w={48} h={48} radius="md" src={Logo} alt="Martin Logo" />
          <Title order={1}>{"Martin's Page"}</Title>
        </Flex>
      </Group>
    </AppShell.Header>
  )
}

import {
  AppShell,
  Burger,
  Button,
  Flex,
  Group,
  Image,
  Title,
  useMantineColorScheme,
} from '@mantine/core'
import { IconSun } from '@tabler/icons-react'
import classes from '@/personal/martin/Martin.module.css'
import Logo from '@/personal/martin/assets/MartinLogo.ico'

export type propNav = {
  open: boolean
  toggleNav: () => void
}

export function HeaderNav(props: propNav) {
  const toggleTheme = useMantineColorScheme().toggleColorScheme
  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        <Flex gap="xl" justify="flex-start">
          <Burger opened={props.open} onClick={props.toggleNav} />
          <Image w={48} h={48} radius="md" src={Logo} alt="Martin Logo" />
          <Title order={1}>{"Martin's Page"}</Title>
        </Flex>
        <Button
          variant="light"
          className={classes.themeButton}
          onClick={() => toggleTheme()}
        >
          <IconSun />
        </Button>
      </Group>
    </AppShell.Header>
  )
}

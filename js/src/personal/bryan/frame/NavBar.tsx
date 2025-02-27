import { Link } from 'react-router-dom'
import {
  Container,
  Group,
  Burger,
  Drawer,
  ScrollArea,
  NavLink,
  Text,
  Space,
  Button,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Settings } from '@/personal/bryan/settings/Settings.tsx'
import classes from '@/personal/bryan/Bryan.module.css'

const links = [
  {
    link: '/personal/bryan/projects',
    text: 'Projects',
  },
  {
    link: '/personal/bryan/aboutme',
    text: 'About Me',
  },
]

/** component to create a navbar in the header */
export function NavBar() {
  const [opened, { toggle, close }] = useDisclosure(false)
  const items = links.map((link: { link: string; text: string }) => (
    <Button
      component={Link}
      key={link.text}
      to={link.link}
      className={classes.link}
    >
      {link.text}
    </Button>
  ))
  const navbar = (
    <>
      <Group gap={50} visibleFrom="sm">
        <Button
          component={'a'}
          href={'/personal/bryan'}
          className={classes.link}
        >
          {'Home'}
        </Button>
        {items}
        <Settings />
      </Group>
      <Burger opened={opened} onClick={toggle} size="md" hiddenFrom="sm" />
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        position={'right'}
        closeButtonProps={{ size: 'xl', mr: 24 }}
      >
        <ScrollArea>
          <NavLink
            href={'/'}
            label={<Text size={'xl'}>{'Home'}</Text>}
            leftSection={<Space w={10} />}
          />
          {links.map((link: { link: string; text: string }) => (
            <NavLink
              href={link.link}
              label={<Text size={'xl'}>{link.text}</Text>}
              leftSection={<Space w={10} />}
            />
          ))}
        </ScrollArea>
      </Drawer>
    </>
  )
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        {navbar}
      </Container>
    </header>
  )
}

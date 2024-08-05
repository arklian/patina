import {
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Text,
  Drawer,
  ScrollArea,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import { LinksGroup } from './NavbarLinksGroup.tsx'
import classes from './NavBar.module.css'
import { PatinaBadge } from '@/patina/components/PatinaBadge.tsx'

const links = [
  // {
  //   link: '',
  //   label: 'About',
  //   links: [
  //     { link: '/mission', label: 'Mission' },
  //     { link: '/team', label: 'Team' },
  //   ],
  // },
  {
    link: '',
    label: 'Programs',
    links: [
      { link: '/mentorship', label: 'Mentorship' },
      { link: '/scholarship', label: 'Scholarship' },
    ],
  },
  {
    link: '',
    label: 'Get Involved',
    links: [
      { link: '/mentor', label: 'Mentor' },
      // { link: '/community', label: 'Community' },
      { link: '/volunteer', label: 'Volunteer' },
    ],
  },
  // { label: 'Stay Informed' },
  { link: '', label: 'Blog' },
  // { label: 'Donate' },
]

// NavBar component renders the navigation bar with links and dropdown menus.
export function NavBar() {
  const [opened, { toggle, close }] = useDisclosure(false)

  /**
   * Generates menu items and links for the navigation bar.
   * If a link has nested links, a dropdown menu is created.
   */
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <a key={item.link} href={item.link} className={classes.dropDownItem}>
        <Menu.Item>{item.label}</Menu.Item>
      </a>
    ))

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          position={'bottom-start'}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <div className={classes.link}>
              <Center>
                <Text className={classes.linkLabel}>{link.label}</Text>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </div>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }

    return link.link ?
        <a key={link.label} href={link.link} className={classes.link}>
          {link.label}
        </a>
      : <span key={link.label} className={classes.link}>
          {link.label}
        </span>
  })
  const mobilelinks = links.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ))
  return (
    <header className={classes.header}>
      <Container size="75rem">
        {/* 75rem == 1200px */}
        <div className={classes.inner}>
          <a href={'/'} className={classes.link}>
            <PatinaBadge />
          </a>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        position={'right'}
      >
        <ScrollArea>
          <Group className={classes.mobile}>{mobilelinks}</Group>
        </ScrollArea>
      </Drawer>
    </header>
  )
}

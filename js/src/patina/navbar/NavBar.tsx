import { Menu, Group, Center, Burger, Container } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './NavBar.module.css'

const links = [
  {
    link: '/about',
    label: 'About',
    links: [
      { link: '/mission', label: 'Mission' },
      { link: '/team', label: 'Team' },
    ],
  },
  {
    link: '/Program',
    label: 'Program',
    links: [
      { link: '/mentorship', label: 'Mentorship' },
      { link: '/scholarship', label: 'Scholarship' },
      { link: '/stuff5', label: 'stuff' },
      { link: '/stuff6', label: 'stuff' },
    ],
  },
  {
    link: '/GetInvolved',
    label: 'Get Involved',
    links: [
      { link: '/stuff7', label: 'stuff' },
      { link: '/stuff8', label: 'stuff' },
      { link: '/stuff9', label: 'stuff' },
      { link: '/stuff10', label: 'stuff' },
    ],
  },
  {
    link: '/StayInformed',
    label: 'Stay Informed',
    links: [
      { link: '/stuff11', label: 'stuff' },
      { link: '/stuff12', label: 'stuff' },
      { link: '/stuff13', label: 'stuff' },
      { link: '/stuff14', label: 'stuff' },
    ],
  },
  { link: '/Blog', label: 'Blog' },
  { link: '/Donate', label: 'Donate' },
]

//NavBar component renders the navigation bar with links and dropdown menus.
export function NavBar() {
  const [opened, { toggle }] = useDisclosure(false)

  /**
   * Generates menu items and links for the navigation bar.
   * If a link has nested links, a dropdown menu is created.
   */
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>
        <a href={item.link} className={classes.dropDownItem}>
          {item.label}
        </a>
      </Menu.Item>
    ))

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <Menu.Target>
            <a href={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      )
    }

    return (
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    )
  })

  return (
    <header className={classes.header}>
      <Container size="75rem">
        {/* 75rem == 1200px */}
        <div className={classes.inner}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  )
}

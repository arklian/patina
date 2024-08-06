import {
  Menu,
  Group,
  Center,
  Burger,
  Text,
  Drawer,
  ScrollArea,
  UnstyledButton,
  Affix,
  Space,
  NavLink,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'
import { MobileNavBar } from './MobileNavBar.tsx'
import classes from './NavBar.module.css'
import { PatinaBadge } from '@/patina/components/PatinaBadge.tsx'
import { ContentPage } from '@/patina/components/ContentPage.tsx'

const links = [
  {
    link: '',
    label: 'About',
    subLinks: [
      { link: '/mission', label: 'Mission' },
      { link: '/team', label: 'Team' },
    ],
  },
  {
    link: '',
    label: 'Programs',
    subLinks: [
      { link: '/mentorship', label: 'Mentorship' },
      { link: '/scholarship', label: 'Scholarship' },
    ],
  },
  {
    link: '',
    label: 'Get Involved',
    subLinks: [
      { link: '/mentor', label: 'Mentor' },
      // { link: '/community', label: 'Community' },
      { link: '/volunteer', label: 'Volunteer' },
    ],
  },
  // { label: 'Stay Informed' },
  { link: '/blog', label: 'Blog' },
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
    // Link group
    if (link.subLinks) {
      return (
        <Menu
          key={link.label}
          position={'bottom-start'}
          trigger="click-hover"
          loop={false}
          withinPortal={false}
          trapFocus={false}
          menuItemTabIndex={0}
          transitionProps={{ exitDuration: 0 }}
        >
          <Menu.Target>
            <UnstyledButton className={classes.link}>
              <Center>
                <Text className={classes.linkLabel}>{link.label}</Text>
                <IconChevronDown size="16" stroke={1.5} />
              </Center>
            </UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            {link.subLinks?.map((subLink) => (
              <Menu.Item
                component={'a'}
                key={subLink.label}
                href={subLink.link}
                className={classes.dropDownItem}
              >
                {subLink.label}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
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

  return (
    <>
      <Affix position={{ top: 0 }} w={'100%'}>
        <header className={classes.header}>
          <ContentPage>
            <div className={classes.inner}>
              <UnstyledButton
                component={'a'}
                href={'/'}
                className={classes.link}
              >
                <PatinaBadge />
              </UnstyledButton>
              <Group gap={5} visibleFrom="xs">
                {items}
              </Group>
              <Burger
                opened={opened}
                onClick={toggle}
                size="md"
                hiddenFrom="xs"
              />
            </div>
          </ContentPage>
          <Drawer
            opened={opened}
            onClose={close}
            size="100%"
            padding="md"
            hiddenFrom="xs"
            position={'right'}
          >
            <ScrollArea>
              <NavLink
                href={'/'}
                label={<Text size={'xl'}>{'Home'}</Text>}
                leftSection={<Space w={10} />}
                /*rightSection={
                  <Box pr={24}>
                    <FaLongArrowAltRight size={24} stroke={'1.5rem'} />
                  </Box>
                }*/
              />
              {links.map((item) => (
                <MobileNavBar {...item} key={item.label} />
              ))}
            </ScrollArea>
          </Drawer>
        </header>
      </Affix>
      <div className={classes.headerPlaceholder} />
    </>
  )
}

import { Group, ScrollArea, Text } from '@mantine/core'
import {
  faHouse,
  faPerson,
  faFolder,
  faIdCard,
} from '@fortawesome/free-solid-svg-icons'
import { NavbarLinksGroup } from './NavbarLinksGroup.tsx'
import classes from './NavbarNested.module.css'

const mockdata = [
  { label: 'Home', icon: faHouse, link: '/personal/riyuan' },
  {
    label: 'About',
    icon: faPerson,
    subLinks: [
      { link: '/personal/riyuan/about#About', label: 'Who I am' },
      { link: '/personal/riyuan/about#Experience', label: 'Experience' },
    ],
  },
  { label: 'Project', icon: faFolder, link: '/personal/riyuan/projects' },
  { label: 'Contact', icon: faIdCard, link: '/personal/riyuan/contact' },
]

export function Nav() {
  const links = mockdata.map((item) => (
    <NavbarLinksGroup {...item} key={item.label} />
  ))

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Text> {'Riyuan Liu'}</Text>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    </nav>
  )
}

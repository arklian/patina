import { Group } from '@mantine/core'
import { NavLink } from './NavLink.tsx'
import styles from '../Haoking.module.css'
import { Pages } from '../pages.ts'

/* Component for a navbar to lead to different pages*/
export function Navbar({
  current,
  setCurrent,
}: {
  current: Pages
  setCurrent: any
}) {
  const pages = [
    { link: '', label: Pages.About },
    { link: '#projects', label: Pages.Project },
    { link: '#misc', label: Pages.Misc },
  ]

  return (
    <nav>
      <Group
        pt={12}
        justify="space-between"
        className={styles.animate_fade_in_navbar}
      >
        <Group
          pl={100}
          justify="flex-start"
        >
          <NavLink
            setActive={() => {}}
            active={current}
            link={'..'}
            label={Pages.Patina}
          />
        </Group>
        <Group
          pr={220}
          justify="flex-end"
          gap={35}
        >
          {pages.map((page) => (
            <NavLink
              setActive={() => setCurrent(page.label)}
              active={current}
              link={page.link}
              label={page.label}
            />
          ))}
        </Group>
      </Group>
    </nav>
  )
}

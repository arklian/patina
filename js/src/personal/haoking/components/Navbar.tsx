import {
  Group,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from '@mantine/core'
import { IconSunFilled, IconMoonFilled } from '@tabler/icons-react'
import { NavLink } from '@/personal/haoking/components/NavLink.tsx'
import styles from '@/personal/haoking/Haoking.module.css'
import { Pages } from '@/personal/haoking/pages.ts'
import { theme } from '@/personal/haoking/theme.ts'

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
  const colorScheme = useComputedColorScheme()
  const { toggleColorScheme } = useMantineColorScheme()

  return (
    <nav>
      <Group
        pt={12}
        justify="space-between"
        className={styles.animate_fade_in_navbar}
      >
        <Group pl={100} justify="flex-start">
          <NavLink
            setActive={() => {}}
            active={current}
            link={'..'}
            label={Pages.Patina}
          />
        </Group>
        <Group pr={220} justify="flex-end" gap={35}>
          {pages.map((page) => (
            <NavLink
              setActive={() => setCurrent(page.label)}
              active={current}
              link={page.link}
              label={page.label}
            />
          ))}
          <ActionIcon
            onClick={() => toggleColorScheme()}
            variant="transparent"
            color={
              colorScheme === 'light' ?
                theme.colors.accent[2]
              : theme.colors.white[2]
            }
          >
            {colorScheme === 'light' && <IconMoonFilled size={24} />}
            {colorScheme === 'dark' && <IconSunFilled size={24} />}
          </ActionIcon>
        </Group>
      </Group>
    </nav>
  )
}

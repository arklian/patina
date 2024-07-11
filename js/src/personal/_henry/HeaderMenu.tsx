import { Autocomplete, Group, Burger, rem, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconSearch, IconHome2 } from '@tabler/icons-react'
import classes from './HeaderMenu.module.css'

const linkBase = '/henry'
const links = [
  { link: '/about', label: 'About Me' },
  { link: '/projects', label: 'Projects' },
  { link: '/blog', label: 'Blog' },
]

/**
 * The component for the top navigation bar across the pages.
 */
export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false)

  const items = links.map((link) => (
    <a
      key={link.label}
      href={linkBase + link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()} // Remove once pages are created.
    >
      {link.label}
    </a>
  ))

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <IconHome2 style={{ width: rem(32), height: rem(32) }} stroke={1.5} />
          <Text size={'xl'} fw={700} c={'indigo.9'}>
            {"Henry's Page"}
          </Text>
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            data={['Blog Topic 1']}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  )
}

import { useState } from 'react'
import { Container, Group, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Link } from 'react-router-dom' // Import the Link component from react-router-dom
import classes from './HeaderSimple.module.css'

const links = [
  { link: '..', label: 'Home' },
  { link: './aboutme', label: 'About Me' },
  { link: './projects', label: 'Projects' },
  { link: './resume', label: 'Resume' },
  { link: './contact', label: 'Contact' },
]

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState(links[0].link)

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link} // Use the "to" prop instead of "href"
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => setActive(link.link)} // Remove event.preventDefault(), allow default behavior
    >
      {link.label}
    </Link>
  ))

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  )
}

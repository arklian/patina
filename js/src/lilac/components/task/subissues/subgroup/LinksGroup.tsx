import { useState } from 'react'
import { Group, Box, Collapse, Text, UnstyledButton, rem } from '@mantine/core'
import { IconCaretRightFilled } from '@tabler/icons-react'
import classes from './LinksGroup.module.css'

interface LinksGroupProps {
  label: string
  initiallyOpened?: boolean
  links?: { label: string; link: string }[]
}

function LinksGroup({ label, initiallyOpened, links }: LinksGroupProps) {
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const items = (hasLinks ? links : []).map((link) => (
    <Text
      component="a"
      className={classes.link}
      href={link.link}
      key={link.label}
    >
      {link.label}
    </Text>
  ))

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group gap={0} className={classes.top}>
          {hasLinks && (
            <IconCaretRightFilled
              className={classes.chevron}
              stroke={1.5}
              style={{
                width: rem(16),
                height: rem(16),
                transform: opened ? 'rotate(90deg)' : 'none',
              }}
            />
          )}
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <Box ml="md">{label}</Box>
          </Box>
        </Group>
      </UnstyledButton>
      {hasLinks ?
        <Collapse in={opened}>{items}</Collapse>
      : null}
    </>
  )
}

const mockdata = {
  label: 'Sub-issues',
  links: [
    { label: 'Upcoming releases', link: '' },
    { label: 'Previous releases', link: '' },
    { label: 'Releases schedule', link: '' },
  ],
}

export function NavbarLinksGroup() {
  return (
    <Box>
      <LinksGroup {...mockdata} />
    </Box>
  )
}

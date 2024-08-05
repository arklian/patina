import { useState } from 'react'
import {
  Group,
  Box,
  Collapse,
  UnstyledButton,
  Flex,
  NavLink,
  Space,
} from '@mantine/core'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { IconChevronRight } from '@tabler/icons-react'
import classes from './NavbarLinksGroup.module.css'

interface LinksGroupProps {
  label: string
  link?: string
  subLinks?: { label: string; link: string }[]
}

export function LinksGroup({ label, link, subLinks }: LinksGroupProps) {
  const [opened, setOpened] = useState(true)
  const SubLinks = (subLinks || []).map((subLink) => (
    <NavLink
      href={subLink.link}
      key={subLink.label}
      label={subLink.label}
      leftSection={<Space w={36} />}
      rightSection={
        <Box pr={24}>
          <FaLongArrowAltRight size={24} stroke={'1.5rem'} />
        </Box>
      }
    />
  ))

  return (
    <>
      {link && (
        <NavLink
          href={link}
          key={label}
          label={label}
          className={classes.singleLink}
          leftSection={<Space w={36} />}
          rightSection={
            <Box pr={24}>
              <FaLongArrowAltRight size={24} stroke={'1.5rem'} />
            </Box>
          }
        />
      )}
      {subLinks && (
        <>
          <UnstyledButton
            onClick={() => setOpened((o) => !o)}
            className={classes.control}
          >
            <Group justify="space-between" gap={0}>
              <Flex align={'center'} ml="md">
                {link ?
                  <UnstyledButton
                    component={'a'}
                    href={link}
                    className={classes.link}
                  >
                    {label}
                  </UnstyledButton>
                : <Box>{label}</Box>}
              </Flex>
              {subLinks && (
                <IconChevronRight
                  className={classes.chevron}
                  stroke={2}
                  size={24}
                  style={{
                    transform: opened ? 'rotate(90deg)' : 'none',
                  }}
                />
              )}
            </Group>
          </UnstyledButton>
          <Collapse in={opened}>{SubLinks}</Collapse>
        </>
      )}
    </>
  )
}

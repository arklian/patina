import { useState } from 'react'
import {
  Group,
  Box,
  Collapse,
  Text,
  UnstyledButton,
  rem,
  NavLink,
  Space,
} from '@mantine/core'
import { IconChevronRight } from '@tabler/icons-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import classes from './NavbarLinksGroup.module.css'

interface NavbarLinksGroupProps {
  icon: IconDefinition
  label: string
  initiallyOpened?: boolean
  link?: string
  subLinks?: { label: string; link: string }[]
}

export function NavbarLinksGroup({
  icon,
  label,
  link,
  subLinks,
}: NavbarLinksGroupProps) {
  const [opened, setOpened] = useState(false)
  const renderSubLinks = subLinks?.map((subLink) => (
    <NavLink
      key={subLink.label}
      href={subLink.link}
      label={<Text size={'lg'}>{subLink.label}</Text>}
      leftSection={<Space w={36} />}
    />
  ))
  const renderSubLinkToggle = () => (
    <UnstyledButton
      onClick={() => setOpened((prev) => !prev)}
      className={classes.control}
    >
      <Group justify="space-between">
        <NavLink
          key={label}
          label={<Text size={'xl'}>{label}</Text>}
          leftSection={
            <FontAwesomeIcon
              icon={icon}
              style={{ width: rem(18), height: rem(18) }}
            />
          }
          rightSection={
            <Box pr={24}>
              <IconChevronRight
                className={classes.chevron}
                stroke={2}
                size={24}
                style={{ transform: opened ? 'rotate(90deg)' : 'none' }}
              />
            </Box>
          }
        />
      </Group>
    </UnstyledButton>
  )
  return (
    <>
      {link ?
        <NavLink
          href={link}
          label={<Text size={'xl'}>{label}</Text>}
          leftSection={
            <FontAwesomeIcon
              icon={icon}
              style={{ width: rem(18), height: rem(18) }}
            />
          }
        />
      : renderSubLinkToggle()}
      {subLinks && <Collapse in={opened}>{renderSubLinks}</Collapse>}
    </>
  )
}

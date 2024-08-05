import { useState } from 'react'
import {
  Group,
  Box,
  Collapse,
  UnstyledButton,
  NavLink,
  Space,
  Text,
} from '@mantine/core'
//import { FaLongArrowAltRight } from 'react-icons/fa'
import { IconChevronRight } from '@tabler/icons-react'
import classes from './LinksGroup.module.css'

interface LinksGroupProps {
  label: string
  link?: string
  subLinks?: { label: string; link: string }[]
}

export function LinksGroup({ label, link, subLinks }: LinksGroupProps) {
  const [opened, setOpened] = useState(false)

  const renderSubLinks = subLinks?.map((subLink) => (
    <NavLink
      key={subLink.label}
      href={subLink.link}
      label={<Text size={'lg'}>{subLink.label}</Text>}
      leftSection={<Space w={36} />}
      /*rightSection={
        <Box pr={24}>
          <FaLongArrowAltRight size={24} stroke={'1.5rem'} />
        </Box>
      }*/
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
          href={'#required-for-focus'}
          label={<Text size={'xl'}>{label}</Text>}
          leftSection={<Space w={10} />}
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
          leftSection={<Space w={10} />}
          /*rightSection={
            <Box pr={24}>
              <FaLongArrowAltRight size={24} stroke={'1.5rem'} />
            </Box>
          }*/
        />
      : renderSubLinkToggle()}
      {subLinks && <Collapse in={opened}>{renderSubLinks}</Collapse>}
    </>
  )
}

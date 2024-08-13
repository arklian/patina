import { Group, Flex, ActionIcon } from '@mantine/core'
import { IconHexagonLetterJ } from '@tabler/icons-react'
import styles from './Header.module.css'
import { DarkModeToggle } from './DarkModeToggle.tsx'
import { HoverButton } from './HoverButton.tsx'

export function Header() {
  return (
    <div className={styles.mainContainer}>
      <Flex justify="right" align="center">
        <ActionIcon
          className={styles.icons}
          component={'a'}
          href={'#'}
          variant={'transparent'}
          size={'xl'}
        >
          <IconHexagonLetterJ size={60} stroke={1.25} />
        </ActionIcon>
      </Flex>
      <Flex justify="space-between">
        <Group>
          <HoverButton buttonName="About" buttonLink="#about" />
          <HoverButton buttonName="Experience" buttonLink="#experience" />
          <HoverButton buttonName="Work" buttonLink="#work" />
          <HoverButton buttonName="Contact" buttonLink="#contact" />
          <DarkModeToggle />
        </Group>
      </Flex>
    </div>
  )
}

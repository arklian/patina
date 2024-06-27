import { Group, Flex } from '@mantine/core'
import styles from './Header.module.css'
import { DarkModeToggle } from './DarkModeToggle.tsx'
import { HoverButton } from './HoverButton.tsx'

export function Header() {
  return (
    <div className={styles.mainContainer}>
      <Flex
        justify="right"
        align="center"
      >
        <div className={styles.logo}>{'PlaceHolderLogo'}</div>
      </Flex>
      <Flex justify="space-between">
        <Group>
          <HoverButton
            buttonName="About"
            buttonLink="#about"
          />
          <HoverButton
            buttonName="Experience"
            buttonLink="#experience"
          />
          <HoverButton
            buttonName="Work"
            buttonLink="#work"
          />
          <HoverButton
            buttonName="Contact"
            buttonLink="#contact"
          />
          <DarkModeToggle />
        </Group>
      </Flex>
    </div>
  )
}

import { Group, Button, Flex } from '@mantine/core'
import styles from './Header.module.css'
import { DarkModeToggle } from './DarkModeToggle.tsx'

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
          <Button
            className={styles.button}
            variant="subtle"
            component="a"
            href="#about"
            color={'cyan'}
            size={'md'}
          >
            {'About'}
          </Button>
          <Button
            className={styles.button}
            variant="subtle"
            component="a"
            href="#experience"
            color={'cyan'}
            size={'md'}
          >
            {'Experience'}
          </Button>
          <Button
            className={styles.button}
            variant="subtle"
            component="a"
            href="#work"
            color={'cyan'}
            size={'md'}
          >
            {'Work'}
          </Button>
          <Button
            className={styles.button}
            variant="subtle"
            component="a"
            href="#contact"
            color={'cyan'}
            size={'md'}
          >
            {'Contact'}
          </Button>
          <DarkModeToggle />
        </Group>
      </Flex>
    </div>
  )
}

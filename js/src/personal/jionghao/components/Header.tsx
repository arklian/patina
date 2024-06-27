import { Container, Group, Button, Flex } from '@mantine/core'
import styles from './Header.module.css'
import { DarkModeToggle } from './DarkModeToggle.tsx'

export function Header() {
  return (
    <div className={styles.header}>
      <Container className={styles.mainContainer}>
        <Flex
          justify="right"
          align="center"
        >
          <div className={styles.logo}>{'PlaceHolderLogo'}</div>
        </Flex>
        <Flex
          justify="right"
          align="center"
        >
          <Group>
            <Button
              variant="subtle"
              component="a"
              href="#about"
              color={'cyan'}
            >
              {'About'}
            </Button>
            <Button
              variant="subtle"
              component="a"
              href="#experience"
              color={'cyan'}
            >
              {'Experience'}
            </Button>
            <Button
              variant="subtle"
              component="a"
              href="#work"
              color={'cyan'}
            >
              {'Work'}
            </Button>
            <Button
              variant="subtle"
              component="a"
              href="#contact"
              color={'cyan'}
            >
              {'Contact'}
            </Button>
            <DarkModeToggle />
          </Group>
        </Flex>
      </Container>
    </div>
  )
}

import { Container, Group, Button, Flex } from '@mantine/core'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <Flex
          justify="space-between"
          align="center"
        >
          <div className={styles.logo}>{'PlaceHolderLogo'}</div>
          <Group>
            <Button
              variant="subtle"
              component="a"
              href="#about"
            >
              {'About'}
            </Button>
            <Button
              variant="subtle"
              component="a"
              href="#experience"
            >
              {'Experience'}
            </Button>
            <Button
              variant="subtle"
              component="a"
              href="#work"
            >
              {'Work'}
            </Button>
            <Button
              variant="subtle"
              component="a"
              href="#contact"
            >
              {'Contact'}
            </Button>
          </Group>
        </Flex>
      </Container>
    </header>
  )
}

import { Button, Center, Container, Title } from '@mantine/core'
import { MouseEventHandler } from 'react'
import styles from './Amanda.module.css'

export function LandingPage({ onClick }: { onClick: MouseEventHandler }) {
  return (
    <>
      <Container
        size="responsive"
        className={styles.landingPage}
      >
        <Center>
          <Title
            className={styles.title}
            ta="center"
            mt={100}
          >
            {"Hi! I'm Amanda!"}
          </Title>
        </Center>
        <Center>
          <Button
            size="compact-xl"
            variant="outline"
            onClick={onClick}
          >
            {'start'}
          </Button>
        </Center>
      </Container>
    </>
  )
}

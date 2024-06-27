import { Title, Text, Button, Container, Flex } from '@mantine/core'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <Container className={styles.hero}>
      <Flex
        direction="column"
        align="flex-start"
        justify="center"
      >
        <Title>{"Hello, I'm Jionghao"}</Title>
        <Text size="lg">
          {"I'm a software engineer who specializes in building exceptional"}
          {'digital experiences.'}
        </Text>
        <Button
          component="a"
          href="#work"
        >
          {'Check out my work'}
        </Button>
      </Flex>
    </Container>
  )
}

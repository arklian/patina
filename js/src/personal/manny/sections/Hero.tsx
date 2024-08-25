import { Button, Container, Text, Title } from '@mantine/core'
import styles from '@/personal/manny/sections/Hero.module.css'

export function Hero() {
  return (
    <Container id="hero" className={styles.hero}>
      <Title className={styles.title}>{'Manny Reyes'}</Title>
      <Text className={styles.subtitle}>
        {'Software Engineer | Building meaningful digital experiences'}
      </Text>
      <Button size="md" className={styles.ctaButton}>
        {'View My Work'}
      </Button>
    </Container>
  )
}

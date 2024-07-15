import { Title, Text, Button, Flex } from '@mantine/core'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <div className={styles.hero}>
      <Flex direction="column" align="flex-start" gap={'lg'}>
        <Text size="24px" c={'cyan'}>
          {'Hi, my name is'}
        </Text>
        <Title size={'20px'} className={styles.title}>
          {'Jionghao Wu,'}
          <br />
          {'a dynamic software engineer.'}
        </Title>
        <Text size="lg" className={styles.description}>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  '}
          <br />
          {'do eiusmod tempor incididunt ut labore et dolore magna '}
          <br />
          {'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'}
        </Text>
        <Button component="a" href="#work" variant={'outline'} size={'lg'}>
          {'Check out my resume'}
        </Button>
      </Flex>
    </div>
  )
}

import { Title, Text, Button, Flex } from '@mantine/core'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <div className={styles.hero}>
      <Flex direction="column" align="flex-start" gap={'lg'}>
        <Text size="24px" c={'#74c0fc'}>
          {'Hi, my name is'}
        </Text>
        <Title size={'20px'} className={styles.title}>
          {'Jionghao Wu,'}
          <br />
          {'a dynamic software engineer.'}
        </Title>
        <Text size="lg" className={styles.description}>
          {
            'Hi, I’m Jionghao Wu, a recent graduate with a degree in Computer Science, eager to embark on my journey as a software engineer. I thrive in environments where I can learn and grow, and I’m excited to bring fresh ideas and a strong work ethic to innovative projects.'
          }
        </Text>
        <Button
          component="a"
          href="#work"
          variant={'outline'}
          size={'lg'}
          className={styles.resumeButton}
        >
          {'Check out my resume'}
        </Button>
      </Flex>
    </div>
  )
}

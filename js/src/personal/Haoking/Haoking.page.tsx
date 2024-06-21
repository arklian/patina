import { Title, Text } from '@mantine/core'
import styles from './Haoking.module.css'

export function HaokingPage() {
  return (
    <>
      <Title
        className={styles.title}
        ta="center"
        mt={100}
      >
        Welcome to{' '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'green', to: 'blue' }}
        >
          Haoking's Page
        </Text>
      </Title>
      <Text
        c="dimmed"
        ta="center"
        size="lg"
        maw={580}
        mx="auto"
        mt="xl"
      >
        Hey! I'm Haoking.
      </Text>
    </>
  )
}

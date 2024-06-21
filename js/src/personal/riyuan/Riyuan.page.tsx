import { Title, Text } from '@mantine/core'
import styles from './Riyuan.module.css'

export function RiyuanPage() {
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
          Riyuan's Page
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
        Hey! I'm Riyuan.
      </Text>
    </>
  )
}

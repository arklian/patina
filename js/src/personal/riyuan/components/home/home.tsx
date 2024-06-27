import { Text, Title } from '@mantine/core'
import styles from '@/personal/riyuan/Riyuan.module.css'

export function Home() {
  return (
    <div>
      <Title
        className={styles.title}
        ta="center"
        mt={100}
      >
        {'Welcome to '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'green', to: 'blue' }}
        >
          {"Riyuan's Page"}
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
        {"Hey! I'm Riyuan."}
      </Text>
    </div>
  )
}

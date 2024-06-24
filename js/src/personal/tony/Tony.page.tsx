import { Title, Text } from '@mantine/core'
import styles from './Tony.module.css'


export function TonyPage() {
  return (
    <>
        <div className={styles.background}>
      <Title
        className={styles.title}
        ta="left"
        mt={50}
      >
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'blue', to: 'green' }}
        >
          Tony Wang
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
        Hey! I'm Tony.
      </Text>
    </div>
    </>
  )
}

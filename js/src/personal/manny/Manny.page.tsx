import { Title, Text } from '@mantine/core'
import styles from './Manny.module.css'

export function MannyPage() {
  return (
    <>
      <Title
        className={styles.title}
        ta="center"
        mt={100}
      >
        {'Welcome to'}{' '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'green', to: 'blue' }}
        >
          {"Manny's Page"}
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
        {"Hey! I'm Manny."}
      </Text>
    </>
  )
}

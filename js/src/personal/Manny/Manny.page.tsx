
import { Title, Text, MantineProvider } from '@mantine/core'
import styles from './Manny.module.css'
import { theme } from './theme.ts'

export function MannyPage() {
  return (
    <MantineProvider theme={theme}>
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
    </MantineProvider>
  )
}

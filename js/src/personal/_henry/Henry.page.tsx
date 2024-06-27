import { Title, Text, MantineProvider } from '@mantine/core'
import { cssVariableResolver, theme } from './theme'

import styles from './Henry.module.css'

export function HenryPage() {
  return (
    <MantineProvider
      theme={theme}
      cssVariablesResolver={cssVariableResolver}
    >
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
          {"Henry's Page"}
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
        {"Hey! I'm Henry."}
      </Text>
    </MantineProvider>
  )
}

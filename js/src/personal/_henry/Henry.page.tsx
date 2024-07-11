import { Title, Text, MantineProvider } from '@mantine/core'
import { HeaderMenu } from './HeaderMenu'
import { cssVariableResolver, theme } from './theme'

import styles from './Henry.module.css'

export function HenryPage() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={cssVariableResolver}>
      <HeaderMenu />
      <Title className={styles.title} ta="center" mt={100}>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'indigo', to: 'blue' }}
        >
          {"Welcome to Henry's Page"}
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        {"Hey! I'm Henry."}
      </Text>
    </MantineProvider>
  )
}

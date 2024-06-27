import { Text, Container, Group, MantineProvider } from '@mantine/core'
import { TimeDisplay } from './TimeDisplay.tsx'
import { Settings } from './Settings.tsx'
import classes from './Bryan.module.css'
import { theme } from './theme.ts'

export function BryanPage() {
  return (
    <MantineProvider theme={theme}>
      <header className={classes.header}>
        <Container
          size="md"
          className={classes.inner}
        >
          <Settings />
          <Group
            gap={5}
            visibleFrom="xs"
          >
            {'bloop'}
          </Group>
        </Container>
      </header>
      <TimeDisplay />
      <Text
        c="blue"
        ta="center"
        size="xl"
        maw={580}
        mx="auto"
        mt="md"
      >
        {"Hey! I'm Bryan."}
      </Text>
    </MantineProvider>
  )
}

import { Text, MantineProvider } from '@mantine/core'
import { TimeDisplay } from './TimeDisplay.tsx'
import { theme } from './theme.ts'
import { Status } from './Status.tsx'
import { NavBar } from './NavBar.tsx'
import { Socials } from './Socials.tsx'

export function BryanPage() {
  return (
    <MantineProvider theme={theme}>
      <NavBar />
      <TimeDisplay />
      <Text
        c="blue"
        ta="center"
        size="md"
        maw={580}
        mx="auto"
        mt="md"
      >
        {"Hey! I'm Bryan."}
      </Text>
      <Status />
      <Socials />
    </MantineProvider>
  )
}

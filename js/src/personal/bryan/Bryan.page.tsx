import { Text } from '@mantine/core'
import { TimeDisplay } from './TimeDisplay.tsx'
import { Settings } from './Settings.tsx'

export function BryanPage() {
  return (
    <>
      <Settings />
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
    </>
  )
}

import { Text } from '@mantine/core'
import { DateDisplay } from './DateDisplay.tsx'
import { Status } from './Status.tsx'

export function MainPage() {
  return (
    <>
      <DateDisplay />
      <Text c="blue" ta="center" size="md" maw={580} mx="auto" mt="md">
        {"Hey! I'm Bryan."}
      </Text>
      <Status />
    </>
  )
}

import { Text } from '@mantine/core'
import { TimeDisplay } from './TimeDisplay.tsx'
import { Status } from './Status.tsx'
import { Socials } from './Socials.tsx'

export function MainPage() {
  return (
    <>
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
    </>
  )
}

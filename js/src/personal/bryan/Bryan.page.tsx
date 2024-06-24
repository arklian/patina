import { Text } from '@mantine/core'
import { TimeDisplay } from './TimeDisplay.tsx'

export function BryanPage() {
  return (
    <>
      <TimeDisplay />
      <Text
        c="blue"
        ta="center"
        size="xl"
        maw={580}
        mx="auto"
        mt="md"
      >
        {'Hey! I\'m Bryan.'}
      </Text>
    </>
  )
}

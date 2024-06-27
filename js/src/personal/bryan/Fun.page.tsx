import { Text } from '@mantine/core'
import { Socials } from './Socials.tsx'

export function FunPage() {
  return (
    <>
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
      <Socials />
    </>
  )
}

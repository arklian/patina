import { Text, Space } from '@mantine/core'

export function AboutMePage() {
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
        <Space h="xs" />
        {'This it the about me section :))'}
      </Text>
    </>
  )
}

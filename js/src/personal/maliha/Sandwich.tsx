import { Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

export function Sandwich() {
  const [opened, { toggle }] = useDisclosure()
  return (
    <Burger
      opened={opened}
      onClick={toggle}
      aria-label="Toggle navigation"
      size={50}
      color="#662100"
    />
  )
}

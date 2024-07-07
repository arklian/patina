import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core'
import { TbMoon, TbSun } from 'react-icons/tb'

export function LightDarkButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        variant="light"
        size="xl"
        aria-label="Toggle color scheme"
      >
        {colorScheme === 'light' && <TbSun />}
        {colorScheme === 'dark' && <TbMoon />}
      </ActionIcon>
    </Group>
  )
}

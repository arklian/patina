import { Title, Text, MantineProvider } from '@mantine/core'
import { theme } from '@/personal/martin/theme.ts'

export function MartinMain() {
  return (
    <MantineProvider theme={theme}>
      <Title order={1}>{'Main'}</Title>
      <Text fw={500}>{'Main Page'}</Text>
    </MantineProvider>
  )
}

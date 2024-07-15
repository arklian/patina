import { Title, Text, MantineProvider } from '@mantine/core'
import { theme } from '@/personal/martin/theme.ts'

export function MartinProject() {
  return (
    <MantineProvider theme={theme}>
      <Title order={1}>{'Projects'}</Title>
      <Text fw={500}>{'Project Page'}</Text>
    </MantineProvider>
  )
}

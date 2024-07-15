import { Title, Text, MantineProvider } from '@mantine/core'
import { theme } from '@/personal/martin/theme.ts'

export function MartinAbout() {
  return (
    <MantineProvider theme={theme}>
      <Title order={1}>{'About'}</Title>
      <Text fw={500}>{'About Page'}</Text>
    </MantineProvider>
  )
}

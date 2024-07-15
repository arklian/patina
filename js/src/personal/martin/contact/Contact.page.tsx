import { Title, Text, MantineProvider } from '@mantine/core'
import { theme } from '@/personal/martin/theme.ts'

export function MartinContact() {
  return (
    <MantineProvider theme={theme}>
      <Title order={1}>{'Contact'}</Title>
      <Text fw={500}>{'Contact Page'}</Text>
    </MantineProvider>
  )
}

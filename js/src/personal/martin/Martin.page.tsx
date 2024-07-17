import {
  Container,
  Image,
  Title,
  Text,
  MantineProvider
} from '@mantine/core'
import { theme } from './theme.ts'

export function MartinPage() {
  return (
    <MantineProvider theme={theme}>
      <Container size="responsive" bg="var(--mantine-color-blue-light)">
        <Image w={32} h={32} radius="sm" src="https://m-squared47.github.io/content/logo.ico"/>
        <Title order={1}>{"Header"}</Title>
        <Text fw={500}>{"Logos and NavBar Here"}</Text>
      </Container>

    </MantineProvider>
  )
}

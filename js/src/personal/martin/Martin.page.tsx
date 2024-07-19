import {
  Container,
  Flex,
  Image,
  Title,
  MantineProvider
} from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { theme } from './theme.ts'
import {Outlet} from "react-router-dom";

export function MartinPage() {
  return (
    <MantineProvider theme={theme}>
      <Container size="responsive" bg="cobalt">
        <Flex gap="xl" justify="flex-start">
          <Image w={32} h={32} radius="sm" src="https://m-squared47.github.io/content/logo.ico"/>
          <Title order={1}>{"Martin's Page"}</Title>
        </Flex>
      </Container>
      <Outlet/>
    </MantineProvider>
  )
}

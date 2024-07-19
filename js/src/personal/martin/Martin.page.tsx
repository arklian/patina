import { Title, Text, MantineProvider } from '@mantine/core'
import { theme } from './theme.ts'
import {Outlet} from "react-router-dom";

export function MartinPage() {
  return (
    <MantineProvider theme={theme}>
      <Title order={1}>{"Martin's Page"}</Title>
      <Text fw={500}>{"Welcome to Martin's Page"}</Text>
      <Outlet/>
    </MantineProvider>
  )
}

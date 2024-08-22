import { Button, Container, Stack, TextInput, Title } from '@mantine/core'

export function BlogtagAdminPage() {
  return (
    <Container>
      <Title>{'Blog Tags'}</Title>
      <Stack w={'100%'}>
        <Title order={3}>{'Add Blog Tag'}</Title>
        <TextInput label={'Name'} />
        <Button type="submit">{'Submit'}</Button>
      </Stack>
    </Container>
  )
}

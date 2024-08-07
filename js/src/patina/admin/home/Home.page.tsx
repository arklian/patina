import { Container, Stack, Title, Card, Text, Grid } from '@mantine/core'

export function HomePage() {
  return (
    <Container>
      <Stack>
        {/* Title */}
        <Title order={1}>{'Admin Dashboard'}</Title>

        {/* Dashboard Metrics */}
        <Grid gutter="md">
          <Grid.Col span={12}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3}>{'Blog Posted'}</Title>
              <Text size="xl">{'5'}</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={12}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3}>{'Event Hosted'}</Title>
              <Text size="xl">{'5'}</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={12}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3}>{'Total User'}</Title>
              <Text size="xl">{'10'}</Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  )
}

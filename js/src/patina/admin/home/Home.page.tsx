import { Container, Stack, Title, Card, Text, Grid } from '@mantine/core'
import { useQuery } from 'react-query'

export function HomePage() {
  const fetchCount = async (url) => {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return data.count
  }

  const { data: blogCount = 0 } = useQuery('blogCount', () =>
    fetchCount('/api/admin/blogs/count'),
  )
  const { data: eventCount = 0 } = useQuery('eventCount', () =>
    fetchCount('/api/admin/events/count'),
  )
  const { data: userCount = 0 } = useQuery('userCount', () =>
    fetchCount('/api/admin/user/count'),
  )

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
              <Text size="xl">{blogCount}</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={12}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3}>{'Event Hosted'}</Title>
              <Text size="xl">{eventCount}</Text>
            </Card>
          </Grid.Col>
          <Grid.Col span={12}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3}>{'Total User'}</Title>
              <Text size="xl">{userCount}</Text>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  )
}

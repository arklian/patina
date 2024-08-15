import { useState, useEffect } from 'react'
import { Container, Stack, Title, Card, Text, Grid } from '@mantine/core'

export function HomePage() {
  const [blogCount, setBlogCount] = useState(0)
  const [eventCount, setEventCount] = useState(0)
  const [userCount, setUserCount] = useState(0)

  useEffect(() => {
    // Fetch the blog count from the endpoint
    const fetchBlogCount = async () => {
      const response = await fetch('/api/admin/blogs/size')
      if (response.ok) {
        const data = await response.json()
        setBlogCount(data.count)
      }
    }

    const fetchEventCount = async () => {
      const response = await fetch('/api/admin/events/size')
      if (response.ok) {
        const data = await response.json()
        setEventCount(data.count)
      }
    }

    const fetchUserCount = async () => {
      const response = await fetch('/api/admin/user/size')
      if (response.ok) {
        const data = await response.json()
        setUserCount(data.count)
      }
    }

    fetchBlogCount()
    fetchEventCount()
    fetchUserCount()
  }, [])

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
              <Text size="xl">{eventCount}</Text>{' '}
            </Card>
          </Grid.Col>
          <Grid.Col span={12}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3}>{'Total User'}</Title>
              <Text size="xl">{userCount}</Text>{' '}
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  )
}

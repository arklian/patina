import { useState, useEffect } from 'react'
import { Container, Stack, Title, Card, Text, Grid } from '@mantine/core'

export function HomePage() {
  const [blogCount, setBlogCount] = useState(0)
  const [eventCount] = useState(0) // Replace with actual fetch if needed
  const [userCount] = useState(0) // Replace with actual fetch if needed

  useEffect(() => {
    // Fetch the blog count from the endpoint
    const fetchBlogCount = async () => {
      try {
        const response = await fetch('/api/admin/blogs/size')
        if (response.ok) {
          const data = await response.json()
          setBlogCount(data.count)
        } else {
          console.error('Failed to fetch blog count')
        }
      } catch (error) {
        console.error('Error fetching blog count:', error)
      }
    }

    fetchBlogCount()
    // Fetch the event count and user count here if endpoints are available
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
              {/* Replace with actual data */}
            </Card>
          </Grid.Col>
          <Grid.Col span={12}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Title order={3}>{'Total User'}</Title>
              <Text size="xl">{userCount}</Text>{' '}
              {/* Replace with actual data */}
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  )
}

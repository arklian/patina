import { Stack, Title } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { BlogDataTable } from './BlogDataTable.tsx'

export function EditBlog() {
  const blogsResp = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ limit: 10, page: 1 }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    },
  })

  return (
    <Stack>
      <Title order={3}>{'Edit Blog'}</Title>
      <BlogDataTable records={blogsResp.data?.blogs} />
    </Stack>
  )
}

import { Loader, Stack, Title } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { BlogDataTable } from './BlogDataTable.tsx'

export function EditBlogSection() {
  const [activePage, setActivePage] = useState(1)
  const [limit, setLimit] = useState(10)

  const blogsResp = useQuery({
    queryKey: ['blogs', limit, activePage],
    queryFn: async () => {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ limit: Number(limit), page: activePage }),
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
      {blogsResp.status === 'success' ?
        <BlogDataTable
          records={blogsResp.data?.blogs}
          total={blogsResp.data?.total}
          page={activePage}
          setPage={setActivePage}
          limit={limit}
          setLimit={setLimit}
        />
      : <Loader />}
    </Stack>
  )
}

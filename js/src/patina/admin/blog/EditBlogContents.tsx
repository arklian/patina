import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const fetchBlogById = async (blogId: number) => {
  const response = await fetch(`/api/blog/${blogId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }
  return response.json()
}

export function EditBlogContents({ blogId }: { blogId: number }) {
  const blogData = useQuery({
    queryKey: ['blog', blogId],
    queryFn: () => fetchBlogById(blogId),
  })
  /*
  const [author, setName] = useState(blogData.data?.author)
  const [title, setTitle] = useState(blogData.data?.title)
  const [content, setContent] = useState(blogData.data?.content)
  const [image, setImage] = useState(blogData.data?.image)
  */
  return <></>
}

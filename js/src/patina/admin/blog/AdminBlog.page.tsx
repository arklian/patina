import { TextInput, Button, Stack, Title, Container } from '@mantine/core'
import { useState } from 'react'
import { ContentEditor } from './ContentEditor.tsx'

export function BlogAdminPage() {
  const [author, setName] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log('Name:', author)
    console.log('Title:', title)
    console.log('Content:', content)
    console.log('Image:', image)
    const formData = { author, title, content, image }

    try {
      // Make the fetch request
      const response = await fetch('/api/admin/blog/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      // Check if the response is successful
      if (response.ok) {
        const data = await response.json()
        if (data.status === 'Success') {
          console.log('Success:', data)
          // Handle the successful response here
        } else {
          console.error('Error:', data.message)
          // Handle the error response here
        }
      } else {
        console.error('HTTP error:', response.statusText)
        // Handle the HTTP error response here
      }
    } catch (error) {
      console.error('Fetch error:', error)
      // Handle the fetch error here
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Title>{'Blog'}</Title>
        <Stack w={'100%'}>
          <Title order={3}>{'Add Blog'}</Title>
          <TextInput
            label={'Author'}
            value={author}
            onChange={(event) => setName(event.currentTarget.value)}
            required
          />
          <TextInput
            label={'Title'}
            value={title}
            onChange={(event) => setTitle(event.currentTarget.value)}
            required
          />
          <TextInput
            label={'Header Image Url'}
            value={image}
            onChange={(event) => setImage(event.currentTarget.value)}
            required
          />
          <ContentEditor setContent={setContent} />
          <Button type="submit">{'Submit'}</Button>
        </Stack>
      </form>
    </Container>
  )
}

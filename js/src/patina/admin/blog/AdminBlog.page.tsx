import { Container, TextInput, Textarea, Button, Stack } from '@mantine/core'
import { useState } from 'react'

export function BlogAdminPage() {
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log('Name:', name)
    console.log('Title:', title)
    console.log('Content:', content)
    const formData = { name, title, content }

    try {
      // Make the fetch request
      const response = await fetch('/api/blog/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      // Check if the response is successful
      if (response.ok) {
        const data = await response.json()
        console.log('Success:', data)
        // Handle the successful response here
      } else {
        console.error('Error:', response.statusText)
        // Handle the error response here
      }
    } catch (error) {
      console.error('Fetch error:', error)
      // Handle the fetch error here
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Stack>
          <TextInput
            label="Name"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
            required
          />
          <TextInput
            label="Title"
            value={title}
            onChange={(event) => setTitle(event.currentTarget.value)}
            required
          />
          <Textarea
            label={'Content'}
            value={content}
            onChange={(event) => setContent(event.currentTarget.value)}
            minRows={2}
            autosize
            required
          />
          <Button type="submit">{'Submit'}</Button>
        </Stack>
      </form>
    </Container>
  )
}

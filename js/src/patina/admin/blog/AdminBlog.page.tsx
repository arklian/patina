import {
  TextInput,
  Button,
  Stack,
  Title,
  Container,
  Divider,
} from '@mantine/core'
import { useState } from 'react'
import { notifications } from '@mantine/notifications'
import { ContentEditor } from './ContentEditor.tsx'
import { EditBlogSection } from './EditBlogSection.tsx'

export function BlogAdminPage() {
  const [author, setName] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const formData = { author, title, content, image }

    try {
      const response = await fetch('/api/admin/blog/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        if (data.blog) {
          notifications.show({
            title: 'Blog Submitted',
            message: `Your blog titled: "${data.blog.title}" was successfully submitted!`,
            color: 'green',
            position: 'top-right',
          })
        }
      } else {
        // Handle HTTP errors
        notifications.show({
          title: 'Submission Failed',
          message: 'There was an issue submitting your blog. Please try again.',
          color: 'red',
          position: 'top-right',
        })
      }
    } catch (error) {
      // Handle fetch errors (network issues, etc.)
      notifications.show({
        title: 'Submission Failed',
        message:
          'An error occurred, Please check your connection and try again.',
        color: 'red',
        position: 'top-right',
      })
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Title>{'Blog'}</Title>
        <Divider my="md" />
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
      <Divider my="md" />
      <EditBlogSection />
    </Container>
  )
}

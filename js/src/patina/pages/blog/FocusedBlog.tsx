import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Image, Divider } from '@mantine/core'
import { RichTextEditor } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import { useEffect } from 'react'
import StarterKit from '@tiptap/starter-kit'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import styles from './FocusedBlog.module.css'

/**
 * Component for displaying a specific blog.
 */
export function FocusedBlog() {
  const { id } = useParams()
  const { data, status } = useQuery({
    queryKey: ['blog'],
    queryFn: async () => {
      const response = await fetch(`/api/blog/${id}`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    },
  })
  const blog = data?.blog

  const editor = useEditor({
    extensions: [StarterKit],
    content: 'Loading this blog',
    editable: false,
  })

  useEffect(() => {
    if (status === 'success')
      editor?.commands.setContent(JSON.parse(blog.content))
  }, [status])

  return status === 'success' ?
      <ContentPage>
        <Image src={blog.image} />
        <div className={styles.pillsSection} />
        <div className={styles.blogSection}>
          <div className={styles.titleText}>{blog.title}</div>
          <Divider color={'white'} />
          <RichTextEditor
            classNames={{
              root: styles.editorRoot,
              content: styles.editorContent,
            }}
            editor={editor}
          >
            <RichTextEditor.Content />
          </RichTextEditor>
        </div>
      </ContentPage>
    : <div>{'Loading this blog'}</div>
}

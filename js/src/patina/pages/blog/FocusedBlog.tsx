import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Image, Divider, Pill } from '@mantine/core'
import { RichTextEditor } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import { useEffect } from 'react'
import StarterKit from '@tiptap/starter-kit'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { ImageCard } from './ImageCard.tsx'
import styles from './FocusedBlog.module.css'

/**
 * Component for displaying a specific blog.
 */
export function FocusedBlog() {
  const { id } = useParams()
  const { data, status } = useQuery({
    queryKey: ['blog', id],
    queryFn: async () => {
      const response = await fetch(`/api/blog/${id}`)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    },
  })
  const blog = data?.blog

  const { data: dataListAll, status: statusListAll } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const response = await fetch('/api/blogs')
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      return response.json()
    },
  })

  const allBlogs = dataListAll?.blogs
  const editor = useEditor({
    extensions: [StarterKit],
    content: 'Loading this blog',
    editable: false,
  })

  useEffect(() => {
    if (status === 'success') {
      editor?.commands.setContent(JSON.parse(blog.content))
    }
  }, [status, id])

  return status === 'success' ?
      <ContentPage>
        <Image src={blog.image} />
        <div className={styles.blogSection}>
          <div className={styles.pillsSection}>
            <Pill className={styles.pill}>{'Student Spotlight'}</Pill>
            <Pill className={styles.pill}>{'Summer 2024'}</Pill>
          </div>
          <div className={styles.titleText}>{blog.title}</div>
          <Divider color={'white'} />
          <RichTextEditor
            classNames={{
              root: styles.editorRoot,
            }}
            editor={editor}
          >
            <RichTextEditor.Content />
          </RichTextEditor>
          <Divider color={'white'} />
        </div>
        <div className={styles.morePostsSection}>
          <div className={styles.morePostsTitle}>{'More posts'}</div>
          {statusListAll === 'success' ?
            <div className={styles.morePostsPosts}>
              <ImageCard horizontal={false} blog={allBlogs[5]} tags={['']} />
              <ImageCard horizontal={false} blog={allBlogs[6]} tags={['']} />
            </div>
          : <div>{'Loading more blogs...'}</div>}
        </div>
      </ContentPage>
    : <div>{'Loading this blog'}</div>
}

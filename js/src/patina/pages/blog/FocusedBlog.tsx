import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Image, Divider, Pill, Space } from '@mantine/core'
import { RichTextEditor } from '@mantine/tiptap'
import { useEditor } from '@tiptap/react'
import { useEffect } from 'react'
import StarterKit from '@tiptap/starter-kit'
import TipTapImage from '@tiptap/extension-image'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { ImageCard } from './ImageCard.tsx'
import styles from './FocusedBlog.module.css'
import { imageUrls } from '@/patina/assets/images.ts'

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
    extensions: [StarterKit, TipTapImage],
    content: 'Loading this blog',
    editable: false,
  })

  useEffect(() => {
    if (status === 'success') {
      let blogContent = ''
      try {
        blogContent = JSON.parse(blog.content)
      } catch {
        blogContent = blog.content
      }
      editor?.commands.setContent(blogContent)
    }
  }, [status])

  return status === 'success' ?
      <ContentPage>
        {/* Todo: Replace hardcoded image with blog's image */}
        <Image
          src={imageUrls.missionBannerSmile.src}
          className={styles.blogSplash}
        />
        <Space h={'xl'} />
        <div className={styles.blogSection}>
          <div className={styles.pillsSection}>
            <Pill className={styles.pill}>{'Student Spotlight'}</Pill>
            <Pill className={styles.pill}>{'Summer 2024'}</Pill>
          </div>
          <div className={styles.titleText}>{blog.title}</div>
          <Divider color={'white'} />
          {/* Todo: Move everything else out one level. When integrating a third party library, it should be its own component. */}
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
        <Space h={64} />
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

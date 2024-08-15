import { RichTextEditor, Link } from '@mantine/tiptap'
import { useEditor, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TipTapImage from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import {
  IconItalic,
  IconStrikethrough,
  IconLink,
  IconCode,
  IconQuote,
  IconBold,
} from '@tabler/icons-react'
import '@mantine/tiptap/styles.css'
import { Button } from '@mantine/core'
import styles from './ContentEditor.module.css'

const BoldIcon = () => <IconBold size="1rem" stroke={3} />
const ItalicIcon = () => <IconItalic size="1rem" stroke={3} />
const StrikeIcon = () => <IconStrikethrough size="1rem" stroke={3} />
const LinkIcon = () => <IconLink size="1rem" stroke={3} />
const CodeIcon = () => <IconCode size="1rem" stroke={3} />
const QuoteIcon = () => <IconQuote size="1rem" stroke={3} />

type ContentEditorProps = {
  setContent: Function
}

/**
 * Component for editing content of blog using Rich Text Editor.
 */
export function ContentEditor({ setContent }: ContentEditorProps) {
  const contentEditor = useEditor({
    extensions: [
      StarterKit,
      Link,
      TipTapImage,
      Placeholder.configure({ placeholder: 'Add content...' }),
    ],
    content: '',
  })

  contentEditor?.on('update', ({ editor }) => {
    setContent(JSON.stringify(editor?.getJSON()))
  })

  const addImage = () => {
    // eslint-disable-next-line no-alert
    const url = window.prompt('URL')

    if (url) {
      contentEditor?.chain().focus().setImage({ src: url }).run()
    }
  }

  return (
    <div>
      <div className="control-group">
        <div className="button-group">
          <Button onClick={addImage}>{'Add image from URL'}</Button>
        </div>
      </div>
      <RichTextEditor
        classNames={{ root: styles.mantineEditor }}
        editor={contentEditor}
      >
        {contentEditor && (
          <BubbleMenu editor={contentEditor}>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Bold icon={BoldIcon} />
              <RichTextEditor.Italic icon={ItalicIcon} />
              <RichTextEditor.Strikethrough icon={StrikeIcon} />
              <RichTextEditor.Link icon={LinkIcon} />
              <RichTextEditor.Blockquote icon={QuoteIcon} />
              <RichTextEditor.CodeBlock icon={CodeIcon} />
            </RichTextEditor.ControlsGroup>
          </BubbleMenu>
        )}
        <RichTextEditor.Content />
      </RichTextEditor>
    </div>
  )
}

import { RichTextEditor, Link } from '@mantine/tiptap'
import { useEditor, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import {
  IconBold,
  IconItalic,
  IconStrikethrough,
  IconLink,
  IconCode,
  IconQuote,
} from '@tabler/icons-react'
import '@mantine/tiptap/styles.css'
import styles from './TitleDescEditor.module.css'

const BoldIcon = () => <IconBold size="1rem" stroke={3} />
const ItalicIcon = () => <IconItalic size="1rem" stroke={3} />
const StrikeIcon = () => <IconStrikethrough size="1rem" stroke={3} />
const LinkIcon = () => <IconLink size="1rem" stroke={3} />
const CodeIcon = () => <IconCode size="1rem" stroke={3} />
const QuoteIcon = () => <IconQuote size="1rem" stroke={3} />

/**
 * Component containing two text editors for specifying the issue title and its description.
 */
export function TitleDescEditor() {
  const titleEditor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: 'Issue title' }),
    ],
    content: '',
  })

  const descEditor = useEditor({
    extensions: [
      StarterKit,
      Link,
      Placeholder.configure({ placeholder: 'Add description...' }),
    ],
    content: '',
  })

  return (
    <div className={styles.headingEditorDiv}>
      <RichTextEditor
        classNames={{
          root: styles.titleEditorField,
        }}
        editor={titleEditor}
      >
        <RichTextEditor.Content />
      </RichTextEditor>
      <RichTextEditor
        classNames={{ root: styles.contentEditorField }}
        editor={descEditor}
      >
        {descEditor && (
          <BubbleMenu editor={descEditor}>
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

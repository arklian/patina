import { TextInput } from '@mantine/core'
import styles from './TitleEditor.module.css'
/**
 * Component for title text input.
 */
export function TitleEditor() {
  return (
    <TextInput
      classNames={{ input: styles.titleEditorField }}
      variant={'unstyled'}
      placeholder={'Issue title'}
    />
  )
}

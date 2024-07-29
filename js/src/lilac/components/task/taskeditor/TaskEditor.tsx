import { TitleEditor } from './TitleEditor.tsx'
import { DescEditor } from './DescEditor.tsx'
import styles from './TaskEditor.module.css'
/**
 * Component of the header of the Task layout, containing the Title and Description text fields.
 */
export function TaskEditor() {
  return (
    <div className={styles.titleEditorField}>
      <TitleEditor />
      <DescEditor />
    </div>
  )
}

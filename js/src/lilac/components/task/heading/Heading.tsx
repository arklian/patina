import { TitleEditor } from './TitleEditor.tsx'
import { DescEditor } from './DescEditor.tsx'
import styles from './Heading.module.css'
/**
 * Component of the header of the Task layout, containing the Title and Description text fields.
 */
export function Heading() {
  return (
    <div className={styles.titleEditorField}>
      <TitleEditor />
      <DescEditor />
    </div>
  )
}

import { MantineProvider } from '@mantine/core'
import { GetInTouch } from '../components/GetInTouch'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <MantineProvider>
      <div className={styles.contactWrapper}>
        <GetInTouch />
      </div>
    </MantineProvider>
  )
}

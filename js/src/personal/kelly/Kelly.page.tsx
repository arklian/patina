import { MantineProvider, Title } from '@mantine/core'
import styles from './Kelly.module.css'
import { theme } from './theme.ts'

export function KellyPage() {
  return (
    <MantineProvider theme={theme}>
      <div className="title_container">
        <Title className={styles.title}>{'KELLYLIN'}</Title>
      </div>
    </MantineProvider>
  )
}

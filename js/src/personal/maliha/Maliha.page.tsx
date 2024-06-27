import { Text, MantineProvider } from '@mantine/core'
import { Menu } from './ModalMenu.tsx'
import { theme } from './theme.ts'
import styles from './Maliha.module.css'

export function MalihaPage() {
  return (
    <MantineProvider theme={theme}>
      <div className={styles.body}>
        <Menu />
        <div className={styles.border} />
        <Text
          inherit
          component="span"
          className={styles.title}
        >
          {'Maliha Tasnim'}
        </Text>
      </div>
    </MantineProvider>
  )
}

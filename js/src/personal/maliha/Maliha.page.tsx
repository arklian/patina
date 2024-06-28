import { Text, MantineProvider } from '@mantine/core'
import { theme } from './theme.ts'
import { Menu } from './ModalMenu.tsx'
import { Social } from './Social.tsx'
import styles from './Maliha.module.css'

export function MalihaPage() {
  return (
    <MantineProvider theme={theme}>
      <div className={styles.body}>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caudex:ital,wght@0,400;0,700;1,400;1,700&family=Handlee&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
        <Social />
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

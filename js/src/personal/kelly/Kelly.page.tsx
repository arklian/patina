import { Box, MantineProvider, Title } from '@mantine/core'
import styles from './Kelly.module.css'
import { theme } from './theme.ts'

export function KellyPage() {
  return (
    <MantineProvider theme={theme}>
      <div className={styles.body_load}></div>
      <div className={styles.nav}>
        <a>
          <p className={styles.nav_item}>{'About'}</p>
        </a>
        <a>
          <p className={styles.nav_item}>{'Projects'}</p>
        </a>
        <a>
          <p className={styles.nav_item}>{'Contact'}</p>
        </a>
      </div>
      <div className={styles.body_container}>
        <Title className={styles.title}>{'KELLY LIN'}</Title>
        <div className={styles.window_container}>
          <Box className={styles.window}></Box>
        </div>
      </div>
      <div className={styles.about}>
        <p>
          {
            'dummytext dummytext dummytext dummytext dummytext dummytext dummytext dummytext'
          }
        </p>
      </div>
    </MantineProvider>
  )
}

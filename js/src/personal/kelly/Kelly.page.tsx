import { Box, Title } from '@mantine/core'
import styles from './Kelly.module.css'

export function KellyPage() {
  return (
    <>
      <div className={styles.body_load}></div>
      <div className={styles.nav}>
        <a>
          <p className={styles.nav_item}>{'Home'}</p>
        </a>
        <a>
          <p className={styles.nav_item}>{'Projects'}</p>
        </a>
        <a>
          <p className={styles.nav_item}>{'About'}</p>
        </a>
      </div>
      <div className={styles.body_container}>
        <Title className={styles.title}>{'KELLY LIN'}</Title>
        <div className={styles.window_container}>
          <Box className={styles.window}></Box>
        </div>
      </div>
    </>
  )
}

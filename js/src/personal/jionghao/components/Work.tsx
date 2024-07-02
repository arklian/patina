import { Title } from '@mantine/core'
import styles from './Work.module.css'
import { Projects } from './Projects.tsx'

export function Work() {
  return (
    <div
      className={styles.work}
      id="work"
    >
      <div className={styles.titleContain}>
        <Title>{'My Projects'}</Title>
        <div className={styles.titleLine}></div>
      </div>
      <Projects />
    </div>
  )
}

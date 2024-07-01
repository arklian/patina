import { MantineProvider } from '@mantine/core'
import { useState } from 'react'
import { AboutMe } from './aboutme/AboutMe.tsx'
import { ProjectsPage } from './projects/ProjectsPage.tsx'
import { MiscPage } from './misc/MiscPage.tsx'
import { theme } from './theme.ts'
import { Pages } from './pages.ts'
import styles from './Haoking.module.css'

export function HaokingPage() {
  const [current, setCurrent] = useState(Pages.About)

  return (
    <MantineProvider theme={theme}>
      <div className={styles.hkbody}>
        {current === Pages.About && (
          <AboutMe
            current={current}
            setCurrent={setCurrent}
          />
        )}
        {current === Pages.Project && (
          <ProjectsPage
            current={current}
            setCurrent={setCurrent}
          />
        )}
        {current === Pages.Misc && (
          <MiscPage
            current={current}
            setCurrent={setCurrent}
          />
        )}
      </div>
    </MantineProvider>
  )
}

import { MantineProvider } from '@mantine/core'
import { useState } from 'react'
import { AboutMe } from '@/personal/haoking/aboutme/AboutMe.tsx'
import { ProjectsPage } from '@/personal/haoking/projects/ProjectsPage.tsx'
import { MiscPage } from '@/personal/haoking/misc/MiscPage.tsx'
import { cssVariableResolver, theme } from '@/personal/haoking/theme.ts'
import { Pages } from '@/personal/haoking/pages.ts'
import styles from '@/personal/haoking/Haoking.module.css'

export function HaokingPage() {
  const [current, setCurrent] = useState(Pages.About)

  return (
    <MantineProvider
      theme={theme}
      cssVariablesResolver={cssVariableResolver}
    >
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

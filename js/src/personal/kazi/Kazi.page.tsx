import { MantineProvider } from '@mantine/core'
import styles from './Kazi.module.css'
import { DarkModeToggle } from './components/darkmodetoggle/DarkModeToggle'
import { theme } from './theme.ts'
import { Navbar } from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero'
import { Experiences } from './components/experiences/Experiences'
import { Projects } from './components/projects/Projects'
import { Contact } from './components/contact/Contact'

export function KaziPage() {
  return (
    <MantineProvider theme={theme}>
      <div className={`${styles.sections} ${styles.scroll_container}`}>
        <section>
          <Navbar />
        </section>
        <section
          id="hero"
          className={styles.section}
        >
          <Hero />
        </section>
        <section
          id="about"
          className={styles.section}
        >
          <Experiences />
        </section>
        <section
          id="projects"
          className={styles.section}
        >
          <Projects />
        </section>
        <div id="contact">
          <Contact />
        </div>
      </div>
      <DarkModeToggle />
    </MantineProvider>
  )
}

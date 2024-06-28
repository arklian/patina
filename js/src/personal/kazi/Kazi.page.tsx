import { Title, Text, MantineProvider } from '@mantine/core'
import styles from './Kazi.module.css'
import { DarkModeToggle } from './components/DarkModeToggle/DarkModeToggle'
import { theme } from './theme.ts'
import { Navbar } from './components/Navbar/Navbar'

export function KaziPage() {
  return (
    <MantineProvider theme={theme}>
      <div className={styles.sections}>
        <section>
          <Navbar />
        </section>
        <section id="hero">{'Hero'}</section>
        <section id="projects">{'Projects'}</section>
        <section id="about">{'About'}</section>
        <section id="contact">{'Contact'}</section>
      </div>
      <DarkModeToggle />
    </MantineProvider>
  )
}

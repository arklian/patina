import { MantineProvider } from '@mantine/core'
import styles from './Jionghao.module.css'
import { theme } from './theme.ts'
import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'
import { About } from './components/About.tsx'
import { Experience } from './components/Experience.tsx'
import { Work } from './components/Work.tsx'
import { LeftStickySection } from './components/SideSection.tsx'
import { Contact } from './components/Contact.tsx'

export function JionghaoPage() {
  return (
    <MantineProvider theme={theme}>
      <LeftStickySection />
      <div className={styles.pageContainer}>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </div>
    </MantineProvider>
  )
}

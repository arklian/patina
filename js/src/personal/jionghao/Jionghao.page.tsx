import { MantineProvider } from '@mantine/core'
import styles from './Jionghao.module.css'
import { theme } from './theme.ts'
import { FooterSocial } from './components/FooterSocial.tsx'
import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'
import { About } from './components/About.tsx'
import { Experience } from './components/Experience.tsx'
import { Work } from './components/Work.tsx'

export function JionghaoPage() {
  return (
    <MantineProvider theme={theme}>
      <div className={styles.pageContainer}>
        <Header />
        <Hero />
        <About />
        <Experience />
        <Work />
      </div>
      <FooterSocial />
    </MantineProvider>
  )
}

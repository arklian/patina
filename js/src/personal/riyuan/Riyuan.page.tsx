import { AppShell, MantineProvider } from '@mantine/core'
import { theme } from './theme.ts'
import styles from './Riyuan.module.css'
import { Nav } from '@/personal/riyuan/components/navigation/Navigation.tsx'
import { Home } from '@/personal/riyuan/components/home/Home.tsx'
import { About } from '@/personal/riyuan/components/about/About.tsx'
import { Experience } from '@/personal/riyuan/components/experience/Experience.tsx'
import { Project } from '@/personal/riyuan/components/project/Project.tsx'
import { Contact } from '@/personal/riyuan/components/contact/Contact.tsx'
import { FooterCentered } from '@/personal/riyuan/components/footer/Footer.tsx'

export function RiyuanPage() {
  return (
    <MantineProvider theme={theme}>
      <Nav />
      <AppShell className={styles.appshell}>
        <Home />
        <About />
        <Experience />
        <Project />
        <Contact />
        <FooterCentered />
      </AppShell>
    </MantineProvider>
  )
}

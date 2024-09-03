import { MantineProvider } from '@mantine/core'
// import styles from './Manny.module.css'
import { theme } from './theme.ts'
import { Hero } from '@/personal/manny/sections/Hero.tsx'
import { HeaderSimple } from '@/personal/manny/components/HeaderSimple.tsx'
import { About } from './sections/About.tsx'
import { Projects } from '@/personal/manny/sections/Projects.tsx'

export function MannyPage() {
  return (
    <MantineProvider theme={theme}>
      <Hero />
      <HeaderSimple />
      <About />
      <Projects />
    </MantineProvider>
  )
}

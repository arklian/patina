import { MantineProvider } from '@mantine/core'
// import styles from './Manny.module.css'
import { theme } from './theme.ts'
import { Hero } from '@/personal/manny/pages/Hero.tsx'
import { HeaderSimple } from '@/personal/manny/components/HeaderSimple.tsx'

export function MannyPage() {
  return (
    <MantineProvider theme={theme}>
      <Hero />
      <HeaderSimple />
    </MantineProvider>
  )
}

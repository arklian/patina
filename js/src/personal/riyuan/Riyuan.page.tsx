import { MantineProvider } from '@mantine/core'
import { theme } from './theme.ts'
import { Nav } from '@/personal/riyuan/components/navigation/Navigation.tsx'
import { Home } from '@/personal/riyuan/components/home/home.tsx'
import { About } from '@/personal/riyuan/components/about/about.tsx'

export function RiyuanPage() {
  return (
    <MantineProvider theme={theme}>
      <Nav />
      <Home />
      <About />
    </MantineProvider>
  )
}

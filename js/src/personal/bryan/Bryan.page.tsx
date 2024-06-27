// import { useState } from 'react'
import { MantineProvider } from '@mantine/core'
import { Outlet } from 'react-router-dom'
// import { MainPage } from './Main.page.tsx'
import { theme } from '@/personal/bryan/theme.ts'
import { NavBar } from '@/personal/bryan/NavBar.tsx'

// import { ProjectsPage } from './Projects.page.tsx'
// import { FunPage } from './Fun.page.tsx'
// import { AboutMePage } from './AboutMe.page.tsx'

// enum Page {
//   Home,
//   Projects,
//   Fun,
//   About_Me,
// }

export function BryanPage() {
  //const [currentPage, setCurrentPage] = useState(Page.Home)
  //return <MainPage />
  return (
    <MantineProvider theme={theme}>
      <NavBar />
      <Outlet />
    </MantineProvider>
  )
}

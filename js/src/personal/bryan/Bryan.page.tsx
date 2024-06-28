import { MantineProvider } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { theme } from '@/personal/bryan/theme.ts'
import { NavBar } from '@/personal/bryan/NavBar.tsx'
import classes from './Bryan.module.css'
import { Socials } from './Socials.tsx'
import { TimeDisplay } from '@/personal/bryan/TimeDisplay.tsx'

export function BryanPage() {
  //const [currentPage, setCurrentPage] = useState(Page.Home)
  //return <MainPage />
  return (
    <MantineProvider theme={theme}>
      <NavBar />
      <div className={classes.container}>
        <TimeDisplay />
        <Outlet />
        <Socials />
      </div>
    </MantineProvider>
  )
}

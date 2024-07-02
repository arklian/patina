import { MantineProvider, Flex } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { theme } from '@/personal/bryan/theme.ts'
import { NavBar } from '@/personal/bryan/frame/NavBar.tsx'
import classes from '@/personal/bryan/Bryan.module.css'
import { Socials } from '@/personal/bryan/frame/Socials.tsx'
import { TimeDisplay } from '@/personal/bryan/frame/TimeDisplay.tsx'

export function BryanPage() {
  return (
    <MantineProvider theme={theme}>
      <Flex direction="column">
        <NavBar />
        <div className={classes.container}>
          <TimeDisplay />
          <Outlet />
          <Socials />
        </div>
      </Flex>
    </MantineProvider>
  )
}

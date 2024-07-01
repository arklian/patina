import { MantineProvider, Flex } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import { theme } from '@/personal/bryan/theme.ts'
import { NavBar } from '@/personal/bryan/Frame/NavBar.tsx'
import classes from '@/personal/bryan/Bryan.module.css'
import { Socials } from '@/personal/bryan/Frame/Socials.tsx'
import { TimeDisplay } from '@/personal/bryan/Frame/TimeDisplay.tsx'

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

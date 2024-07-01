import { Box, Flex } from '@mantine/core'
import { LeftProjects } from './LeftProjects.tsx'
import { RightProjects } from './RightProjects.tsx'
import { Navbar } from '../components/Navbar.tsx'
import { Pages } from '../pages.ts'

export function ProjectsPage({
  current,
  setCurrent,
}: {
  current: Pages
  setCurrent: any
}) {
  return (
    <Box>
      <Navbar
        current={current}
        setCurrent={setCurrent}
      />
      <Flex
        justify="space-between"
        direction="row"
      >
        <LeftProjects />
        <RightProjects />
      </Flex>
    </Box>
  )
}

import { Box, rem, Flex } from '@mantine/core'
import { LeftProjects } from './LeftProjects.tsx'
import { RightProjects } from './RightProjects.tsx'
import { Navbar } from '../components/Navbar.tsx'
import { theme } from '../theme.ts'
import { Pages } from '../pages.ts'

export function ProjectsPage({
  current,
  setCurrent,
}: {
  current: Pages
  setCurrent: any
}) {
  return (
    <Box
      bg={theme.colors.black[4]}
      h={rem('100vh')}
      w={rem('100vw')}
    >
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

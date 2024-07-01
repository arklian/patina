import { Box, Flex, rem } from '@mantine/core'
import { LeftAboutMe } from './LeftAboutMe.tsx'
import { RightAboutMe } from './RightAboutMe.tsx'
import { Navbar } from '../components/Navbar.tsx'
import { theme } from '../theme.ts'
import { Pages } from '../pages.ts'

export function AboutMe({
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
        <LeftAboutMe />
        <RightAboutMe />
      </Flex>
    </Box>
  )
}

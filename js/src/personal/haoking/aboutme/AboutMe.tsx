import { Box, Flex } from '@mantine/core'
import { LeftAboutMe } from './LeftAboutMe.tsx'
import { RightAboutMe } from './RightAboutMe.tsx'
import { Navbar } from '../components/Navbar.tsx'
import { Pages } from '../pages.ts'

export function AboutMe({
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
        <LeftAboutMe />
        <RightAboutMe />
      </Flex>
    </Box>
  )
}

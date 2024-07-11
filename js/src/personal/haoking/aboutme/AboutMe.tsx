import { Box, Flex } from '@mantine/core'
import { LeftAboutMe } from '@/personal/haoking/aboutme/LeftAboutMe.tsx'
import { RightAboutMe } from '@/personal/haoking/aboutme/RightAboutMe.tsx'
import { Navbar } from '@/personal/haoking/components/Navbar.tsx'
import { Pages } from '@/personal/haoking/pages.ts'

export function AboutMe({
  current,
  setCurrent,
}: {
  current: Pages
  setCurrent: any
}) {
  return (
    <Box>
      <Navbar current={current} setCurrent={setCurrent} />
      <Flex justify="space-between" direction="row">
        <LeftAboutMe />
        <RightAboutMe />
      </Flex>
    </Box>
  )
}

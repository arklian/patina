import { Box, SimpleGrid } from '@mantine/core'
import { LeftAboutMe } from '@/personal/haoking/aboutme/LeftAboutMe.tsx'
import { RightAboutMe } from '@/personal/haoking/aboutme/RightAboutMe.tsx'
import { Navbar } from '@/personal/haoking/components/Navbar.tsx'
import { useMediaQuery } from '@mantine/hooks'
import { Pages } from '@/personal/haoking/pages.ts'

export function AboutMe({
  current,
  setCurrent,
}: {
  current: Pages
  setCurrent: any
}) {
  const largeScreen = useMediaQuery('(min-width: 45em)')

  return (
    <Box>
      <Navbar current={current} setCurrent={setCurrent} />
      <SimpleGrid cols={largeScreen ? 2 : 1} spacing={'xl'}>
        <LeftAboutMe />
        <RightAboutMe />
      </SimpleGrid>
    </Box>
  )
}

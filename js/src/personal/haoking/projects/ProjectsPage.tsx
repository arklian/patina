import { Box, SimpleGrid } from '@mantine/core'
import { useState } from 'react'
import { LeftProjects } from '@/personal/haoking/projects/LeftProjects.tsx'
import { RightProjects } from '@/personal/haoking/projects/RightProjects.tsx'
import { Navbar } from '@/personal/haoking/components/Navbar.tsx'
import { useMediaQuery } from '@mantine/hooks'
import { Pages } from '@/personal/haoking/pages.ts'

export function ProjectsPage({
  current,
  setCurrent,
}: {
  current: Pages
  setCurrent: any
}) {
  const largeScreen = useMediaQuery('(min-width: 45em)')
  const [displayedImageSrc, setImage] = useState('')

  return (
    <Box>
      <Navbar current={current} setCurrent={setCurrent} />
      <SimpleGrid cols={largeScreen ? 2 : 1} spacing={'xl'}>
        <LeftProjects displayedImageSrc={displayedImageSrc} />
        <RightProjects setImage={setImage} />
      </SimpleGrid>
    </Box>
  )
}

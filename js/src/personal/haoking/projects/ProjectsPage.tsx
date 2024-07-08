import { Box, Flex } from '@mantine/core'
import { useState } from 'react'
import { LeftProjects } from '@/personal/haoking/projects/LeftProjects.tsx'
import { RightProjects } from '@/personal/haoking/projects/RightProjects.tsx'
import { Navbar } from '@/personal/haoking/components/Navbar.tsx'
import { Pages } from '@/personal/haoking/pages.ts'

export function ProjectsPage({
  current,
  setCurrent,
}: {
  current: Pages
  setCurrent: any
}) {
  const [displayedImageSrc, setImage] = useState('')

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
        <LeftProjects displayedImageSrc={displayedImageSrc} />
        <RightProjects setImage={setImage} />
      </Flex>
    </Box>
  )
}

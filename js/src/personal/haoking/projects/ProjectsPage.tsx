import { Box, Flex } from '@mantine/core'
import { useState } from 'react'
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

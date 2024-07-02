import { Box, Flex } from '@mantine/core'
import { Navbar } from '../components/Navbar.tsx'
import { theme } from '../theme.ts'
import { Pages } from '../pages.ts'

export function MiscPage({
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
      <Flex justify={'center'}>
        <Box
          mt={150}
          h={400}
          w={400}
          bg={theme.colors.white[0]}
        >
          {}
        </Box>
      </Flex>
    </Box>
  )
}

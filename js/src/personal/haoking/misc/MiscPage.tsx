import { Box, Flex } from '@mantine/core'
import { Navbar } from '@/personal/haoking/components/Navbar.tsx'
import { theme } from '@/personal/haoking/theme.ts'
import { Pages } from '@/personal/haoking/pages.ts'

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

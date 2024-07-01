import { Box, Flex, rem, Text } from '@mantine/core'
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
        justify="flex-start"
        direction="row"
      >
        <Text>{'miscellaneous'}</Text>
      </Flex>
    </Box>
  )
}

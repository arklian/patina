import { MantineProvider, Box, Flex, rem } from '@mantine/core'
import { LeftAboutMe } from './LeftAboutMe.tsx'
import { RightAboutMe } from './RightAboutMe.tsx'
import { theme } from './theme.ts'

export function HaokingPage() {
  return (
    <MantineProvider theme={theme}>
      <Box
        bg={theme.colors.black[4]}
        h={rem('100vh')}
        w={rem('100vw')}
      >
        <Flex
          justify="flex-start"
          direction="row"
        >
          <LeftAboutMe />
          <RightAboutMe />
        </Flex>
      </Box>
    </MantineProvider>
  )
}

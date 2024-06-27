import {
  Flex,
  Button,
  HoverCard,
  Center,
  Box,
  Group,
  Text,
} from '@mantine/core'
import { LightDark } from './LightDark.tsx'

/** Component to create a settings menu to encompass setting-like page modifiables */
export function Settings() {
  return (
    <Flex justify="flex-end">
      <HoverCard
        width={300}
        position="bottom"
        radius="md"
        shadow="md"
        closeDelay={500}
        withinPortal
      >
        <HoverCard.Target>
          <Center inline>
            <Box
              component="span"
              mr={5}
            >
              <Button color="gray"> {'Settings'} </Button>
            </Box>
          </Center>
        </HoverCard.Target>
        <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
          <Group
            justify="space-between"
            px="md"
          >
            <Text>{'Change light/dark mode'}</Text>
            <LightDark />
          </Group>
        </HoverCard.Dropdown>
      </HoverCard>
    </Flex>
  )
}

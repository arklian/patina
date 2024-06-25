import { Flex, Button, Menu } from '@mantine/core'
import { LightDark } from './LightDark.tsx'

export function Settings() {
  return (
    <Flex justify="flex-end">
      <Menu
        trigger="click-hover"
        openDelay={100}
        closeDelay={500}
      >
        <Menu.Target>
          <Button> {'Settings'} </Button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>{'Change light/dark mode'}</Menu.Label>
          <Menu.Divider />
          <Menu.Item color="gray">
            <LightDark />
          </Menu.Item>
          <Menu.Divider />
        </Menu.Dropdown>
      </Menu>
    </Flex>
  )
}

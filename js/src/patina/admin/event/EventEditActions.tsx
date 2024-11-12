import { ActionIcon, Button, Center, Group, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconEdit, IconTrash } from '@tabler/icons-react'

export function EventEditActions({ eventID }: { eventID: number }) {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <Group gap={4} justify="left" wrap="nowrap">
      <Modal opened={opened} onClose={close} title={'Confirm Delete'}>
        <Text>{`Are you sure you want to delete event ID ${eventID}?`}</Text>
        <Center>
          <Button mx="sm" my="sm" onClick={close}>
            {'Cancel'}
          </Button>
          <Button color="red" mx="sm" my="sm">
            {'Delete'}
          </Button>
        </Center>
      </Modal>
      <ActionIcon
        size="sm"
        variant="subtle"
        color="blue"
        onClick={() => console.log('Edit')}
      >
        <IconEdit size={16} />
      </ActionIcon>
      <ActionIcon size="sm" variant="subtle" color="red" onClick={open}>
        <IconTrash size={16} />
      </ActionIcon>
    </Group>
  )
}

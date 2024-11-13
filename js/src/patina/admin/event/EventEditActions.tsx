import { ActionIcon, Button, Center, Group, Modal, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconEdit, IconTrash } from '@tabler/icons-react'
import { notifications } from '@mantine/notifications'

export function EventEditActions({
  eventID,
  eventName,
}: {
  eventID: number
  eventName: string
}) {
  const [opened, { open, close }] = useDisclosure(false)

  const handleDelete = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    try {
      const response = await fetch(`/api/admin/event/delete/${eventID}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        notifications.show({
          title: 'Event Deleted',
          message: `Your Event titled: ${eventName} was successfully Deleted!`,
          color: 'green',
          position: 'top-right',
        })
      } else {
        console.error('HTTP error:', response.statusText)
        // Handle the HTTP error response here
      }
    } catch (error) {
      console.error('Fetch error:', error)
    }
    close()
  }
  return (
    <Group gap={4} justify="left" wrap="nowrap">
      <Modal opened={opened} onClose={close} title={'Confirm Delete'}>
        <Text>{`Are you sure you want to delete event: ${eventName}?`}</Text>
        <Center>
          <Button mx="sm" my="sm" onClick={close}>
            {'Cancel'}
          </Button>
          <Button color="red" mx="sm" my="sm" onClick={handleDelete}>
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

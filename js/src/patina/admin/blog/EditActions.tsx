import { ActionIcon, Group } from '@mantine/core'
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react'

export function EditActions({ blogId }: { blogId: number }) {
  return (
    <Group gap={4} justify="left" wrap="nowrap">
      <ActionIcon
        size="sm"
        variant="subtle"
        color="green"
        onClick={() => {
          window.open(`${window.location.origin}/blog/${blogId}`)
        }}
      >
        <IconEye size={16} />
      </ActionIcon>
      <ActionIcon
        size="sm"
        variant="subtle"
        color="blue"
        onClick={() => console.log('Edit')}
      >
        <IconEdit size={16} />
      </ActionIcon>
      <ActionIcon
        size="sm"
        variant="subtle"
        color="red"
        onClick={() => console.log('Delete')}
      >
        <IconTrash size={16} />
      </ActionIcon>
    </Group>
  )
}

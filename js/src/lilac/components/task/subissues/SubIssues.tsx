import { Text, Group, Badge } from '@mantine/core'

const items = [
  { author: 'Author 1', filler: 'Filler 1', time: 'Time 1' },
  { author: 'Author 2', filler: 'Filler 2', time: 'Time 2' },
  { author: 'Author 3', filler: 'Filler 3', time: 'Time 3' },
  // Add more items as needed
]

export function SubIssues() {
  return (
    <div>
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{'Activity'}</Text>
        <Group>
          <Text>{'Subscribe'}</Text>
          <Badge color="pink">{''}</Badge>
        </Group>
      </Group>
      {items.map((item, index) => (
        <Group key={index}>
          <Badge color="pink">{''}</Badge>
          <Group>
            <Text>{item.author}</Text>
            <Text c={'dimmed'}>{item.filler}</Text>
            <Text c={'dimmed'}>{`· ${item.time}`}</Text>
          </Group>
        </Group>
      ))}
    </div>
  )
}

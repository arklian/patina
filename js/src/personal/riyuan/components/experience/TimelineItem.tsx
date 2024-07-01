import { Text, Timeline } from '@mantine/core'
import { ReactNode } from 'react'

interface TimelineItemProps {
  bullet: ReactNode
  title: string
  description: string
  time: string
  lineVariant?: 'dashed' | 'solid'
}

export function TimelineItem({
  bullet,
  title,
  description,
  time,
  lineVariant,
}: TimelineItemProps) {
  return (
    <Timeline.Item
      bullet={bullet}
      title={title}
      lineVariant={lineVariant}
    >
      <Text
        c="dimmed"
        size="sm"
      >
        {description}
      </Text>
      <Text
        size="xs"
        mt={4}
      >
        {time}
      </Text>
    </Timeline.Item>
  )
}

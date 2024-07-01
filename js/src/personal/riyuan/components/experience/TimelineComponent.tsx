import React from 'react'
import { Timeline } from '@mantine/core'
import { IconCalendarEvent } from '@tabler/icons-react'
import { TimelineItem } from './TimelineItem'

interface TimelineComponentProps {
  data: {
    title: string
    description: string
    time: string
    lineVariant?: 'dashed' | 'solid'
    bullet?: React.ReactNode
  }[]
  className: string
}

export function TimelineComponent({ data, className }: TimelineComponentProps) {
  return (
    <Timeline
      active={1}
      bulletSize={24}
      lineWidth={2}
      className={className}
    >
      {data.map((item, index) => (
        <TimelineItem
          key={index}
          bullet={item.bullet || <IconCalendarEvent />} // Default bullet if none provided
          title={item.title}
          description={item.description}
          time={item.time}
          lineVariant={item.lineVariant}
        />
      ))}
    </Timeline>
  )
}

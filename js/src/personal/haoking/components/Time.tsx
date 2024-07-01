import { Box, Text } from '@mantine/core'
import { useState, useEffect } from 'react'

/* Component for displaying the current time */
export function Time() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000)
    return function clearTimer() {
      clearInterval(timer)
    }
  })

  return (
    <Box
      pos="relative"
      bottom={12}
    >
      <Text
        fw={700}
        fz={50}
      >
        {date.toLocaleTimeString()}
      </Text>
    </Box>
  )
}

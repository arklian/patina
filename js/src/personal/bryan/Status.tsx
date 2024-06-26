import { useEffect, useMemo, useState } from 'react'
import { Text, Title } from '@mantine/core'
import styles from './Bryan.module.css'

/** Component to create a settings menu to encompass setting-like page modifiables */
export function Status() {
  const choices = ['working', 'sleeping', 'chilling', 'running']

  const [date, setDate] = useState(new Date())
  useEffect(() => {
    setInterval(() => setDate(new Date()), 500)
  })

  const action: number = useMemo(() => {
    if (date.getHours() < 9 || date.getHours() === 23) return 1
    if (date.getDay() === 0 || date.getDay() === 6) return 2
    return 0
  }, [date])
  return (
    <Title
      className={styles.title}
      ta="center"
      mt={50}
    >
      {'Currently, I’m '}
      <Text
        inherit
        variant="gradient"
        component="span"
        gradient={{ from: 'grey', to: 'blue' }}
      >
        {`${choices[action]}.`}
      </Text>
      <br />
    </Title>
  )
}

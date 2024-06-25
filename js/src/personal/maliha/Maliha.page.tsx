import { Title, Text } from '@mantine/core'
import { useEffect } from 'react'
import { Sandwich } from './Sandwich.tsx'
import styles from './Maliha.module.css'

export function MalihaPage() {
  useEffect(() => {
    document.body.style.backgroundColor = '#B07251'
  })
  return (
    <div className={styles.body}>
      <div className={styles.menuWrapper}>
        <Sandwich />
      </div>
      <div className={styles.border} />
      <Title
        className={styles.title}
        ta="center"
        mt={100}
      >
        {'Welcome to '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'red', to: 'blue' }}
        >
          {"Maliha's Page"}
        </Text>
      </Title>
      <Text
        c="dimmed"
        ta="center"
        size="lg"
        maw={580}
        mx="auto"
        mt="xl"
      >
        {"Hey, I'm Maliha"}
      </Text>
    </div>
  )
}

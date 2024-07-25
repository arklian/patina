import { Text, SimpleGrid, Group } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import styles from './Stacks.module.css'

type StackObject = {
  title: string
  description: string | React.ReactNode
}

type StackProps = {
  items: StackObject[]
}

/** Reusable component to create stacks of information like steps */
export function Stacks({ items }: StackProps) {
  const largeScreen = useMediaQuery('(min-width: 60em)')
  return (
    <div className={styles.itemsMain}>
      {items.map((item, index) => (
        <SimpleGrid
          cols={largeScreen ? 2 : 1}
          className={styles.itemContainer}
          key={index}
        >
          <Group className={styles.text}>
            <Text className={styles.title}>{item.title}</Text>
          </Group>
          <Group className={styles.text}>
            <Text className={styles.description}>{item.description}</Text>
          </Group>
        </SimpleGrid>
      ))}
    </div>
  )
}

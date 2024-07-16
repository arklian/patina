import { Text } from '@mantine/core'
import styles from './Stacks.module.css'

type StackObject = {
  title: string
  description: string
}

type StackProps = {
  items: StackObject[]
}

/** Reusable component to create stacks of information like steps */
export function Stacks({ items }: StackProps) {
  return (
    <div className={styles.itemsMain}>
      {items.map((item, index) => (
        <div className={styles.itemContainer} key={index}>
          <Text className={styles.title}>{item.title}</Text>
          <Text className={styles.description}>{item.description}</Text>
        </div>
      ))}
    </div>
  )
}

import { Text } from '@mantine/core'
import styles from '@/patina/components/Stacks.module.css'

type CriteriaItem = {
  item: string
}

type CriteriaProps = {
  items: CriteriaItem[]
}

/** Reusable component to create stacks of information like steps */
export function Criteria({ items }: CriteriaProps) {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div className={styles.textContainer}>
          <Text key={index} className={styles.item}>
            {item.item}
          </Text>
        </div>
      ))}
    </div>
  )
}

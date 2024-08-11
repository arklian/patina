import { List, Tabs, Text } from '@mantine/core'
import styles from '@/personal/riyuan/Riyuan.module.css'

type TabPanelProps = {
  value: string
  title: string
  items: string[]
}

export const TabPanel = ({ value, title, items }: TabPanelProps) => (
  <Tabs.Panel pl="sm" value={value} className={styles.tabPanel}>
    <Text fw={700} size={'xl'}>
      {title}
    </Text>
    <List withPadding spacing={'sm'}>
      {items.map((bulletPoint, index) => (
        <List.Item key={index}>
          <Text size={'sm'}>{bulletPoint}</Text>
        </List.Item>
      ))}
    </List>
  </Tabs.Panel>
)

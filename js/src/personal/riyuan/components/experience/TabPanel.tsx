import { List, Tabs, Text } from '@mantine/core'
import styles from '@/personal/riyuan/Riyuan.module.css'

type TabPanelProps = {
  value: string
  title: string
  items: string[]
}

export const TabPanel = ({ value, title, items }: TabPanelProps) => (
  <Tabs.Panel
    pl={'2vh'}
    value={value}
    className={styles.tabPanel}
  >
    <Text
      fw={700}
      size={'xl'}
    >
      {title}
    </Text>
    <Text size={'xs'}>{title}</Text>
    <List
      mt={'2vh'}
      withPadding
      spacing={'md'}
    >
      {items.map((item, index) => (
        <List.Item key={index}>
          <Text>{item}</Text>
        </List.Item>
      ))}
    </List>
  </Tabs.Panel>
)

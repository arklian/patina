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
    <Text size={'md'}>
      {
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
      }
    </Text>
    <List
      mt={'2vh'}
      withPadding
      spacing={'sm'}
    >
      {items.map((item, index) => (
        <List.Item key={index}>
          <Text size={'sm'}>{item}</Text>
        </List.Item>
      ))}
    </List>
  </Tabs.Panel>
)

import { Tabs, Text } from '@mantine/core'
import styles from '@/personal/riyuan/Riyuan.module.css'

type TabLabelProps = {
  value: string
  label: string
}

export const TabLabel = ({ value, label }: TabLabelProps) => (
  <Tabs.Tab
    value={value}
    className={styles.verticalTab}
  >
    <Text size={'md'}>{label}</Text>
  </Tabs.Tab>
)

import { Tabs } from '@mantine/core'
import { TabPanel } from '@/personal/riyuan/components/experience/TabPanel.tsx'
import { TabLabel } from '@/personal/riyuan/components/experience/TabLabel.tsx'

export function TabGroup() {
  const tabData = [
    {
      value: 'Place Holder1',
      title: 'SWE',
      label: 'Filler1',
      items: Array(4).fill(
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      ),
    },
    {
      value: 'Place Holder2',
      title: 'SWE',
      label: 'Filler2',
      items: Array(4).fill(
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      ),
    },
    {
      value: 'Place Holder3',
      title: 'SWE',
      label: 'Filler3',
      items: Array(4).fill(
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      ),
    },
    {
      value: 'Place Holder4',
      title: 'SWE',
      label: 'Filler4',
      items: Array(4).fill(
        'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      ),
    },
  ]
  return (
    <Tabs
      color="cyan"
      orientation="vertical"
      defaultValue="Patina"
      placement="left"
    >
      <Tabs.List>
        {tabData.map((tab) => (
          <TabLabel
            key={tab.value}
            value={tab.value}
            label={tab.label}
          />
        ))}
      </Tabs.List>
      {tabData.map((tab) => (
        <TabPanel
          key={tab.value}
          value={tab.value}
          title={tab.title}
          items={tab.items}
        />
      ))}
    </Tabs>
  )
}

import { Title, Text, Tabs, List } from '@mantine/core'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <div
      className={styles.experience}
      id="experience"
    >
      <Title mb={'xl'}>{'My Experience'}</Title>
      <Tabs
        color="cyan"
        orientation="vertical"
        defaultValue="gallery"
        placement="right"
      >
        <Tabs.Panel
          pl={'2vh'}
          value="Patina"
          className={styles.tabPanel}
        >
          <Text
            fw={700}
            size={'xl'}
          >
            {'Gallery tab content'}
          </Text>
          <Text size={'xs'}>{'Gallery tab content'}</Text>
          <List
            mt={'2vh'}
            withPadding
            spacing={'md'}
          >
            <List.Item>
              <Text>{'Clone or download repository from GitHub'}</Text>
            </List.Item>
            <List.Item>
              <Text>{'Clone or download repository from GitHub'}</Text>
            </List.Item>
            <List.Item>
              <Text>{'Clone or download repository from GitHub'}</Text>
            </List.Item>
            <List.Item>
              <Text>{'Clone or download repository from GitHub'}</Text>
            </List.Item>
          </List>
        </Tabs.Panel>

        <Tabs.Panel
          pl={'2vh'}
          value="Munch"
          className={styles.tabPanel}
        >
          <Text
            fw={700}
            size={'xl'}
          >
            {'Gallery tab content'}
          </Text>
          <Text size={'xs'}>{'Gallery tab content'}</Text>
          <List
            mt={'2vh'}
            withPadding
            spacing={'md'}
          >
            <List.Item>
              <Text>{'Clone or download repository from GitHub'}</Text>
            </List.Item>
            <List.Item>
              <Text>{'Clone or download repository from GitHub'}</Text>
            </List.Item>
            <List.Item>
              <Text>{'Clone or download repository from GitHub'}</Text>
            </List.Item>
            <List.Item>
              <Text>{'Clone or download repository from GitHub'}</Text>
            </List.Item>
          </List>
        </Tabs.Panel>

        <Tabs.Panel
          pl={'2vh'}
          value="settings"
          className={styles.tabPanel}
        >
          {'Settings tab content'}
        </Tabs.Panel>

        <Tabs.List>
          <Tabs.Tab
            value="Patina"
            className={styles.verticalTab}
          >
            <Text size={'md'}>{'Patina Network'}</Text>
          </Tabs.Tab>
          <Tabs.Tab
            value="Munch"
            className={styles.verticalTab}
          >
            <Text size={'md'}>{'Munch Insights'}</Text>
          </Tabs.Tab>
          <Tabs.Tab
            value="settings"
            className={styles.verticalTab}
          >
            <Text size={'md'}>{'PlaceHolder'}</Text>
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  )
}

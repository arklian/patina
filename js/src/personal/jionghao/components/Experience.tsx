import { Title, Text, Tabs, List } from '@mantine/core'
import { IconPoint } from '@tabler/icons-react'
import styles from './Experience.module.css'

export function Experience() {
  return (
    <div
      className={styles.experience}
      id="experience"
    >
      <div className={styles.titleContain}>
        <Title>{'My Experience'}</Title>
        <div className={styles.titleLine}></div>
      </div>
      <Tabs
        color="cyan"
        orientation="vertical"
        defaultValue="Patina"
        placement="right"
        radius={'xs'}
      >
        <Tabs.Panel
          pl={'25px'}
          value="Patina"
          className={styles.tabPanel}
        >
          <Text
            fw={700}
            size={'xl'}
          >
            {'Software Engineering Intern @ Patina Network'}
          </Text>
          <Text
            mt={'3px'}
            size={'xs'}
          >
            {'June 2024 - Present'}
          </Text>
          <List
            mt={'20'}
            spacing={'xs'}
            icon={
              <IconPoint
                size={15}
                stroke={'1'}
                color={'cyan'}
              ></IconPoint>
            }
          >
            <List.Item>
              <Text>
                {
                  'Developed and maintained a personal website using modern web technologies.'
                }
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                {
                  'Assisted in debugging and troubleshooting website issues to improve user experience.'
                }
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                {
                  'Utilized version control systems (Git) for efficient project management and collaboration.'
                }
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                {
                  "Collaborated with the Patina Network team to enhance and optimize the company's website."
                }
              </Text>
            </List.Item>
          </List>
        </Tabs.Panel>

        <Tabs.Panel
          pl={'25px'}
          value="Munch"
          className={styles.tabPanel}
        >
          <Text
            fw={700}
            size={'xl'}
          >
            {'Software Engineering Intern @ Munch Insights'}
          </Text>
          <Text
            mt={'3px'}
            size={'xs'}
          >
            {'Nov. 2023 – May 2024'}
          </Text>
          <List
            mt={'20'}
            spacing={'xs'}
            icon={
              <IconPoint
                size={15}
                stroke={'1'}
                color={'cyan'}
              ></IconPoint>
            }
          >
            <List.Item>
              <Text>
                {'Designed and developed a proof-of-concept (PoC) for a restaurant ordering menu accessible via QR code scan, ' +
                  'integrating Stripe for secure payment processing.'}
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                {'Built a RESTful API using Golang and the Echo framework to handle web requests for menu orders, account ' +
                  'validation, and secure checkouts.'}
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                {'Utilized AWS to deploy and manage cloud services and implemented SQL databases to manage and query customer ' +
                  'data, ensuring high availability, scalability, and efficient data management.'}
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                {
                  'Collaborated with cross-functional teams to ensure a user-friendly and efficient ordering experience.'
                }
              </Text>
            </List.Item>
          </List>
        </Tabs.Panel>

        <Tabs.Panel
          pl={'2vw'}
          value="placeholder"
          className={styles.tabPanel}
        >
          <Text
            fw={700}
            size={'xl'}
          >
            {'Placeholder @ Placeholder'}
          </Text>
          <Text
            mt={'3px'}
            size={'xs'}
          >
            {'Nov. 2023 – May 2024'}
          </Text>
          <List
            mt={'20'}
            spacing={'xs'}
            icon={
              <IconPoint
                size={15}
                stroke={'1'}
                color={'cyan'}
              ></IconPoint>
            }
          >
            <List.Item>
              <Text>
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet eros sapien.'
                }
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                {
                  'Sed vulputate gravida vestibulum. Ut turpis lectus, mattis in nisi maximus, tempus fermentum dolor. '
                }
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                {
                  'Nulla facilisi. Nam a leo ex. Quisque suscipit lectus ut eros consectetur sagittis. In hac habitasse platea dictumst. '
                }
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet eros sapien.'
                }
              </Text>
            </List.Item>
          </List>
        </Tabs.Panel>

        <Tabs.List className={styles.tabsList}>
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
            value="placeholder"
            className={styles.verticalTab}
          >
            <Text size={'md'}>{'PlaceHolder'}</Text>
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </div>
  )
}

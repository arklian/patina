import { Title, Text, Container } from '@mantine/core'
import { TabGroup } from '@/personal/riyuan/components/experience/TabGroup.tsx'
import styles from '@/personal/riyuan/Riyuan.module.css'
import experienceStyles from './Experience.module.css'

export function Experience() {
  return (
    <div id={'Experience'} className={styles.container}>
      <Container className={experienceStyles.inner}>
        <Title className={styles.title} ta="left" mt={100}>
          {'Experience'}
        </Title>
        <div className={experienceStyles.info}>
          <Text>
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          </Text>
          <div>
            <Title order={2} pt={20}>
              {'Experience'}
            </Title>
          </div>
          <div>
            <TabGroup />
          </div>
        </div>
      </Container>
    </div>
  )
}

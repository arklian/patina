import { Title, SimpleGrid } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { TabGroup } from '@/personal/riyuan/components/experience/TabGroup.tsx'
import { TimelineComponent } from './TimelineComponent'
import styles from '@/personal/riyuan/Riyuan.module.css'
import estyles from './Experience.module.css'
import { workTimelineData, educationTimelineData } from './data'

export function Experience() {
  const largeScreen = useMediaQuery('(min-width: 60em)')
  return (
    <div
      id={'Experience'}
      className={styles.container}
    >
      <Title
        className={styles.title}
        ta="left"
        mt={100}
      >
        {'Experience'}
      </Title>
      <SimpleGrid
        cols={largeScreen ? 2 : 1}
        spacing="sm"
      >
        <div>
          <TabGroup />
        </div>
        <SimpleGrid
          cols={largeScreen ? 2 : 1}
          spacing="xl"
        >
          <div>
            <Title order={2}>{'Work'}</Title>
            <TimelineComponent
              data={workTimelineData}
              className={estyles.workTimeline}
            />
          </div>
          <div>
            <Title order={2}>{'Eduction'}</Title>
            <TimelineComponent
              data={educationTimelineData}
              className={estyles.EducationTimeline}
            />
          </div>
        </SimpleGrid>
      </SimpleGrid>
    </div>
  )
}

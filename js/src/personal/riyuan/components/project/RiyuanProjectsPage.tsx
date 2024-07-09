import { Container, Title } from '@mantine/core'
import { projects } from '@/personal/riyuan/components/project/projectData'
import { ProjectItem } from '@/personal/riyuan/components/project/projectItem.tsx'
import styles from '@/personal/riyuan/Riyuan.module.css'

export function RiyuanProjectsPage() {
  return (
    <div className={styles.container}>
      <Container>
        <Title
          className={styles.title}
          ta="left"
          mt={100}
        >
          {'Project Page'}
        </Title>
        <div>
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

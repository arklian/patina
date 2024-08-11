import { Container, Title } from '@mantine/core'
import { projects } from '@/personal/riyuan/pages/project/projectData.ts'
import { ProjectItem } from '@/personal/riyuan/pages/project/ProjectItem.tsx'
import styles from '@/personal/riyuan/Riyuan.module.css'

/**
 * This component renders the Projects Page for Riyuan
 * It displays a list of projects with their details
 */
export function ProjectsPage() {
  return (
    <div className={styles.container}>
      <Container>
        <Title className={styles.title} ta="left" mt={100}>
          {'Project Page'}
        </Title>
        <div>
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </div>
      </Container>
    </div>
  )
}

import { Box } from '@mantine/core'
import styles from '@/personal/haoking/Haoking.module.css'
import { ProjectText } from '@/personal/haoking/projects/ProjectText.tsx'
import { projectsData } from '@/personal/haoking/projects/project.ts'

/* Component for right side of Projects page */
export function RightProjects({ setImage }: { setImage: any }) {
  return (
    <Box
      ml={90}
      mr={300}
      mt={70}
      maw={600}
      className={styles.animate_fade_in_delay}
    >
      {projectsData.map((project) => (
        <ProjectText project={project} setImage={setImage} />
      ))}
    </Box>
  )
}

import { Container, Text, Title } from '@mantine/core'
import { ProjectContent } from './ProjectContent.tsx'
import { Section } from '../Types.tsx'
import styles from './Main.module.css'

export function SectionContent({ section }: { section: Section }) {
  return (
    <div className={styles.section}>
      <Container key={section.id} id={section.title}>
        <Title size="3rem" mb="0.5rem" className={styles.title}>
          {section.title}
        </Title>
        <Text size="1.25rem" lh="xs" className={styles.text}>
          {section.description}
        </Text>
        {section.subsections.map((project) => (
          <ProjectContent key={project.id} project={project} />
        ))}
      </Container>
    </div>
  )
}

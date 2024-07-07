import { Container, Text, Title } from '@mantine/core'
import { ProjectContent } from './ProjectContent.tsx'
import { Section } from './Types.tsx'
import styles from './Amanda.module.css'

export function SectionContent({ section }: { section: Section }) {
  return (
    <>
      <Container
        key={section.id}
        id={section.title}
        className={styles.section}
        mb="3rem"
      >
        <Title
          size="3rem"
          mb="0.5rem"
        >
          {section.title}
        </Title>
        <Text
          size="1.5rem"
          lh="xs"
        >
          {section.description}
        </Text>
        {section.subsections.map((project) => (
          <ProjectContent project={project} />
        ))}
      </Container>
    </>
  )
}

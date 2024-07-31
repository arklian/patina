import { Container, Title } from '@mantine/core'
import { ResumeSection } from '../Types.tsx'
import { ResumeSubsection } from './ResumeSubsection.tsx'
import styles from '@/personal/amanda/Amanda.module.css'

export function ResumeSectionContent({ section }: { section: ResumeSection }) {
  return (
    <>
      <Container
        key={section.id}
        id={section.title}
        className={styles.section}
        mb="3rem"
      >
        <Title size="3rem" mb="0.5rem">
          {section.title}
        </Title>
        {section.content.map((subsection, index) => (
          <ResumeSubsection key={index} subsection={subsection} />
        ))}
      </Container>
    </>
  )
}

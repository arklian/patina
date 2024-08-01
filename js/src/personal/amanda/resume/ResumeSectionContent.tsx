import { Container, Group, Text, Title } from '@mantine/core'
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
        {section.title === 'skills' && (
          <div>
            {section.content.map((subsection) => (
              <div>
                <Title
                  size="2rem"
                  mb="0.5rem"
                  className={styles.resumeSkillsTitle}
                >
                  {subsection.title}
                </Title>
                <Group>
                  {subsection.info.map((info) => (
                    <Text size="xl" className={styles.resumeSkills}>
                      {info}
                    </Text>
                  ))}
                </Group>
              </div>
            ))}
          </div>
        )}
        {section.title !== 'skills' && (
          <div>
            {section.content.map((subsection) => (
              <ResumeSubsection key={subsection.id} subsection={subsection} />
            ))}
          </div>
        )}
      </Container>
    </>
  )
}

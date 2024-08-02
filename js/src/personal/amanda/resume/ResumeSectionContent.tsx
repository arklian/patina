import { Box, Container, Group, Text, Title } from '@mantine/core'
import { ResumeSection } from '../Types.tsx'
import { ResumeSubsection } from './ResumeSubsection.tsx'
import styles from '@/personal/amanda/resume/Resume.module.css'

export function ResumeSectionContent({ section }: { section: ResumeSection }) {
  return (
    <>
      <Container
        key={section.id}
        id={section.title}
        className={styles.sectionContainer}
      >
        <Title size="3rem" className={styles.sectionTitle}>
          {section.title}
        </Title>
        {section.title === 'education' && (
          <div>
            {section.content.map((subsection) => (
              <>
                <Title size="2rem" className={styles.resumeTitle}>
                  {subsection.title}
                </Title>
                <Box className={styles.resumeHeading}>
                  <Title size="1.5rem" className={styles.resumeSubtitle}>
                    {subsection.subtitle}
                  </Title>
                  <Text size="1.25rem" lh="xs" className={styles.resumeDate}>
                    {subsection.date}
                  </Text>
                </Box>
                {subsection.info.map((info, index) => (
                  <Text key={index} className={styles.bulletText}>
                    {info}
                  </Text>
                ))}
              </>
            ))}
          </div>
        )}
        {section.title === 'skills' && (
          <div>
            {section.content.map((subsection) => (
              <>
                <Title
                  size="2rem"
                  mb="0.5rem"
                  className={styles.resumeSkillsTitle}
                >
                  {subsection.title}
                </Title>
                <Group gap="xs">
                  {subsection.info.map((info) => (
                    <Text size="xl" className={styles.resumeSkills}>
                      {info}
                    </Text>
                  ))}
                </Group>
              </>
            ))}
          </div>
        )}
        {section.title !== 'skills' && section.title !== 'education' && (
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

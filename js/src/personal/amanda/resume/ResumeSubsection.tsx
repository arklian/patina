import { Box, Container, List, Text, Title } from '@mantine/core'
import { ResumeContent } from '../Types.tsx'
import styles from './Resume.module.css'

export function ResumeSubsection({
  subsection,
}: {
  subsection: ResumeContent
}) {
  return (
    <>
      <Container
        key={subsection.id}
        id={subsection.title}
        className={styles.subsectionContainer}
      >
        <Box className={styles.resumeHeading}>
          <Title size="2rem" className={styles.resumeTitle}>
            {subsection.title}
          </Title>
          <Text size="1.25rem" lh="xs" className={styles.resumeDate}>
            {subsection.date}
          </Text>
        </Box>
        <Title size="1.5rem" className={styles.resumeSubtitle}>
          {subsection.subtitle}
        </Title>
        {subsection.info.map((info, index) => (
          <List key={index} listStyleType="disc" withPadding size="xl">
            <List.Item lh="xs" className={styles.bulletText}>
              {info}
            </List.Item>
          </List>
        ))}
      </Container>
    </>
  )
}

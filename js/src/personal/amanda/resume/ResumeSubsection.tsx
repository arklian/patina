import { Box, Container, List, Text, Title } from '@mantine/core'
import { ResumeContent } from '../Types.tsx'
import styles from '../Amanda.module.css'

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
        className={styles.section}
        mb="3rem"
        ml="3rem"
      >
        <Box className={styles.resumeHeading}>
          <Title
            size="2rem"
            mb="0.5rem"
            className={styles.resumeTitle}
          >
            {subsection.title}
          </Title>
          <Text
            size="1.5rem"
            mb="1rem"
            lh="xs"
            className={styles.resumeDate}
          >
            {subsection.date}
          </Text>
        </Box>
        <Title
          size="1.5rem"
          mb="0.5rem"
          className={styles.resumeSubtitle}
        >
          {subsection.subtitle}
        </Title>
        {subsection.info.map((info) => (
          <List
            listStyleType="disc"
            withPadding
            size="xl"
          >
            <List.Item
              mb="1rem"
              lh="xs"
            >
              {info}
            </List.Item>
          </List>
        ))}
      </Container>
    </>
  )
}

import { Container, Divider, Pill, Title, Text } from '@mantine/core'
import styles from './Amanda.module.css'
import { Navbar } from './Navbar.tsx'
import data from './Data.json'

interface Project {
  id: number
  title: string
  description: string
  skills: String[]
}

interface Section {
  id: number
  title: string
  description: string
  subsections: Project[]
}

export function MainPage() {
  const info = data.info as Section[]
  return (
    <Container
      size="responsive"
      className={styles.mainPage}
    >
      <Container className={styles.leftSide}>
        <Container className={styles.intro}>
          <Title>{'Amanda Ruan'}</Title>
          <Text>{'Software Engineer'}</Text>
        </Container>
        <Navbar />
      </Container>
      <Container className={styles.content}>
        {info.map((section) => (
          <Container key={section.id}>
            <Title>{section.title}</Title>
            <Text>{section.description}</Text>
            {section.subsections.map((proj) => (
              <Container
                key={proj.id}
                className={styles.project}
              >
                <Title order={3}>{proj.title}</Title>
                <Text>{proj.description}</Text>
                {proj.skills.map((skill, index) => (
                  <Pill
                    key={index}
                    size="lg"
                    className={styles.skill}
                  >
                    {skill}
                  </Pill>
                ))}
              </Container>
            ))}
            <Divider my="md" />
          </Container>
        ))}
      </Container>
    </Container>
  )
}

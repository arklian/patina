import { Anchor, Container, Image, Pill, Text, Title } from '@mantine/core'
import { Project } from '../Types.tsx'
import styles from '../Amanda.module.css'

export function ProjectContent({ project }: { project: Project }) {
  return (
    <>
      <Anchor
        href={project.link}
        underline="never"
        target="_blank"
        className={styles.projectLink}
      >
        <Container
          key={project.id}
          className={styles.project}
          mt="3rem"
          ml="3rem"
        >
          <div>
            <Title
              size="2rem"
              mb="0.5rem"
            >
              {project.title}
            </Title>
            <Text
              size="1.5rem"
              mb="1rem"
              lh="xs"
            >
              {project.description}
            </Text>
            {project.skills.map((skill, index) => (
              <Pill
                key={index}
                size="lg"
                mr="1rem"
                className={styles.skill}
              >
                {skill}
              </Pill>
            ))}
          </div>
          <div>
            <Image
              radius="md"
              h={200}
              w="auto"
              fit="contain"
              src={project.image}
              ml="2rem"
            />
          </div>
        </Container>
      </Anchor>
    </>
  )
}

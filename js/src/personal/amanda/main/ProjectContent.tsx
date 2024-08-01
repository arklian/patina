import {
  Anchor,
  Container,
  Group,
  Image,
  Pill,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { Project } from '../Types.tsx'
import styles from '../Amanda.module.css'

export function ProjectContent({ project }: { project: Project }) {
  return (
    <div>
      <Anchor
        href={project.link}
        underline="never"
        target="_blank"
        className={styles.projectLink}
      >
        <div key={project.id} className={styles.project}>
          <Container m="1rem">
            <Title size="2rem" mb="0.5rem">
              {project.title}
            </Title>
            <Text size="1.5rem" mb="1rem" lh="xs">
              {project.description}
            </Text>
            <Group>
              {project.skills.map((skill, index) => (
                <Pill key={index} size="lg" className={styles.skill}>
                  {skill}
                </Pill>
              ))}
            </Group>
          </Container>
          <Stack justify="center">
            <Image
              radius="md"
              h={200}
              w="auto"
              fit="contain"
              src={project.image}
              ml="2rem"
            />
          </Stack>
        </div>
      </Anchor>
    </div>
  )
}

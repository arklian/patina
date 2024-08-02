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
import styles from './Main.module.css'

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
          <Container className={styles.container}>
            <Title size="2rem" mb="0.5rem" className={styles.subtitle}>
              {project.title}
            </Title>
            <Text size="1.25rem" mb="1rem" lh="xs" className={styles.text}>
              {project.description}
            </Text>
            <Group gap="xs">
              {project.skills.map((skill, index) => (
                <Pill key={index} size="lg" className={styles.skill}>
                  {skill}
                </Pill>
              ))}
            </Group>
          </Container>
          <Group justify="center">
            <Stack justify="center">
              <Image
                radius="md"
                fit="contain"
                src={project.image}
                className={styles.image}
              />
            </Stack>
          </Group>
        </div>
      </Anchor>
    </div>
  )
}

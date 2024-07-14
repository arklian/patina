import { Container, Title, Text } from '@mantine/core'
import styles from '@/personal/riyuan/Riyuan.module.css'

/**
 * This component renders the projects page ->
 * Renders a page that highlights different projects completed by me
 * Allows visitors to get a sense of the work I've completed
 */
export function ProjectsPage() {
  return (
    <div className={styles.container}>
      <Container>
        <Title
          className={styles.title}
          ta="left"
          mt={100}
        >
          {'Project Page'}
        </Title>
        <Text
          c="dimmed"
          ta="left"
          size="lg"
          maw={580}
          mx="auto"
          mt="xl"
        >
          {
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        </Text>
      </Container>
    </div>
  )
}

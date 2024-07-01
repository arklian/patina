import { Text, Title, Box, Divider, Badge, Group } from '@mantine/core'
import styles from '../Haoking.module.css'
import { theme } from '../theme.ts'

/* Component for right side of Projects page */
export function RightProjects() {
  const projectsData = [
    {
      title: 'Todo App',
      subtitle: 'manage your tasks',
      link: 'https://github.com/luohk000/todo-app',
      tools: ['flutter'],
    },
    {
      title: 'Quiz App',
      subtitle: 'quiz yourself',
      link: 'https://github.com/luohk000/quizWIP',
      tools: ['flutter', 'firebase'],
    },
    {
      title: 'Word Search Generator',
      subtitle: 'fun stuff',
      link: '',
      tools: ['c++'],
    },
  ]

  return (
    <Box
      ml={90}
      mr={300}
      mt={45}
      maw={600}
      className={styles.animate_fade_in_delay}
    >
      <Divider
        mt={120}
        pt={20}
        maw={350}
      />
      {projectsData.map((project) => (
        <div>
          <Group>
            <Title>
              <Text
                inherit
                component="a"
                href={project.link}
                target="_blank"
              >
                {project.title}
              </Text>
            </Title>
            {project.tools.map((tool) => (
              <Badge color={theme.colors.black[6]}>{tool}</Badge>
            ))}
          </Group>
          <Text mb={10}>{project.subtitle}</Text>
        </div>
      ))}
    </Box>
  )
}

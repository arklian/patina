import {
  Text,
  Title,
  Box,
  Badge,
  Group,
  useComputedColorScheme,
} from '@mantine/core'
import { useHover } from '@mantine/hooks'
import styles from '@/personal/haoking/Haoking.module.css'
import { theme } from '@/personal/haoking/theme.ts'

/* Component for right side of Projects page */
export function RightProjects({ setImage }: { setImage: any }) {
  const colorScheme = useComputedColorScheme()
  const { hovered: hovered1, ref: ref1 } = useHover()
  const { hovered: hovered2, ref: ref2 } = useHover()
  const { hovered: hovered3, ref: ref3 } = useHover()
  const projectsData = [
    {
      title: 'Todo App',
      subtitle: 'manage your tasks',
      link: 'https://github.com/luohk000/todo-app',
      image:
        'https://i.natgeofe.com/k/6289c775-a06c-426a-badb-8d181a55237b/raccoon-grass_2x1.jpg',
      tools: ['flutter'],
      isHovered: hovered1,
      ref: ref1,
    },
    {
      title: 'Quiz App',
      subtitle: 'quiz yourself',
      link: 'https://github.com/luohk000/quizWIP',
      image:
        'https://m.media-amazon.com/images/I/71HJRIGU81L._AC_UF894,1000_QL80_.jpg',
      tools: ['flutter', 'firebase'],
      isHovered: hovered2,
      ref: ref2,
    },
    {
      title: 'Word Search Generator',
      subtitle: 'fun stuff',
      link: '',
      image:
        'https://www.westernpest.com/wp-content/uploads/Raccoon_in_Trash_iStock-91705369-scaled.jpg',
      tools: ['c++'],
      isHovered: hovered3,
      ref: ref3,
    },
  ]

  let anyHovered = false
  projectsData.forEach((project) => {
    if (project.isHovered) {
      setImage(project.image)
      anyHovered = true
    }
  })
  if (!anyHovered) setImage('')

  return (
    <Box
      ml={90}
      mr={300}
      mt={70}
      maw={600}
      className={styles.animate_fade_in_delay}
    >
      {projectsData.map((project) => (
        <div>
          <div
            className={styles.project}
            ref={project.ref}
          >
            <Group>
              <Title>
                <Text
                  className={styles.action}
                  inherit
                  component="a"
                  href={project.link}
                  target="_blank"
                >
                  {project.title}
                </Text>
              </Title>
              {project.tools.map((tool) => (
                <Badge
                  color={
                    colorScheme === 'light' ?
                      theme.colors.accent[8]
                    : theme.colors.black[6]
                  }
                >
                  {tool}
                </Badge>
              ))}
            </Group>
          </div>
          <Text mb={10}>{project.subtitle}</Text>
        </div>
      ))}
    </Box>
  )
}

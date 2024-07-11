import {
  Badge,
  Group,
  Text,
  Title,
  useComputedColorScheme,
} from '@mantine/core'
import { useHover } from '@mantine/hooks'
import { useState } from 'react'
import styles from '@/personal/haoking/Haoking.module.css'
import { theme } from '@/personal/haoking/theme.ts'

export function ProjectText({
  project,
  setImage,
}: {
  project: any
  setImage: any
}) {
  const colorScheme = useComputedColorScheme()
  const { hovered, ref } = useHover()
  const [previouslyHovered, setPreviouslyHovered] = useState(false)

  if (hovered && !previouslyHovered) {
    // if hovering for the first time
    setImage(project.image)
    setPreviouslyHovered(true)
  }
  if (!hovered && previouslyHovered) {
    // no longer hovering
    setImage('')
    setPreviouslyHovered(false)
  }
  return (
    <div>
      <div
        className={styles.project}
        ref={ref}
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
          {project.tools.map((tool: string) => (
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
  )
}

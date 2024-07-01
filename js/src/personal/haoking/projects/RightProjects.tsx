import { Text, Title, Box, Divider, Badge, Group } from '@mantine/core'
import styles from '../Haoking.module.css'
import { theme } from '../theme.ts'

/* Component for right side of Projects page */
export function RightProjects() {
  return (
    <Box
      ml={90}
      mr={350}
      mt={45}
      maw={400}
      className={styles.animate_fade_in_delay}
    >
      <Divider
        mt={120}
        pt={20}
        maw={350}
        color={theme.colors.white[6]}
      />
      <Group>
        <Title c={theme.colors.white[1]}>
          <Text
            inherit
            component="a"
            href="https://github.com/luohk000/todo-app"
            target="_blank"
          >
            {'Todo App'}
          </Text>
        </Title>
        <Badge color={theme.colors.black[6]}>{'Flutter'}</Badge>
      </Group>
      <Text c={theme.colors.white[2]}>{'manage your tasks'}</Text>
      <Group>
        <Title c={theme.colors.white[1]}>
          <Text
            inherit
            component="a"
            href="https://github.com/luohk000/quizWIP"
            target="_blank"
          >
            {'Quiz App'}
          </Text>
        </Title>
        <Badge color={theme.colors.black[6]}>{'Flutter'}</Badge>
        <Badge color={theme.colors.black[6]}>{'Firebase'}</Badge>
      </Group>
      <Text c={theme.colors.white[2]}>{'quiz yourself'}</Text>
    </Box>
  )
}

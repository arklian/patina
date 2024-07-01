import { Text, Title, Box } from '@mantine/core'
import { theme } from '../theme.ts'
import styles from '../Haoking.module.css'

/* Component for left side of Projects page */
export function LeftProjects() {
  return (
    <Box
      ml={90}
      mt={45}
      className={styles.animate_fade_in}
    >
      <Title className={styles.title}>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{
            from: theme.colors.black[0],
            to: theme.colors.black[1],
          }}
        >
          {'Projects'}
        </Text>
      </Title>
    </Box>
  )
}

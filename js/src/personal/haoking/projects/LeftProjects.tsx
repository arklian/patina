import { Text, Title, Box } from '@mantine/core'
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
            from: 'gray',
            to: 'black',
          }}
        >
          {'Projects'}
        </Text>
      </Title>
    </Box>
  )
}

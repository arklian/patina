import { Title, Text, MantineProvider } from '@mantine/core'
import styles from './Kazi.module.css'
import { DarkModeToggle } from './components/DarkModeToggle/DarkModeToggle'
import { theme } from './theme.ts'

export function KaziPage() {
  return (
    <MantineProvider theme={theme}>
      <Title
        className={styles.title}
        ta="center"
        mt={100}
      >
        {'Welcome to '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'green', to: 'blue' }}
        >
          {"Kazi's Page"}
        </Text>
      </Title>
      <Text
        c="dimmed"
        ta="center"
        size="lg"
        maw={580}
        mx="auto"
        mt="xl"
      >
        {"Hey! I'm Kazi."}
      </Text>

      <DarkModeToggle />
    </MantineProvider>
  )
}

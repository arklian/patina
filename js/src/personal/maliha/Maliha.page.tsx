import { Title, Text, MantineProvider } from '@mantine/core'
import styles from './Maliha.module.css'
import { Menu } from './Menu.tsx'
import { theme } from './theme.ts'

export function MalihaPage() {
  return (
    <MantineProvider theme={theme}>
      <div className={styles.body}>
        <Menu />
        <Title
          className={styles.title}
          ta="center"
          mt={100}
        >
          {'Welcome to'}
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: 'red', to: 'blue' }}
          >
            {"Maliha's Page"}
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
          {"Hey, I'm Maliha"}
        </Text>
      </div>
    </MantineProvider>
  )
}

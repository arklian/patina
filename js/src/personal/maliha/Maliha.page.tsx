import { Title, Text } from '@mantine/core'
import styles from './Maliha.module.css'
import { Menu } from './Menu.tsx'

export function MalihaPage() {
  return (
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
  )
}

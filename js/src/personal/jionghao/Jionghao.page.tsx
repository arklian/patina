import { Title, Text, MantineProvider } from '@mantine/core'
import styles from './Jionghao.module.css'
import { theme } from './theme.ts'
import { FooterSocial } from './components/FooterSocial.tsx'
import { Header } from './components/Header.tsx'
import { Hero } from './components/Hero.tsx'

export function JionghaoPage() {
  return (
    <MantineProvider theme={theme}>
      <div className={styles.pageContainer}>
        <Header />
        <Hero />
        <Title
          className={styles.title}
          ta="center"
          mt={100}
        >
          {'Welcome to '}
          <Text
            inherit
            variant="gradient"
            gradient={{ from: 'green', to: 'blue' }}
          >
            {"Jionghao's Page"}
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
          {"Hey! I'm Jionghao."}
        </Text>
      </div>
      <FooterSocial />
    </MantineProvider>
  )
}

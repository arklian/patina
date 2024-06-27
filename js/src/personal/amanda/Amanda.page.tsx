import { Button, Center, MantineProvider, Title } from '@mantine/core'
import { useViewportSize } from '@mantine/hooks'
import { useState } from 'react'
import styles from './Amanda.module.css'
import { AmandaMainPage } from './Amanda.main.page.tsx'
import { theme } from './theme.ts'

export function AmandaPage() {
  const { height, width } = useViewportSize()
  const [landingPage, setLandingPage] = useState(1)

  return (
    <MantineProvider theme={theme}>
      {landingPage === 1 && ( // render loading page
        <div className={styles.landingPage}>
          <Center
            w={width}
            h={height / 2}
          >
            <Title
              className={styles.title}
              ta="center"
              mt={100}
            >
              {"Hi! I'm Amanda!"}
            </Title>
          </Center>
          <Center>
            <Button
              bg="none"
              variant="outline"
              color="white"
              onClick={() => setLandingPage(0)}
            >
              {'start'}
            </Button>
          </Center>
        </div>
      )}
      {landingPage === 0 && <AmandaMainPage />}
    </MantineProvider>
  )
}

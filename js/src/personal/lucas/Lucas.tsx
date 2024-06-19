import { RegistrationForm } from '@/personal/lucas/RegistrationForm'
import { Title, Text, Container, MantineProvider } from '@mantine/core'
import { TopSecretContent } from '@/personal/lucas/TopSecretContent'
import { useState } from 'react'
import { theme } from '@/personal/lucas/theme'

const DownloadAFile = (content: string) => {
  const dataBlob = new Blob([content], { type: 'text' })
  const dataUrl = window.URL.createObjectURL(dataBlob)
  const elem = window.document.createElement('a')
  elem.href = dataUrl
  elem.download = 'pwned!!1.txt'
  elem.click()
}

export function LucasPage() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  return (
    <MantineProvider theme={theme}>
      <Title
        ta="center"
        mt={100}
      >
        Welcome to{' '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'green', to: 'blue' }}
        >
          Lucas's Page v3
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
        Some top secret stuff here so register to enter.
      </Text>
      <Container
        fluid
        m="lg"
        p="lg"
      >
        {isLoggedIn ?
          <TopSecretContent />
        : <RegistrationForm
            onRegister={() => {
              DownloadAFile('Be careful of clicking buttons!')
              setLoggedIn(true)
            }}
          />
        }
      </Container>
    </MantineProvider>
  )
}

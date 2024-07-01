import { Title, Text, MantineProvider } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import styles from './Manny.module.css'
import { theme } from './theme.ts'
import { FooterSocial } from '@/personal/manny/components/FooterSocial.tsx'
import { ClickableImage } from '@/personal/manny/components/ClickableImage.tsx'

export function MannyPage() {
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
          gradient={{ from: 'white', to: 'blue' }}
        >
          {"Manny's Page"}
        </Text>
      </Title>
      <ClickableImage />
      <FooterSocial />
      <Outlet />
    </MantineProvider>
  )
}

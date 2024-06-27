
import {Title, Text, MantineProvider} from '@mantine/core'
import styles from './Manny.module.css'
import { theme } from './theme.ts'
import {FooterCentered} from "@/personal/manny/components/FooterCentered.tsx";


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
          gradient={{ from: 'green', to: 'blue' }}
        >
          {"Manny's Page"}
        </Text>
      </Title>
      <FooterCentered />


    </MantineProvider>
  )
}

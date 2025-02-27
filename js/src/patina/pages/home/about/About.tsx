import { Button, Text, useMantineTheme } from '@mantine/core'
import { Link } from 'react-router-dom'
import styles from './About.module.css'

export function About() {
  const theme = useMantineTheme()

  return (
    <div className={styles.container}>
      <Text className={styles.aboutText}>
        {'We’re on a mission to address the unique struggles of AANHPI'}
        <span className={styles.aboutHighlight}>
          {' (Asian American, Native Hawaiian, and Pacific Islanders)'}
        </span>
        {' women and foster the diverse, ' +
          'inclusionary leaders of tomorrow.'}
      </Text>
      <Text className={styles.aboutText}>
        {
          'Wherever you are on your career and allyship journey, we’re here to boldly celebrate what makes you unique — your patina.'
        }
      </Text>
      <div className={styles.moreButton}>
        <Button
          variant={'filled'}
          color={theme.colors.dark[0]}
          autoContrast
          fullWidth
          component={Link}
          to="/mission"
        >
          <Text size="xl" fw={200}>
            {'More about us'}
          </Text>
        </Button>
      </div>
    </div>
  )
}

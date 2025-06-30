import { Paper, Image, UnstyledButton, Text } from '@mantine/core'
import styles from './FractalBadge.module.css'

export function FractalBadge() {
  return (
    <Paper radius={8} className={styles.badge}>
      <UnstyledButton
        component={'a'}
        href="https://fractalbootcamp.com/office"
        target="_blank"
      >
        <Image
          src="https://patina-prod.nyc3.cdn.digitaloceanspaces.com/webimg/fractalBanner.png"
          fit={'contain'}
          className={styles.banner}
        />
      </UnstyledButton>
      <Text c={'#f4ebac'} size={'xl'} className={styles.fractalMessage}>
        {
          'Thanks to Fractal Tech for generously hosting our in person meetups! Check out their website above!'
        }
      </Text>
    </Paper>
  )
}

import { Paper, BackgroundImage, UnstyledButton } from '@mantine/core'
import styles from './FractalBadge.module.css'

export function FractalBadge() {
  return (
    <Paper withBorder radius={8} className={styles.badge}>
      <BackgroundImage
        src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/581b5a3b-de3d-4275-baa5-06e4abd37b48/410928484_122116387622119611_8184245176104460919_n/w=3840,quality=90,fit=scale-down"
        className={styles.background}
      >
        <UnstyledButton
          component={'a'}
          href="https://fractalbootcamp.com/office"
          target="_blank"
          c={'#ce3364'}
          color={'#f4ebac'}
          size={'xl'}
          className={styles.fractalLink}
        >
          {
            'Thanks to Fractal Tech for generously hosting our in person meetups! Check them out here!'
          }
        </UnstyledButton>
      </BackgroundImage>
    </Paper>
  )
}

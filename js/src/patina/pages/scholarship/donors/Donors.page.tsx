import { Carousel } from '@mantine/carousel'
import styles from './Donors.module.css'

export function DonorSection() {
  return (
    <div className={styles.donorContainer}>
      <div className={styles.donorTitle}>
        {'Thanks to our donors'}
        <div className={styles.donorText}>
          {
            'The Patina Network Scholarship is funded by individual, private donors. Thanks so much to those who have contributed!'
          }
        </div>
      </div>
      <Carousel
        className={styles.donorImages}
        align="center"
        slideSize="25%"
        slideGap="sm"
        loop
        withControls
      >
        <Carousel.Slide className={styles.slide}>{'Image1'}</Carousel.Slide>
        <Carousel.Slide className={styles.slide}>{'Image2'}</Carousel.Slide>
        <Carousel.Slide className={styles.slide}>{'Image3'}</Carousel.Slide>
        <Carousel.Slide className={styles.slide}>{'Image4'}</Carousel.Slide>
        <Carousel.Slide className={styles.slide}>{'Image5'}</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </div>
  )
}

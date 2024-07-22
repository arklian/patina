import { Carousel } from '@mantine/carousel'
import styles from './impact.module.css'

export function Impact() {
  return (
    <div className={styles.carouselContainer}>
      <Carousel height={200} slideGap="md" controlsOffset="xs">
        <Carousel.Slide>
          <div className={styles.slide}>
            <div className={styles.imagePlaceholder}></div>
            <div className={styles.textContainer}>
              <h3>{'Cinthia and Jasmine'}</h3>
              <p>
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              </p>
              <p className={styles.quote}>{'“Quote from student”'}</p>
            </div>
          </div>
        </Carousel.Slide>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  )
}

import '@mantine/carousel/styles.css'
import { Image } from '@mantine/core'
import { Carousel, Embla, useAnimationOffsetEffect } from '@mantine/carousel'
import { useState } from 'react'
import styles from './ImportantSection.module.css'

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png',
]
//"Why this is important" section of the Patina Home page
export function ImportantSection() {
  //fixes the incorrect slide offsets after animation finishes
  const TRANSITION_DURATION = 200
  const [embla, setEmbla] = useState<Embla | null>(null)

  useAnimationOffsetEffect(embla, TRANSITION_DURATION)
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ))
  return (
    <div className={styles.section}>
      <Carousel withIndicators loop getEmblaApi={setEmbla}>
        {slides}
      </Carousel>
    </div>
  )
}

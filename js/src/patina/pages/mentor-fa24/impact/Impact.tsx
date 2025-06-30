import { Carousel } from '@mantine/carousel'
import { Text, Flex, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import styles from './Impact.module.css'

const info = [
  {
    title: 'Cinthia and Jasmine',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    quote: '“Quote from student”',
  },
  {
    title: 'Cinthia and Jasmine',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    quote: '“Quote from student”',
  },
]

export function Impact() {
  const smallScreen = useMediaQuery('max-width: 996')
  const slides = info.map(
    (item: { title: string; text: string; quote: string }) => (
      <Carousel.Slide>
        <Flex className={styles.slide}>
          <Flex className={styles.imagePlaceholder}></Flex>
          <Flex className={styles.textContainer}>
            <Title className={styles.title}>{item.title}</Title>
            <Text>{item.text}</Text>
            <Text className={styles.quote}>{item.quote}</Text>
          </Flex>
        </Flex>
      </Carousel.Slide>
    ),
  )
  return (
    <div>
      <div>
        <Title className={styles.titleContainer}>{'Impact'}</Title>
      </div>
      <Flex className={styles.carouselContainer}>
        <Carousel
          withIndicators
          height="100%"
          withControls={!smallScreen}
          classNames={{ controls: styles.controls }}
        >
          {slides}
        </Carousel>
      </Flex>
    </div>
  )
}

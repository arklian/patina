import { Text } from '@mantine/core'
import { Cards, CardsProps } from '@/patina/components/Cards'
import { imageUrls } from '@/patina/assets/images'
import styles from './Impact.module.css'

const detailsMap: CardsProps[] = [
  {
    title: 'Name',
    details: ' “Quote Lorem ipsum dolor sit amet, consectetur adipiscing” ',
    img: imageUrls.placeholder.src,
    bottom: 'Job Placement Stat',
    alt: imageUrls.placeholder.alt,
    underline: false,
  },
  {
    title: 'Name',
    details: ' “Quote Lorem ipsum dolor sit amet, consectetur adipiscing” ',
    img: imageUrls.placeholder.src,
    bottom: 'Job Placement Stat',
    alt: imageUrls.placeholder.alt,
    underline: false,
  },
]

/** Displays custom cards and images of the various initiatives of Patina */
export function Impact() {
  return (
    <>
      <div className={styles.impact_container}>
        <Text className={styles.title}>{'Impact'}</Text>
        <div className={styles.container}>
          {detailsMap.map(
            ({ title, details, img, bottom, alt, underline }, index) => (
              <Cards
                key={index}
                title={title}
                details={details}
                img={img}
                bottom={bottom}
                alt={alt}
                underline={underline}
              />
            ),
          )}
        </div>
      </div>
    </>
  )
}
import { Text } from '@mantine/core'
import { Cards } from '../components/Cards.tsx'
import { imageUrls } from '@/patina/assets/images'
import styles from './Initiatives.module.css'

const detailsMap = [
  {
    title: 'Mentorship',
    details:
      'Mentor matching and internships for students and young professionals.',
    img: imageUrls.mentorship.src,
    link: '/mentorship',
    alt: 'Group picture of all interns.',
  },
  {
    title: 'Scholarship',
    details: 'Annual scholarship fund for under resourced students.',
    img: imageUrls.scholarship.src,
    link: '/scholarship',
    alt: 'Woman posing in graduation gown and holding a degree.',
  },
  {
    title: 'Community',
    details:
      'Spaces to connect with community and learn about diverse cultures.',
    img: imageUrls.community.src,
    link: '/community',
    alt: 'Group of women sitting on chairs. They are talking to each other.',
  },
]

/** Displays custom cards and images of the various initiatives of Patina */
export function Initiatives() {
  return (
    <>
      <div className={styles.container}>
        <Text className={styles.title}>{'Our initiatives'}</Text>
        {detailsMap.map(({ title, details, img, link, alt }, index) => (
          <Cards
            key={index}
            title={title}
            details={details}
            img={img}
            link={link}
            alt={alt}
          />
        ))}
      </div>
    </>
  )
}

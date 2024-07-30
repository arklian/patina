import { Text } from '@mantine/core'
import { Cards } from '../../components/Cards.tsx'
import { imageUrls } from '@/patina/assets/images'
import styles from './Initiatives.module.css'

const detailsMap = [
  {
    title: 'Mentorship',
    details:
      'Mentor matching and internships for students and young professionals.',
    img: imageUrls.mentorshipHome.src,
    link: '/mentorship',
    alt: 'Group picture of all interns.',
    bottom: 'Learn more\u2192',
    underline: true,
  },
  {
    title: 'Scholarship',
    details: 'Annual scholarship fund for under resourced students.',
    img: imageUrls.scholarshipHome.src,
    link: '/scholarship',
    alt: 'Woman posing in graduation gown and holding a degree.',
    bottom: 'Learn more\u2192',
    underline: true,
  },
  {
    title: 'Community',
    details:
      'Spaces to connect with community and learn about diverse cultures.',
    img: imageUrls.communityHome.src,
    link: '/community',
    alt: 'Group of women sitting on chairs. They are talking to each other.',
    bottom: 'Learn more\u2192',
    underline: true,
  },
]

/** Displays custom cards and images of the various initiatives of Patina */
export function Initiatives() {
  return (
    <>
      <div className={styles.initiatives_container}>
        <div className={styles.container}>
          <Text className={styles.title}>{'Our initiatives'}</Text>
          {detailsMap.map(
            ({ title, details, img, link, bottom, alt, underline }, index) => (
              <Cards
                key={index}
                title={title}
                details={details}
                img={img}
                link={link}
                alt={alt}
                bottom={bottom}
                underline={underline}
              />
            ),
          )}
        </div>
      </div>
    </>
  )
}

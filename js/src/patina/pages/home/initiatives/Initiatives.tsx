import { Title } from '@mantine/core'
import { Cards, CardsProps } from '@/patina/components/Cards'
import { imageUrls } from '@/patina/assets/images'
import styles from './Initiatives.module.css'

const detailsMap: CardsProps[] = [
  {
    title: 'Mentorship',
    details:
      'Mentor matching and internships for students and young professionals.',
    img: imageUrls.mentorshipHome.src,
    alt: imageUrls.mentorshipHome.alt,
    link: '/mentorship',
  },
  {
    title: 'Scholarship',
    details: 'Annual scholarship fund for under resourced students.',
    img: imageUrls.scholarshipHome.src,
    alt: imageUrls.scholarshipHome.alt,
    link: '/scholarship',
  },
  {
    title: 'Community',
    details:
      'Spaces to connect with the community and to learn about diverse cultures.',
    img: imageUrls.communityHome.src,
    alt: imageUrls.communityHome.alt,
    link: '/community',
  },
]

/** Displays custom cards and images of the various initiatives of Patina */
export function Initiatives() {
  return (
    <>
      <div className={styles.initiativesContainer}>
        <div className={styles.container}>
          <Title className={styles.title} order={3}>
            {'Our initiatives'}
          </Title>
          {detailsMap.map(({ title, details, img, alt, link }, index) => (
            <Cards
              key={index}
              title={title}
              details={details}
              img={img}
              alt={alt}
              link={link}
            />
          ))}
        </div>
      </div>
    </>
  )
}

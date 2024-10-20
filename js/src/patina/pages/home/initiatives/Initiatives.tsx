import { Title } from '@mantine/core'
import { Cards, CardsProps } from '@/patina/components/Cards'
import { imageUrls } from '@/patina/assets/images'
import styles from './Initiatives.module.css'

const detailsMap: CardsProps[] = [
  {
    title: 'Mentorship',
    details: 'Mentor matching for students and young professionals.',
    img: imageUrls.communityHome.src,
    alt: imageUrls.communityHome.alt,
    link: '/mentorship',
  },
  // {
  //   title: 'Scholarship',
  //   details: 'Annual scholarship fund for under resourced students.',
  //   img: imageUrls.scholarshipHome.src,
  //   alt: imageUrls.scholarshipHome.alt,
  //   link: '/scholarship',
  // },
  {
    title: "Internship '24",
    details: 'Building the skills of the next generation through the summer.',
    img: imageUrls.mentorshipHome.src,
    alt: imageUrls.mentorshipHome.alt,
    link: '/internship',
  },
  {
    title: 'Events',
    details:
      'Join us for events, where you can form new connections and maybe learn something new!',
    img: imageUrls.scholarshipHome.src,
    alt: imageUrls.scholarshipHome.alt,
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

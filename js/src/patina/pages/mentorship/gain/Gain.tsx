import { SimpleGrid, Title } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { MentorshipCards } from './MentorshipCards.tsx'
import styles from './Gain.module.css'
import { imageUrls } from '@/patina/assets/images'

const cardMap = [
  {
    title: 'Field-Specific Mentorship',
    details:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    img: imageUrls.mentorshipField.src,
    alt: imageUrls.mentorshipField.alt,
  },
  {
    title: 'Networking Skills',
    details:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    img: imageUrls.mentorshipNetworking.src,
    alt: imageUrls.mentorshipNetworking.alt,
  },
  {
    title: 'Interview Prep',
    details:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    img: imageUrls.mentorshipInterview.src,
    alt: imageUrls.mentorshipInterview.alt,
  },
]

/**
 * Gain component for the Patina Network Mentorship program.
 * Displays a title, and 3 Cards Component displaying what you will gain after
 * this program
 */
export function Gain() {
  const largeScreen = useMediaQuery('(min-width: 40em)')
  return (
    <div>
      <Title className={styles.title}>{'What Will I Gain?'}</Title>
      <SimpleGrid cols={largeScreen ? 3 : 1} className={styles.cards}>
        {cardMap.map(({ title, details, img, alt }, index) => (
          <MentorshipCards
            key={index}
            title={title}
            details={details}
            img={img}
            alt={alt}
          />
        ))}
      </SimpleGrid>
    </div>
  )
}

import { Flex, Title } from '@mantine/core'
import { MentorshipCards } from './MentorshipCards.tsx'
import styles from './Gain.module.css'
import { imageUrls } from '@/patina/assets/images'

const cardMap = [
  {
    title: 'Field-Specific Mentorship',
    details:
      'Connect with a mentor who has been in the same shoes as you through education and your future career path. Ask questions specific to your field of interest and how you can better prepare yourself for this specialization.',
    img: imageUrls.mentorshipField.src,
    alt: imageUrls.mentorshipField.alt,
  },
  {
    title: 'Networking Skills',
    details:
      'The first reach out of any type can be intimidating, whether that be by email, coffee chat or at an event. A mentor from Patina will ease you into it by helping you set a goal for networking readiness, walk you through best examples, and provide feedback for your strategy and drafts before you practice for real. ',
    img: imageUrls.mentorshipNetworking.src,
    alt: imageUrls.mentorshipNetworking.alt,
  },
  {
    title: 'Cultural Awareness and Exploration',
    details:
      'Discover the unique challenges and opportunities that come with being AANHPI in the professional world. Our program goes beyond traditional career guidance by fostering cultural awareness and understanding, enabling us to celebrate and explore the rich diversity of AANHPI cultures.',
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
  return (
    <div>
      <Title className={styles.title}>{'What Will I Gain?'}</Title>
      <Flex className={styles.cards}>
        {cardMap.map(({ title, details, img, alt }, index) => (
          <MentorshipCards
            key={index}
            title={title}
            details={details}
            img={img}
            alt={alt}
          />
        ))}
      </Flex>
    </div>
  )
}

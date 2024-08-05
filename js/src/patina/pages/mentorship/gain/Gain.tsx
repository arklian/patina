import { Flex, Title } from '@mantine/core'
import { MentorshipCards } from './MentorshipCards.tsx'
import styles from './Gain.module.css'
import { imageUrls } from '@/patina/assets/images'

const cardMap = [
  {
    title: 'Field-Specific Mentorship',
    details:
      'Connect with our Track Mentor who has been in the same shoes as you through education and your future career path. Ask questions specific to your field of interest and how you can better prepare yourself for this specialization.',
    img: imageUrls.mentorshipField.src,
    alt: imageUrls.mentorshipField.alt,
  },
  {
    title: 'Networking Skills',
    details:
      'First networking email, coffee chat, conference, or any type of reach out can be intimidating. Group Mentor will coach a group of Mentees to set a goal for networking readiness, walk you through best examples, and provide feedback to your strategy and drafts before you practice for real.',
    img: imageUrls.mentorshipNetworking.src,
    alt: imageUrls.mentorshipNetworking.alt,
  },
  {
    title: 'Interview Prep',
    details:
      'Practice makes perfect. If you want a non-judgmental coach, Group Mentor, to hold you accountable, practice with us where we will push you to get used to the anxiety of interviews.',
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

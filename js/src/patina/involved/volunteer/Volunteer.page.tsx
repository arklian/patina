import { Title, Text, Image } from '@mantine/core'
import { imageUrls } from '../../assets/images.ts'
import { VolunteerCard } from './VolunteerCard'
import styles from './Volunteer.module.css'

export function Volunteer() {
  return (
    <div>
      <section className={styles.wrapper}>
        <div className={styles.text}>
          <Title order={2} className={styles.title}>
            {'Patina Network'} <br /> {'Apply to be a Volunteer'}
          </Title>
          <Text size="md" className={styles.description}>
            {
              'The Patina Network volunteer program is... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            }
          </Text>
        </div>
        <Image className={styles.volunteerImg} src={imageUrls.mentorship.src} />
      </section>
      <section className={styles.grid}>
        <VolunteerCard
          title="Social Media"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          type="Remote/In-person"
        />
        <VolunteerCard
          title="Social Media"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          type="Remote/In-person"
        />
        <VolunteerCard
          title="Social Media"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          type="Remote/In-person"
        />
        <VolunteerCard
          title="Social Media"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          type="Remote/In-person"
        />
      </section>
    </div>
  )
}

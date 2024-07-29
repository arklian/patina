import { Title, Text, Image, Button } from '@mantine/core'
import { imageUrls } from '../../assets/images.ts'
import { VolunteerCard } from './VolunteerCard'
import styles from './Volunteer.module.css'

export function VolunteerPage() {
  return (
    <div className={styles.container}>
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
        <Image
          className={styles.volunteerImg}
          src={imageUrls.VolunteerOpportunity.src}
        />
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
      <section className={styles.emailSection}>
        <div className={styles.backgroundBlur}> </div>
        <div className={styles.content}>
          <Text size="md" className={styles.emailText}>
            {
              "Want to get involved but don't necessarily align with these opportunities? Sign up to be on the volunteer list for future events! Please fill out this form, connect with us on Instagram and LinkedIn or email us at "
            }
            <a
              href={'mailto:hi@patinanetwork.org'}
              className={styles.emailEmail}
            >
              {'hi@patinanetwork.org'}
            </a>
            {' to join our volunteer email list'}
          </Text>
          <Button size="sm" className={styles.emailButton}>
            {'Sign Up'}
          </Button>
        </div>
      </section>
    </div>
  )
}

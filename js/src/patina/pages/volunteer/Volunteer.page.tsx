import { Text, Button } from '@mantine/core'
import { imageUrls } from '@/patina/assets/images.ts'
import { Hero } from '@/patina/components/Hero'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { VolunteerCard } from './VolunteerCard'
import { Forms } from '@/patina/components/Forms.tsx'
import styles from './Volunteer.module.css'
import {
  modalContent1,
  modalContent2,
  modalContent3,
  modalContent4,
} from './modalContents.ts'

export function VolunteerPage() {
  const message = (
    <Text className={styles.description}>
      {'The Patina Network volunteer program is open to anyone who wants to get involved in helping us' +
        ' accomplish the same '}
      <Text
        component={'a'}
        className={styles.colored}
        href={'/mission'}
        inherit
      >
        {'mission'}
      </Text>
      {'. There are many ways to join us by sharing your talents!'}
    </Text>
  )
  return (
    <ContentPage>
      <Hero
        title="Apply to be a Volunteer"
        details={message}
        img={imageUrls.volunteerHeroPatinaGreen.src}
        alt={imageUrls.volunteerHeroPatinaGreen.alt}
        buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSeToUXtesptLJSurn4Zt0WEL2giQrrXPPYaTsh71c_Cf9WSZg/viewform"
        buttonText="Apply to be a volunteer"
        buttonColor={'var(--mantine-color-patina-green-light)'}
      />
      <section className={styles.grid}>
        <VolunteerCard
          title="Social Media"
          description="We are seeking a motivated and creative Social Media Intern to join our team. As an intern, you will play a crucial role in enhancing our online presence, engaging with our audience, and promoting our initiatives."
          type="Remote/In-person"
          modalContent={modalContent1}
        />
        <VolunteerCard
          title="Graphic Design"
          description="We are seeking a creative and motivated Graphic Design Intern to join our team. As an intern, you will play a vital role in visually communicating our mission through compelling design."
          type="Remote/In-person"
          modalContent={modalContent2}
        />
        <VolunteerCard
          title="Legal Specialist"
          description="We are seeking a motivated Legal Specialist who will provide essential legal support to the organization, ensuring compliance with all applicable laws and regulations. This role will involve a wide range of legal tasks, from contract review to litigation support."
          type="Remote/In-person"
          modalContent={modalContent3}
        />
        <VolunteerCard
          title="Events Planner"
          description="The Event Planner is responsible for planning, organizing, and executing a variety of events to support the organization’s mission and goals. This role requires strong project management, communication, and interpersonal skills to ensure successful event delivery."
          type="Remote/In-person"
          modalContent={modalContent4}
        />
      </section>
      <section className={styles.emailSection}>
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
      <Forms />
    </ContentPage>
  )
}

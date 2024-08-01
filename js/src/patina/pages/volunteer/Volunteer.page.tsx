import { Title, Text, Image, Button, Group, SimpleGrid } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { imageUrls } from '@/patina/assets/images.ts'
import { VolunteerCard } from './VolunteerCard'
import { Forms } from '@/patina/components/Forms.tsx'
import styles from './Volunteer.module.css'
import { ContentPage } from '@/patina/components/ContentPage.tsx'

// Todo: Add padding between sections
export function VolunteerPage() {
  const largeScreen = useMediaQuery('(min-width: 60em)')
  return (
    <ContentPage>
      <SimpleGrid
        className={styles.heroContainer}
        cols={largeScreen ? 2 : 1}
        spacing="xl"
        mb={'7rem'}
        mt={'4rem'}
      >
        <div>
          <Title className={styles.title} ta={'left'}>
            {'Apply to be a Volunteer'}
          </Title>
          <Text className={styles.description}>
            {
              'The Patina Network volunteer program is open to anyone who wants to get involved in helping us accomplish the'
            }{' '}
            <span className={styles.colored}>{'same mission'}</span>
            {'. There are many ways to join us by sharing your talents!'}
          </Text>
          <Group justify={'left'} pt={'md'}></Group>
        </div>
        <Group justify={'center'} pt={'lg'}>
          <Image
            className={styles.volunteerHero}
            src={imageUrls.volunteerHero.src}
            alt="Scholarship Image"
          />
        </Group>
      </SimpleGrid>
      <section className={styles.grid}>
        <VolunteerCard
          title="Social Media"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          type="Remote/In-person"
        />
        <VolunteerCard
          title="Graphic Design"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          type="Remote/In-person"
        />
        <VolunteerCard
          title="Legal Specialist"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          type="Remote/In-person"
        />
        <VolunteerCard
          title="Events Planner"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          type="Remote/In-person"
        />
      </section>
      <section className={styles.emailSection}>
        {/*<div className={styles.backgroundBlur}> </div>*/}
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

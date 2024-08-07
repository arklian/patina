import { Text, Button } from '@mantine/core'
import { imageUrls } from '@/patina/assets/images.ts'
import { Hero } from '@/patina/components/Hero'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { VolunteerCard } from './VolunteerCard'
import { Forms } from '@/patina/components/Forms.tsx'
import styles from './Volunteer.module.css'

const modalContent1 = `
About Us:
Patina Network Corporation is a nonprofit dedicated to advancing the interests of Asian American, Native Hawaiian, and Pacific Islander (AANHPI) communities through cultural awareness, social justice, and empowerment.

Position Overview:
Seeking a motivated Social Media Intern to enhance our online presence and promote our initiatives.

Responsibilities:
- Develop and curate content
- Create graphics, videos, and captions
- Monitor channels and engage with followers
- Assist with campaigns and track performance
- Stay updated on social media trends

Qualifications:
- College student in communications, marketing, or related field
- Passionate about AANHPI issues
- Familiar with social media platforms and tools
- Basic graphic design skills
- Excellent communication skills

Details:
- Part-time, unpaid (2 hrs/week)
- Start ASAP, end negotiable
- Professional development and networking opportunities

Join us in making a positive impact! 🌟`

const modalContent2 = `
About Us:
Patina Network Corporation is a nonprofit dedicated to advancing the interests of Asian American, Native Hawaiian, and Pacific Islander (AANHPI) communities through cultural awareness, social justice, and empowerment.

Position Overview:
Seeking a creative Graphic Design Intern to visually communicate our mission.

Responsibilities:
- Develop visual content
- Create graphics, logos, and layouts
- Collaborate with the team
- Assist with design projects
- Stay updated on design trends

Qualifications:
- College student in graphic design or related field
- Passionate about AANHPI issues
- Proficient in design software
- Strong portfolio
- Excellent communication skills

Details:
- Part-time, unpaid (2 hrs/week)
- Start ASAP, end negotiable
- Professional development and networking opportunities

Join us in making a positive impact! 🌟`

const modalContent3 = `
About Us:
Patina Network Corporation is a nonprofit dedicated to advancing the interests of Asian American, Native Hawaiian, and Pacific Islander (AANHPI) communities through cultural awareness, social justice, and empowerment.

Position Overview:
Seeking a Legal Specialist Intern to support our legal needs.

Responsibilities:
- Conduct legal research
- Draft and review documents
- Assist with compliance
- Provide general legal support
- Stay updated on legal trends

Qualifications:
- College student in law or related field
- Passionate about AANHPI issues
- Strong research skills
- Excellent written and verbal communication

Details:
- Part-time, unpaid (2 hrs/week)
- Start ASAP, end negotiable
- Professional development and networking opportunities

Join us in making a positive impact! 🌟`

const modalContent4 = `
About Us:
Patina Network Corporation is a nonprofit dedicated to advancing the interests of Asian American, Native Hawaiian, and Pacific Islander (AANHPI) communities through cultural awareness, social justice, and empowerment.

Position Overview:
Seeking an Events Planner Intern to organize and execute events.

Responsibilities:
- Plan and coordinate events
- Manage event logistics
- Collaborate with the team
- Promote events
- Stay updated on event planning trends

Qualifications:
- College student in event planning or related field
- Passionate about AANHPI issues
- Strong organizational skills
- Excellent communication skills

Details:
- Part-time, unpaid (2 hrs/week)
- Start ASAP, end negotiable
- Professional development and networking opportunities

Join us in making a positive impact! 🌟`

export function VolunteerPage() {
  const message = (
    <Text className={styles.description}>
      {
        'The Patina Network volunteer program is open to anyone who wants to get involved in helping us accomplish the '
      }
      <span className={styles.colored}>{'same mission'}</span>
      {'. There are many ways to join us by sharing your talents!'}
    </Text>
  )
  return (
    <ContentPage>
      <Hero
        title="Apply to be a Volunteer"
        details={message}
        img={imageUrls.volunteerHero.src}
        alt={imageUrls.volunteerHero.alt}
        buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSeToUXtesptLJSurn4Zt0WEL2giQrrXPPYaTsh71c_Cf9WSZg/viewform"
        buttonText="Apply Here"
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

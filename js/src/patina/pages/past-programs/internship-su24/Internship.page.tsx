import { Button, Group, Image, List, Space, Stack, Text } from '@mantine/core'
import { FaGithub } from 'react-icons/fa'
import { imageUrls } from '@/patina/assets/images.ts'
import { Hero } from '@/patina/components/Hero'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { InternCard } from './InternCard.tsx'
import { MentorCard } from './MentorCard.tsx'
import {
  internData,
  mentorData,
} from '@/patina/pages/past-programs/internship-su24/internshipData.ts'
import styles from './Internship.module.css'
import { FractalBadge } from '@/patina/pages/past-programs/internship-su24/FractalBadge.tsx'
import gerritIcon from '@/patina/assets/gerrit-favicon.ico'

export function InternshipPage() {
  const message = (
    <Text className={styles.details}>
      {
        'This summer, we saw the opportunity to help students build up their portfolios in the midst of the ever-growing competitiveness of the college industry scene. Our tech-focused, bootcamp-style internship offered them portfolio-worthy work, interview practice, and diversity & inclusion workshops. '
      }
    </Text>
  )
  return (
    <ContentPage>
      <Hero
        title="Internship Summer 2024"
        details={message}
        img={imageUrls.mentorshipHome.src}
        alt={imageUrls.mentorshipHome.alt}
      />
      <section className={styles.internshipDetails}>
        <Text className={styles.internshipText}>
          {
            'We wanted to guide students through creating projects from scratch. We worked in a hybrid model, half virtual and half in person between June and August.  '
          }
        </Text>
        <Space h={48} />

        <Text fz={24}>
          {'Some of the features of the codebase implemented by the interns:'}
        </Text>
        <List size={'lg'} withPadding>
          <Space h={8} />
          <List.Item>{'This website!'}</List.Item>
          <List.Item>
            {'CI/CD Pipeline running tests to validate pull requests'}
          </List.Item>
          <List.Item>{'Hosting on the Cloud through DigitalOcean'}</List.Item>
          <List.Item>
            {'Local, Dev, and Prod Environments with Docker containers'}
          </List.Item>
          <List.Item>{'Spring backend with Protobuf data models'}</List.Item>
          <List.Item>
            {'Database Schema Migration management through Sqitch'}
          </List.Item>
          <List.Item>{'Content Generation through ChatGPT'}</List.Item>
          <List.Item>{'Elasticsearch integration for text search'}</List.Item>
          <List.Item>
            {'Secret handling through environment variables'}
          </List.Item>
          <List.Item>
            {'OAuth2 authentication gating Admin pages and endpoints'}
          </List.Item>
        </List>
        <Space h={48} />

        <Stack align={'center'}>
          <Text className={styles.internshipText}>
            {'All of the work is open source and public:'}
          </Text>
          <Group>
            <Button
              component={'a'}
              href={'https://www.github.com/arklian/patina'}
              target="_blank"
              leftSection={<FaGithub size={24} />}
              c={'white'}
              size={'lg'}
            >
              {'Github Repo'}
            </Button>
            <Button
              component={'a'}
              href={
                'https://gerrithub.io/q/project:arklian/patina+-status:abandoned'
              }
              target="_blank"
              leftSection={<Image h={24} w={24} src={gerritIcon} />}
              c={'white'}
              size={'lg'}
            >
              {'Gerrit Code Review'}
            </Button>
          </Group>
        </Stack>
        <Space h={48} />

        <Text fz={24}>
          {
            'In addition to practical experience with software engineering projects, we also ran extensive programming:'
          }
        </Text>
        <List size={'lg'} withPadding>
          <Space h={8} />
          <List.Item>{'Tech industry office visit'}</List.Item>
          <List.Item>{'Interview prep workshops'}</List.Item>
          <List.Item>{'Networking workshops'}</List.Item>
          <List.Item>{'Tech industry career panel'}</List.Item>
          <List.Item>{'Public speaking opportunities'}</List.Item>
          <List.Item>{'Diversity and inclusion panel'}</List.Item>
          <List.Item>{'Allyship workshops'}</List.Item>
        </List>
        <Space h={48} />

        <FractalBadge />
        <Space h={48} />

        <Text className={styles.internshipText}>
          {
            'Join our mailing list to get notified about future opportunities like this!'
          }
        </Text>
        <Space h={48} />
      </section>

      <Text className={styles.internshipTextHeader}>{'The mentors:'}</Text>
      <Group component={'ul'} p={0} w={'100%'} justify={'center'}>
        {mentorData.map((mentor) => (
          <MentorCard key={mentor.name} {...mentor} />
        ))}
      </Group>
      <Space h={48} />

      <Text className={styles.internshipTextHeader}>
        {'Check out our interns!'}
      </Text>

      <div className={styles.internshipCards}>
        <ul className={styles.grid}>
          {internData.map((intern) => (
            <li className={styles.listItem} key={intern.name}>
              <InternCard
                name={intern.name}
                role={intern.role}
                school={intern.school}
                graduation={intern.graduation}
                linkedInURL={intern.linkedInURL}
                githubURL={intern.githubUrl}
                imageSRC={intern.imageSrc}
              />
            </li>
          ))}
        </ul>
      </div>
      <Space h={128} />
    </ContentPage>
  )
}

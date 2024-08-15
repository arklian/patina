import { Button, Group, List, Space, Stack, Text, Image } from '@mantine/core'
import { FaGithub } from 'react-icons/fa'
import { imageUrls } from '@/patina/assets/images.ts'
import { Hero } from '@/patina/components/Hero'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { InternCard } from './InternCard.tsx'
import { internData } from '@/patina/pages/internship/internData.ts'
import styles from './Internship.module.css'
import { FractalBadge } from '@/patina/pages/internship/FractalBadge.tsx'
import gerritIcon from '@/patina/assets/gerrit-favicon.ico'

export function InternshipPage() {
  const message = (
    <Text className={styles.details}>
      {
        'With the downturn in the tech industry this year, college internships were harder to come by. This summer, we saw the opportunity to help fill some of the gaps by offering a tech-focused bootcamp-style internship. '
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
            'Patina Network was looking to create a website, and instead of just making it in Squarespace, we saw an opportunity to give college students hands-on practical experience by creating it from scratch. Guidance and program structure were provided by Henry, an experienced software developer, with six years of industry experience at Microsoft and Yext. The priority of the internship was to teach modern development practices in an Agile environment that mirrors industry, with task tracking, code reviews, stand-ups, retros, and 1:1s. '
          }
        </Text>
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

        <Text className={styles.internshipText}>
          {
            'In addition to the 10 SWE interns taken on, we also took on a UI/UX Design Intern lead by Celina, and a Data Analyst Intern lead by Cinthia. This gave everyone a chance to work cross-functionally in a collaborative environment with people with different skills, with an iterative feedback loop with the designers and stakeholders and multiple iteration of Figma mocks.'
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

        <Text className={styles.internshipText}>
          {
            'The program ran for nine weeks, starting on June 17th and ending on August 16th. It ran four days a week on Monday, Tuesday, Thursday, and Friday for 6 hours a day. Mondays and Thursdays were held in person at Fractal Tech. '
          }
        </Text>
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
      <Text className={styles.internshipTextHeader}>
        {'Check out our interns and their sites:'}
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
                webURL={intern.websiteUrl}
                githubURL={intern.githubUrl}
                imageSRC={intern.imageSrc}
              />
            </li>
          ))}
        </ul>
      </div>
    </ContentPage>
  )
}

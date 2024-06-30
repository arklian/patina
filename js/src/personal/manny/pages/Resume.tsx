import {
  Anchor,
  Button,
  Card,
  Container,
  Divider,
  MantineProvider,
  Text,
  Title,
} from '@mantine/core'
import {
  IconDownload,
  IconMailFilled,
  IconBrandLinkedin,
  IconWorld,
  IconBrandGithub,
} from '@tabler/icons-react'
import styles from './Resume.module.css'

export function ResumePage() {
  return (
    <MantineProvider>
      <div className={styles.downloadButtonContainer}>
        <Button
          component="a"
          href={
            'https://cuny620-my.sharepoint.com/:b:/g/personal/manuel_reyesjr59_' +
            'myhunter_cuny_edu/Ecr-rxWeq_FHgRjzb0YgjVcBgtuCm9_fRhL0Ac1D_3IbBA?e=18CJ59'
          }
          rightSection={<IconDownload size="14" />}
        >
          {'Download PDF'}
        </Button>
      </div>
      <Container size="md">
        <Card
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
        >
          <div className={styles.headerRow}>
            <Title
              order={1}
              className={styles.title}
            >
              {'Manuel Reyes Jr.'}
            </Title>
          </div>

          <div className={styles.contactRow}>
            <Text className={styles.contactInfo}>
              {'Bronx, New York | (347) 317-3990 '}
            </Text>
            {' | '}
            <Anchor
              href="mailto:mauelreyes1241@outlook.com"
              className={styles.link}
            >
              <IconMailFilled
                size="16"
                className={styles.icon}
              />
              {'manuelreyes1241@outlook.com'}
            </Anchor>
            {' | '}
            <Anchor
              href="https://www.linkedin.com/in/manuel-reyes-jr-12410803031241-me"
              className={styles.link}
            >
              <IconBrandLinkedin
                size="16"
                className={styles.icon}
              />
              {'manuel-reyes-jr-swe'}
            </Anchor>
            {' | '}
            <Anchor
              href="https://www.reyesjr.com"
              className={styles.link}
            >
              <IconWorld
                size="16"
                className={styles.icon}
              />
              {'Personal website'}
            </Anchor>
            {' | '}
            <Anchor
              href="https://github.com/MReyes1241"
              className={styles.link}
            >
              <IconBrandGithub
                size="16"
                className={styles.icon}
              />
              {'MReyes1241'}
            </Anchor>
          </div>
          <Divider size={'lg'} />
          <Title
            order={2}
            className={styles.sectionTitle}
          >
            {'Professional Summary'}
          </Title>
          <Text className={styles.sectionText}>
            {'As an engaged Computer Science student at Hunter College, I actively pursue ' +
              'mastery in programming languages, including Python, C++, HTML, CSS, JavaScript' +
              ', and Swift. My academic endeavors underscore a deep-seated commitment to mastering ' +
              'the dynamic nuances of computer science. Serving as a Teaching Assistant, I ' +
              'have sharpened my technical skills and honed my ability to communicate complex ' +
              'concepts, effectively tutoring peers and resolving hardware complications. ' +
              'Demonstrating a profound interest in software development, I have completed a ' +
              'Web Development Course and engaged in numerous projects, showcasing my dedication ' +
              'to continuously expanding my skill set and knowledge. My involvement in these ' +
              'projects, along with my unwavering commitment to both theoretical understanding and' +
              ' practical application in coding, solidify my foundation in the field.\n'}
          </Text>
          <Divider size={'lg'} />
          <Title
            order={2}
            className={styles.sectionTitle}
          >
            {'Experience'}
          </Title>
          <Text className={styles.jobTitle}>
            {'Teaching Assistant | CUNY-Hunter College'}
          </Text>
          <Text className={styles.jobDate}>{'February 2023 – Present'}</Text>
          <Text className={styles.jobDescription}>
            <ul>
              <li>
                {'Facilitated the learning journey of students in introductory'}
                {'computer science courses, focusing on Python and C++, by'}
                {
                  'simplifying complex programming principles for diverse learning'
                }
                {'styles.'}
              </li>
              <li>
                {"Diagnosed and resolved hardware issues, enhancing students'"}
                {'coding experiences and mirroring the troubleshooting and'}
                {'debugging tasks in software engineering.'}
              </li>
              <li>
                {'Developed and implemented personalized tutoring strategies,'}
                {
                  'improving student comprehension and performance in programming'
                }
                {'concepts.'}
              </li>
              <li>
                {'Communicated technical concepts effectively to non-technical'}
                {'audiences, fostering a supportive and inclusive learning'}
                {'environment.'}
              </li>
              <li>
                {
                  'Demonstrated adaptability and patience in mentoring, paralleling'
                }
                {
                  'the iterative development process and problem-solving approach'
                }
                {'in software engineering.'}
              </li>
              <li>
                {
                  'Contributed to a collaborative educational setting, preparing'
                }
                {
                  'for cross-functional teamwork and leadership roles in the tech'
                }
                {'industry.'}
              </li>
            </ul>
          </Text>
          <Divider my="lg" />
          <Title
            order={2}
            className={styles.sectionTitle}
          >
            {'Education'}
          </Title>
          <div className={styles.educationSection}>
            <div className={styles.educationDetails}>
              <Text className={styles.educationTitle}>
                {'Bachelor of Arts'}
              </Text>
              <Text className={styles.educationInstitution}>
                {'CUNY - Hunter College'}
              </Text>
              <Text className={styles.educationDegree}>
                {'New York, New York'}
              </Text>
            </div>
            <div className={styles.educationDates}>
              <Text className={styles.educationDate}>
                {'August 2021 - Present'}
              </Text>
              <Text className={styles.educationGPA}>{'GPA: 3.3/4.0'}</Text>
            </div>
          </div>
          <div className={styles.educationSection}>
            <div className={styles.educationDetails}>
              <Text className={styles.educationTitle}>
                {'High School Diploma'}
              </Text>
              <Text className={styles.educationInstitution}>
                {'Westchester Square Academy'}
              </Text>
              <Text className={styles.educationDegree}>
                {'Bronx, New York'}
              </Text>
            </div>
            <div className={styles.educationDates}>
              <Text className={styles.educationDate}>
                {'September 2017 - June 2021'}
              </Text>
              <Text className={styles.educationGPA}>{'GPA: 4.0/4.0'}</Text>
            </div>
          </div>
          <Divider my="lg" />
          <Title
            order={2}
            className={styles.sectionTitle}
          >
            {'Skills & Abilities'}
          </Title>
          <Text className={styles.skills}>
            <ul>
              <li>
                <strong>{'Programming Languages:'}</strong>{' '}
                {'JavaScript, Python, C++,'}
                {'HTML, CSS'}
              </li>
              <li>
                <strong>{'Tools and Technologies:'}</strong>{' '}
                {'Unix, Machine Language,'}
                {'Swift'}
              </li>
              <li>
                <strong>{'Web Development:'}</strong>{' '}
                {'HTML, CSS, JavaScript, React, Typescript'}
              </li>
              <li>
                {
                  'Problem Solving, Quick Learner, Computer Literacy, Time Management'
                }
              </li>
            </ul>
          </Text>
          <Divider my="lg" />
          <Title
            order={2}
            className={styles.sectionTitle}
          >
            {'Languages'}
          </Title>
          <Text className={styles.languages}>
            <ul>
              <li>{'Spanish - Fluent'}</li>
            </ul>
          </Text>
        </Card>
      </Container>
      <div className={styles.downloadButtonContainer}>
        <Button
          component="a"
          href={
            'https://cuny620-my.sharepoint.com/:b:/g/personal/manuel_reyesjr59_' +
            'myhunter_cuny_edu/Ecr-rxWeq_FHgRjzb0YgjVcBgtuCm9_fRhL0Ac1D_3IbBA?e=18CJ59'
          }
          rightSection={<IconDownload size="14" />}
        >
          {'Download PDF'}
        </Button>
      </div>
    </MantineProvider>
  )
}

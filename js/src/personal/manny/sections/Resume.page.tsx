import {
  Anchor,
  Button,
  Card,
  Container,
  Divider,
  Space,
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
import { HeaderSimple } from '@/personal/manny/components/HeaderSimple.tsx'

export function ResumePage() {
  return (
    <div>
      <HeaderSimple />
      <Space h="md" />
      <Container size="md">
        <div className={styles.downloadButtonContainer}>
          <Button
            component="a"
            href={
              'https://cuny620-my.sharepoint.com/personal/manuel_reyesjr59_myhunter_cuny_edu/Documents/Manuel_Reyes_jr.pdf'
            } // update with the correct path
            rightSection={<IconDownload size="14" />}
          >
            {'Download PDF'}
          </Button>
        </div>
        <Card shadow="sm" p="lg" radius="md" withBorder>
          {/* Header Section */}
          <div className={styles.headerRow}>
            <Title order={1} className={styles.title}>
              {'Manuel Reyes Jr.'}
            </Title>
          </div>

          {/* Contact Information */}
          <div className={styles.contactRow}>
            <Anchor
              href="mailto:manuelreyes1241@outlook.com"
              className={styles.link}
            >
              <IconMailFilled size="16" className={styles.icon} />
              {'manuelreyes1241@outlook.com'}
            </Anchor>
            {' | '}
            <Anchor
              href="https://www.linkedin.com/in/manuel-reyes-jr-swe"
              className={styles.link}
            >
              <IconBrandLinkedin size="16" className={styles.icon} />
              {'linkedin.com/in/manuel-reyes-jr-swe'}
            </Anchor>
            {' | '}
            <Anchor
              href="https://github.com/MReyes1241"
              className={styles.link}
            >
              <IconBrandGithub size="16" className={styles.icon} />
              {'github.com/MReyes1241'}
            </Anchor>
            {' | '}
            <Anchor
              href="https://patinanetwork.org/personal/manny"
              className={styles.link}
            >
              <IconWorld size="16" className={styles.icon} />
              {'patinanetwork.org/personal/manny'}
            </Anchor>
          </div>
          <Divider size="lg" />

          {/* Education Section */}
          <Title order={2} className={styles.sectionTitle}>
            {'Education'}
          </Title>
          <div className={styles.educationSection}>
            <div className={styles.educationDetails}>
              <Text className={styles.educationTitle}>
                {'Bachelor of Arts in Computer Science, Minor in Mathematics'}
              </Text>
              <Text className={styles.educationInstitution}>
                {'Hunter College - City University of New York, New York, NY'}
              </Text>
              <Text className={styles.educationDate}>
                {'August 2021 – May 2025'}
              </Text>
              <Text className={styles.educationGPA}>{'GPA: 3.4/4.0'}</Text>
              <Text className={styles.relevantCoursework}>
                {
                  'Relevant Coursework: Operating Systems, Data Structures, Algorithms, Computer Architecture, Software Engineering, Artificial Intelligence'
                }
              </Text>
            </div>
          </div>
          <Divider size="lg" />

          {/* Experience Section */}
          <Title order={2} className={styles.sectionTitle}>
            {'Experience'}
          </Title>
          <div className={styles.job}>
            <Text className={styles.jobTitle}>
              {'Software Engineering Intern | Patina Network'}
            </Text>
            <Text className={styles.jobDate}>{'June 2024 – August 2024'}</Text>
            <Text className={styles.jobDescription}>
              {'Responsibilities included:'}
            </Text>
            <ul className={styles.jobDescription}>
              <li>
                {
                  'Created a streamlined workflow for handling images used across the website by writing a shell script to upload images stored in a source-of-truth Google Drive folder to Digital Ocean Spaces S3 buckets through their REST APIs and auto-generating a mapping of images to their URLs that are used in the TypeScript.'
                }
              </li>
              <li>
                {
                  'Added version control and multiple environment support to the image handling workflow, letting developers change images in development without affecting the live website and allowing production rollbacks.'
                }
              </li>
              <li>
                {
                  'Built OCI Docker images of our Spring Boot backend and deployed them to virtual machines in DigitalOcean.'
                }
              </li>
              <li>
                {
                  'Collaborated cross-functionally with UI/UX designers to bring their Figma mocks to life using React, TypeScript, and Mantine UI over several iterations while ensuring a mobile-friendly responsive user interface.'
                }
              </li>
              <li>
                {
                  'Managed tasks and projects in Linear, a Jira-like work tracking tool, to coordinate work across the team.'
                }
              </li>
              <li>
                {
                  'Engaged in code reviews on Gerrit, with merges blocked by approvals from other engineers and CI tests.'
                }
              </li>
            </ul>
          </div>

          <div className={styles.job}>
            <Text className={styles.jobTitle}>
              {'Undergraduate Teaching Assistant | CUNY-Hunter College'}
            </Text>
            <Text className={styles.jobDate}>{'February 2023 – Present'}</Text>
            <Text className={styles.jobDescription}>
              {'Responsibilities included:'}
            </Text>
            <ul className={styles.jobDescription}>
              <li>
                {
                  'Supported students in Python, MIPS, and C++ courses by guiding them through assignments, debugging code, and preparing for exams.'
                }
              </li>
              <li>
                {
                  'Assisted the professor with grading, provided detailed feedback, conducted tutoring sessions and code reviews, and offered advice to help students navigate course material and improve their understanding.'
                }
              </li>
            </ul>
          </div>
          <Divider size="lg" />

          {/* Projects Section */}
          <Title order={2} className={styles.sectionTitle}>
            {'Projects'}
          </Title>
          <div className={styles.project}>
            <Text className={styles.projectTitle}>
              {'Splitsy App | github.com/Riyuanliu/Splitsy'}
            </Text>
            <Text className={styles.projectDate}>{'February 2024'}</Text>
            <Text className={styles.projectDescription}>
              {'Project highlights included:'}
            </Text>
            <ul className={styles.projectDescription}>
              <li>
                {
                  'Collaborated in a team of three to build “Splitsy,” an iOS app that simplifies bill splitting.'
                }
              </li>
              <li>
                {
                  'Built the app’s user interface using Swift and SwiftUI, ensuring a seamless user experience.'
                }
              </li>
              <li>
                {
                  'Used OCR to scan receipts to automate the calculation of individual payment shares.'
                }
              </li>
            </ul>
          </div>
          <Divider size="lg" />

          {/* Technical Skills Section */}
          <Title order={2} className={styles.sectionTitle}>
            {'Technical Skills'}
          </Title>
          <ul className={styles.skills}>
            <li>
              <strong>{'Languages:'}</strong>
              {
                ' Python, Java, C/C++, SQL, JavaScript, TypeScript, Swift, MIPS, Bash/Zsh/Shell'
              }
            </li>
            <li>
              <strong>{'Frontend:'}</strong>
              {
                ' HTML/CSS, React, Vue, Mantine UI, JSON, Node.js, npm/pnpm, Vite, ESLint, Prettier'
              }
            </li>
            <li>
              <strong>{'Backend/Cloud:'}</strong>
              {' Spring, PHP, Flask, Kotlin, Gradle, Docker, DigitalOcean, AWS'}
            </li>
            <li>
              <strong>{'Tools:'}</strong>
              {
                ' Figma, VS Code, PyCharm, IntelliJ, Sublime Merge, pgAdmin, Postman, Linear, Notion'
              }
            </li>
            <li>
              <strong>{'Other:'}</strong>
              {
                ' Git/Github, MacOS, Linux, Windows Terminal, REST API, CLI, CI/CD, GitHub Actions'
              }
            </li>
          </ul>
        </Card>
        <div className={styles.downloadButtonContainer}>
          <Button
            component="a"
            href={
              'https://cuny620-my.sharepoint.com/personal/manuel_reyesjr59_myhunter_cuny_edu/Documents/Manuel_Reyes_jr.pdf'
            } // update with the correct path
            rightSection={<IconDownload size="14" />}
          >
            {'Download PDF'}
          </Button>
        </div>
      </Container>
    </div>
  )
}

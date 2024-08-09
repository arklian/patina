import {
  ActionIcon,
  Image,
  Paper,
  Text,
  Title,
  UnstyledButton,
} from '@mantine/core'
import { FaLinkedinIn, FaGlobe, FaGithub } from 'react-icons/fa'
import { ReactNode } from 'react'
import construction from '@/patina/assets/construction.png'

import styles from './InternCard.module.css'

interface InternCardProps {
  name: string
  role: string
  school: string
  graduation: string
  linkedInURL: string
  webURL: string
  githubURL: string
  imageSRC: string
}

export function InternCard({
  name,
  role,
  school,
  graduation,
  linkedInURL,
  webURL,
  githubURL,
  imageSRC,
}: InternCardProps) {
  return (
    <Paper className={styles.card} shadow="sm" withBorder>
      <div className={styles.cardDetails}>
        <div className={styles.cardText}>
          <Title order={3} className={styles.cardName}>
            {name}
          </Title>
          <Text size={'lg'}>{role}</Text>
          <Text size={'md'}>{school}</Text>
          <Text size={'md'}>{graduation}</Text>
        </div>
        <div className={styles.cardLinks}>
          {githubURL && (
            <InternIconLink href={linkedInURL}>
              <FaLinkedinIn size={24} aria-label={`LinkedIn for ${name}`} />
            </InternIconLink>
          )}
          {githubURL && (
            <InternIconLink href={githubURL}>
              <FaGithub size={24} aria-label={`GitHub for ${name}`} />
            </InternIconLink>
          )}
          {webURL && (
            <InternIconLink href={webURL}>
              <FaGlobe size={24} aria-label={`Website for ${name}`} />
            </InternIconLink>
          )}
        </div>
      </div>
      {webURL ?
        <UnstyledButton component={'a'} href={webURL}>
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={imageSRC}
              alt={`Website for ${name}`}
            />
            <div className={styles.imageHover}>
              <Text className={styles.hoverText}>
                <Image src={construction} w={25} h={25} />
                {'Under Construction'}
                <Image src={construction} w={25} h={25} />
              </Text>
            </div>
          </div>
        </UnstyledButton>
      : <Image className={styles.image} src={imageSRC} alt={''} />}
    </Paper>
  )
}

function InternIconLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <ActionIcon
      component="a"
      href={href}
      target="_blank"
      color={'dark.0'}
      variant="transparent"
      size="lg"
      rel="noopener noreferrer"
    >
      {children}
    </ActionIcon>
  )
}

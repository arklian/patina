import { Card, Image, Text } from '@mantine/core'
import { FaLinkedinIn, FaGlobe, FaGithub } from 'react-icons/fa'
import styles from './InternCard.module.css'

interface InternCardProps {
  name: string
  school: string
  linkedInURL: string
  webURL: string
  githubURL: string
  imageSRC: string
}

export function InternCard({
  name,
  school,
  linkedInURL,
  webURL,
  githubURL,
  imageSRC,
}: InternCardProps) {
  return (
    <Card className={styles.card} shadow="sm" p="lg">
      <div className={styles.cardDetails}>
        <div className={styles.cardText}>
          <Text className={styles.cardName}>{name}</Text>
          <Text className={styles.cardSchool}>{school}</Text>
        </div>
        <div className={styles.cardLinks}>
          <a
            href={linkedInURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href={webURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
          >
            <FaGlobe size={18} />
          </a>
          <a
            href={githubURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
        </div>
      </div>
      <Image
        className={styles.cardImage}
        src={imageSRC}
        alt="website screenshot"
        fit="cover"
      />
    </Card>
  )
}

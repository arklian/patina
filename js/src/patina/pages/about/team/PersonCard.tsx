import {
  ActionIcon,
  Card,
  Group,
  Image,
  Text,
  Stack,
  Space,
} from '@mantine/core'
import { FaLinkedinIn, FaGlobe, FaGithub } from 'react-icons/fa'
import { ReactNode, useState } from 'react'
import styles from './PersonCard.module.css'

interface PersonCardProps {
  name: string
  role: string
  email: string
  linkedInUrl: string
  webUrl: string
  githubUrl: string
  imageSrc: string
}

export function PersonCard({
  name,
  role,
  email,
  linkedInUrl,
  webUrl,
  githubUrl,
  imageSrc,
}: PersonCardProps) {
  const [truncate, setTruncate] = useState(true)
  return (
    <Card component={'li'} key={name} ta="center" className={styles.card}>
      <Card.Section mb={5}>
        <Group justify={'center'}>
          <Image src={imageSrc} radius={'50%'} className={styles.image} />
        </Group>
      </Card.Section>
      <Card.Section>
        <Stack align={'center'} justify={'flex-end'} gap={0}>
          <Text size={'sm'} fw={700}>
            {name}
          </Text>
          <Text size={'md'}>{role}</Text>
          <Space h={'sm'} />
          <Text
            size={'sm'}
            w={'100%'}
            h={'32px'}
            data-status={truncate}
            className={styles.email}
            onClick={() => (truncate ? setTruncate(false) : setTruncate(true))}
          >
            {email}
          </Text>
          <Space h={'md'} />
          <Group gap={0}>
            {linkedInUrl && (
              <TeamIconLink href={linkedInUrl}>
                <FaLinkedinIn size={24} aria-label={`LinkedIn for ${name}`} />
              </TeamIconLink>
            )}
            {githubUrl && (
              <TeamIconLink href={githubUrl}>
                <FaGithub size={24} aria-label={`GitHub for ${name}`} />
              </TeamIconLink>
            )}
            {webUrl && (
              <TeamIconLink href={webUrl}>
                <FaGlobe size={24} aria-label={`Website for ${name}`} />
              </TeamIconLink>
            )}
          </Group>
        </Stack>
      </Card.Section>
    </Card>
  )
}

function TeamIconLink({
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

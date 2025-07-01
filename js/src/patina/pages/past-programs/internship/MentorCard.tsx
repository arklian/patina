import { Card, Group, Image, Stack, Text } from '@mantine/core'
import styles from './MentorCard.module.css'

interface MentorCardProps {
  name: string
  role: string
  imageSrc: string
}

export function MentorCard({ name, role, imageSrc }: MentorCardProps) {
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
        </Stack>
      </Card.Section>
    </Card>
  )
}

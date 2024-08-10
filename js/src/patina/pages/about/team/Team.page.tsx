import { Title, Space, Group, Stack } from '@mantine/core'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import {
  boardMembers,
  advisors,
  interns,
} from '@/patina/pages/about/team/teamData.ts'
import { PersonCard } from '@/patina/pages/about/team/PersonCard.tsx'
import styles from './Team.module.css'

export function TeamPage() {
  return (
    <ContentPage>
      <Stack w={'100%'} align={'flex-start'}>
        <Title order={1}>{'Our Team'}</Title>
        <Space h="md" />
        <Title order={2}>{'Board of Directors'}</Title>
        <Group component={'ul'} p={0} className={styles.cardGroup}>
          {boardMembers.map((boardMember) => (
            <PersonCard {...boardMember} />
          ))}
        </Group>
        <Space h="md" />

        <Title order={2}>{'Advisors'}</Title>
        <Group component={'ul'} p={0} className={styles.cardGroup}>
          {advisors.map((boardMember) => (
            <PersonCard {...boardMember} />
          ))}
        </Group>
        <Space h="md" />

        <Title order={2}>{'Interns'}</Title>
        <Group component={'ul'} p={0} className={styles.cardGroup}>
          {interns.map((boardMember) => (
            <PersonCard {...boardMember} />
          ))}
        </Group>
        <Space h="md" />
      </Stack>
    </ContentPage>
  )
}

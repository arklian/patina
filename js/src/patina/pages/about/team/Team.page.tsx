import { Group, Space, Stack, Title } from '@mantine/core'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import {
  advisors,
  boardMembers,
  interns,
} from '@/patina/pages/about/team/teamData.ts'
import { PersonCard } from '@/patina/pages/about/team/PersonCard.tsx'
import styles from './Team.module.css'

export function TeamPage() {
  return (
    <ContentPage>
      <Stack w={'100%'} align={'flex-start'}>
        <Title order={1} className={styles.title}>
          {'Our Team'}
        </Title>
        <Space h="md" />
        <Title order={2} className={styles.title}>
          {'Board of Directors'}
        </Title>
        <Group justify={'center'} component={'ul'} p={0} w={'100%'}>
          {boardMembers.map((boardMember) => (
            <PersonCard {...boardMember} />
          ))}
        </Group>
        <Space h="md" />

        <Title order={2} className={styles.title}>
          {'Advisors'}
        </Title>
        <Group component={'ul'} p={0} w={'100%'}>
          {advisors.map((boardMember) => (
            <PersonCard {...boardMember} />
          ))}
        </Group>
        <Space h="md" />

        <Title order={2} className={styles.title}>
          {'Interns'}
        </Title>
        <Group component={'ul'} p={0} w={'100%'}>
          {interns.map((boardMember) => (
            <PersonCard {...boardMember} />
          ))}
        </Group>
        <Space h="md" />
      </Stack>
    </ContentPage>
  )
}

import {
  Flex,
  Group,
  List,
  Space,
  Stack,
  Text,
  ThemeIcon,
  Timeline,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { FaDiscord, FaPeopleArrows, FaUsers } from 'react-icons/fa'
import styles from './ProgramDetails.module.css'

/** Displays details for the mentorship program for mentees */
export function ProgramDetails() {
  return (
    <Stack className={styles.programDetails}>
      <Flex justify={'center'}>
        <Title order={2}>{'Program Details'}</Title>
      </Flex>
      <Space h={22} />
      <Group className={styles.timelineSection}>
        <Stack align={'center'}>
          <ProgrammingSummary />
          <Space h={8} />
          <ProgramTimeline />
        </Stack>
        <ProgramText />
      </Group>
    </Stack>
  )
}

function ProgramTimeline() {
  const theme = useMantineTheme()

  return (
    <>
      <Title order={3}>{'Timeline'}</Title>
      <Timeline
        ml={8}
        mb={16}
        color={theme.other.patinaBlueLight}
        bulletSize={24}
        lineWidth={2}
      >
        <Timeline.Item
          title={
            <Text fw={700} c={theme.other.patinaBlueLight}>
              {'September 14'}
            </Text>
          }
          fw={700}
        >
          <Text mt={4}>{'Introduction to your mentor'}</Text>
        </Timeline.Item>

        <Timeline.Item
          title={
            <Text fw={700} c={theme.other.patinaBlueLight}>
              {'September 22'}
            </Text>
          }
        >
          <Text mt={4}>{'Virtual onboarding meeting'}</Text>
        </Timeline.Item>

        <Timeline.Item
          title={
            <Text fw={700} c={theme.other.patinaBlueLight}>
              {'Week of September 23'}
            </Text>
          }
          lineVariant="dashed"
        >
          <Text mt={4}>{'Beginning of the program'}</Text>
        </Timeline.Item>

        <Timeline.Item
          title={
            <Text fw={700} c={theme.other.patinaBlueLight}>
              {'Week of November 22'}
            </Text>
          }
          lineVariant="dashed"
        >
          <Text mt={4}>{'Last week of the program'}</Text>
        </Timeline.Item>
      </Timeline>
    </>
  )
}

function ProgrammingSummary() {
  const theme = useMantineTheme()

  return (
    <>
      <Title order={3}>{'Programming'}</Title>
      <List spacing="xs" size="sm" center>
        <List.Item
          icon={
            <ThemeIcon color={'dark.4'} size={28} radius="xl">
              <FaPeopleArrows size={18} />
            </ThemeIcon>
          }
        >
          <Text c={theme.other.patinaBlueLight}>
            {'Weekly: '}
            <Text span c={'dark.0'}>
              {'1:1 with Mentor'}
            </Text>
          </Text>
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon color={'dark.4'} size={28} radius="xl">
              <FaDiscord size={18} />
            </ThemeIcon>
          }
        >
          <Text c={theme.other.patinaBlueLight}>
            {'Monthly (Virtual): '}
            <Text span c={'dark.0'}>
              {'Group Mentoring'}
            </Text>
          </Text>
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon color={'dark.4'} size={28} radius="xl">
              <FaUsers size={18} />
            </ThemeIcon>
          }
        >
          <Text c={theme.other.patinaBlueLight}>
            {'Monthly (In-Person): '}
            <Text span c={'dark.0'}>
              {'Group Event'}
            </Text>
          </Text>
        </List.Item>
      </List>
    </>
  )
}

function ProgramText() {
  const theme = useMantineTheme()

  return (
    <>
      <div className={styles.programDescription}>
        <Text inherit>
          {
            'For the fall semester, we are looking to pair mentees one-on-one with a mentor, so that each mentee can have an experience tailored to their individual situation, needs and direction.'
          }
        </Text>
        <p />
        <Text inherit>
          {
            "For the duration of the program, mentor and mentee pairs should meet weekly at any time that works for you two. Come with topics and questions that you'd like to get your mentor's perspective on!"
          }
        </Text>
        <p />
        <Text inherit>
          {'In addition, we will hold two monthly events with all the mentees.'}
        </Text>
        <p />
        <Text inherit>
          {
            'The first will be virtual sessions to address common topics that would be beneficial regardless of what field or industry you join in the future, such as networking, resume writing, and championing diversity. These sessions will be led by volunteers from Patina, and not your individual mentor.'
          }
        </Text>
        <p />
        <Text inherit>
          {
            'The other will be an in-person gathering where all of the mentors and mentees can meet, to allow everyone to get to know each other and build a sense of community. We aim to have a smaller, more intimate cohort for this program, so we can plan this programming around everyone’s availability. We expect everyone to do their best to attend these sessions to get the most out of the program.'
          }
        </Text>
        <p />

        <Text inherit fw={800} c={theme.other.patinaBlueLight}>
          {
            'The overall commitment for mentees is expected to be around 6 hrs/month.'
          }
        </Text>
      </div>
    </>
  )
}

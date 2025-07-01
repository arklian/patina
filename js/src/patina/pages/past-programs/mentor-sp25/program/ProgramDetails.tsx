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
import { FaPeopleArrows, FaUsers } from 'react-icons/fa'
import styles from './ProgramDetails.module.css'

/** Displays details for the mentorship program for mentors */
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
              {'Jan 31'}
            </Text>
          }
          fw={700}
        >
          <Text mt={4}>{'Applications close'}</Text>
        </Timeline.Item>

        <Timeline.Item
          title={
            <Text fw={700} c={theme.other.patinaBlueLight}>
              {'Feb 2nd, Sun 1:00-2:00pm'}
            </Text>
          }
          lineVariant="dashed"
        >
          <Text mt={4}>{'Virtual onboarding meeting'}</Text>
          <Text mt={4}>{'Introduction to your mentee'}</Text>
        </Timeline.Item>

        <Timeline.Item
          title={
            <Text fw={700} c={theme.other.patinaBlueLight}>
              {'Week of Feb 3rd'}
            </Text>
          }
          lineVariant="dashed"
        >
          <Text mt={4}>{'First week of the program'}</Text>
        </Timeline.Item>

        <Timeline.Item
          title={
            <Text fw={700} c={theme.other.patinaBlueLight}>
              {'Feb 19th, Wed 6:30-8:00pm*'}
            </Text>
          }
          lineVariant="dashed"
        >
          <Text mt={4}>{'In Person Meetup #1'}</Text>
        </Timeline.Item>

        <Timeline.Item
          title={
            <Text fw={700} c={theme.other.patinaBlueLight}>
              {'Mar 12th, Wed 6:30-8:00pm*'}
            </Text>
          }
          lineVariant="dashed"
        >
          <Text mt={4}>{'In Person Meetup #2'}</Text>
        </Timeline.Item>

        <Timeline.Item
          title={
            <Text fw={700} c={theme.other.patinaBlueLight}>
              {'Apr 4th, Fri 5:30-7:30pm*'}
            </Text>
          }
          lineVariant="dashed"
        >
          <Text mt={4}>{'Last week of the program'}</Text>
          <Text mt={4}>{'In Person Meetup #3'}</Text>
        </Timeline.Item>
      </Timeline>
      <Text size={'xs'} mt={4} c={theme.other.patinaBlueLight}>
        {'* Dates tentative, but will be finalized by the first week.'}
      </Text>
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
              {'1:1 with Mentee'}
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
        <Text inherit fw={800} c={theme.other.patinaBlueLight}>
          {"Make a Difference: Become a Mentor for the Spring '25 Mentorship"}
        </Text>
        <p />
        <Text inherit>
          {
            'We’re looking for professionals to serve as mentors for our Spring ‘25 cohort. We strive to individually pair mentees 1:1 with mentors who share similar experiences, creating a space for connection and cultural understanding while fostering professional growth.'
          }
        </Text>
        <p />
        <Text inherit>
          {
            'As a mentor, you’ll meet weekly with your mentee at a mutually convenient time virtually or in person. Mentees will come prepared with questions and topics to discuss, but we encourage mentors to share their own perspectives on subjects like navigating career paths, building professional confidence, and managing challenges in the workplace.'
          }
        </Text>
        <p />
        <Text inherit>
          {
            'In addition to your one-on-one meetings, mentors are invited to attend '
          }
          <Text inherit span c={theme.other.patinaBlueLight}>
            {'monthly in-person'}
          </Text>
          {
            ' gatherings with all mentors and mentees. These events help build a sense of community within the program. Dinner will be catered from a local restaurant! Based on availability, we may reschedule the dates if too many conflicts exist, but dates will be finalized by first week.'
          }
        </Text>
        <p />
        <Text inherit fw={800} c={theme.other.patinaBlueLight}>
          {
            'The overall commitment for mentors is expected to be around 6 hrs/month.'
          }
        </Text>
      </div>
    </>
  )
}

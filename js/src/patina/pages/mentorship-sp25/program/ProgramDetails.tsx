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
          <ProgramTimeline />
        </Stack>
        <Stack className={styles.programSection} align={'center'}>
          <ProgrammingSummary />
          <Space h={8} />
          <ProgramText />
        </Stack>
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
              {'Jan 27'}
            </Text>
          }
          fw={700}
        >
          <Text mt={4}>{'Applications close'}</Text>
        </Timeline.Item>

        <Timeline.Item
          title={
            <Text fw={700} c={theme.other.patinaBlueLight}>
              {'Feb 2nd, Sun 5:00-7:00pm'}
            </Text>
          }
          lineVariant="dashed"
        >
          <Text mt={4}>{'Virtual onboarding meeting'}</Text>
          <Text mt={4}>{'Introduction to your mentor'}</Text>
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
              {'Feb 19th, Wed 6:30-8:30pm*'}
            </Text>
          }
          lineVariant="dashed"
        >
          <Text mt={4}>{'In Person Meetup #1'}</Text>
        </Timeline.Item>

        <Timeline.Item
          title={
            <Text fw={700} c={theme.other.patinaBlueLight}>
              {'Mar 13th, Thur 6:30-8:30pm*'}
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
            "For the Spring '25 semester, we're looking to pair mentees one-on-one with a mentor, so that each mentee can have an experience tailored to their individual situation, needs and direction."
          }
        </Text>
        <p />
        <Text inherit>
          {
            'For the duration of the program, mentor-mentee pairs should meet weekly at a time that works best for both individuals. Come prepared with topics and questions to get valuable insights from your mentor!'
          }
        </Text>
        <p />
        <Text inherit>
          {'In addition, we will hold '}
          <Text inherit span c={theme.other.patinaBlueLight}>
            {'two monthly events'}
          </Text>
          {' with all the mentees.'}
        </Text>
        <p />
        <List ml={24} type="ordered">
          <List.Item>
            <Text span c={theme.other.patinaBlueLight} fw={800}>
              {'Virtual Sessions: '}
            </Text>

            <Text inherit span>
              {
                'These sessions will focus on essential career topics such as networking, resume writing, championing diversity, managing difficult conversations, and building resiliency. Led by volunteers from Patina (not your individual mentor), these discussions are designed to help you develop transferable skills for any industry.'
              }
            </Text>
          </List.Item>
          <List.Item>
            <Text span c={theme.other.patinaBlueLight} fw={800}>
              {'In-Person Gatherings: '}
            </Text>

            <Text inherit span>
              {
                'These events will bring together all mentors and mentees to foster connection and build a sense of community. We will try our best to schedule around students’ evening classes, so we may reschedule the current tentative dates if too many conflicts exist, but the dates will be solidified by the first week of the mentorship.'
              }
            </Text>
          </List.Item>
        </List>
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

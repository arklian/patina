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
import { FaCheck } from 'react-icons/fa'
import styles from './ProgramDetails.module.css'

/** Displays details for the mentorship program for mentees */
export function ProgramDetails() {
  return (
    <Stack className={styles.programDetails}>
      <Flex justify={'center'}>
        <Title order={2}>{'Scholarship Details'}</Title>
      </Flex>
      <Space h={22} />
      <Group className={styles.timelineSection}>
        <Stack align={'center'}>
          <ProgramTimeline />
        </Stack>
        <Stack className={styles.programSection} align={'center'}>
          <Eligibility />
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
        color={theme.other.patinaGreenLight}
        bulletSize={24}
        lineWidth={2}
      >
        <Timeline.Item
          title={
            <Text fw={700} c={theme.other.patinaGreenLight}>
              {'June 9'}
            </Text>
          }
          fw={700}
        >
          <Text mt={4}>{'Applications open'}</Text>
        </Timeline.Item>

        <Timeline.Item
          title={
            <Text fw={700} c={theme.other.patinaGreenLight}>
              {'July 14'}
            </Text>
          }
          lineVariant="dashed"
        >
          <Text mt={4}>{'Applications close'}</Text>
        </Timeline.Item>

        <Timeline.Item
          title={
            <Text fw={700} c={theme.other.patinaGreenLight}>
              {'August 17'}
            </Text>
          }
          lineVariant="dashed"
        >
          <Text mt={4}>{'Decisions announced'}</Text>
        </Timeline.Item>
      </Timeline>
    </>
  )
}

function Eligibility() {
  return (
    <>
      <Title order={3}>{'Eligibility'}</Title>
      <List spacing="xs" size="sm">
        <EligibilityBullet
          msg={
            'Open to students of all backgrounds who demonstrate a commitment to Patina Network’s mission of empowering and supporting Asian American, Native Hawaiian, and Pacific Islander (AANHPI) women.'
          }
        />
        <EligibilityBullet
          msg={
            'Applicants must be currently enrolled in or accepted to an undergraduate program at an accredited post-secondary institution (college, university, or trade school) in the United States.'
          }
        />
        <EligibilityBullet
          msg={
            'Applicants must be based in New York State (attending a school located in New York State or having a home address in New York State).'
          }
        />
        <EligibilityBullet msg={'Demonstrate financial need.'} />
        <EligibilityBullet
          msg={
            'U.S. Citizens, DACA recipients, and permanent residents are eligible; international students are not eligible at this time.'
          }
        />
      </List>
    </>
  )
}

function EligibilityBullet({ msg }: { msg: string }) {
  const theme = useMantineTheme()

  return (
    <>
      <List.Item
        icon={
          <ThemeIcon
            color={'dark.4'}
            c={theme.other.patinaGreenLight}
            size={24}
          >
            <FaCheck size={16} />
          </ThemeIcon>
        }
      >
        <Text span c={'dark.0'}>
          {msg}
        </Text>
      </List.Item>
    </>
  )
}

import { Flex, List, Paper, Stack, Text, Title } from '@mantine/core'
import styles from './Tracks.module.css'

// Track Details for different groups of mentees.
export function Tracks() {
  return (
    <Paper className={styles.about}>
      <Stack>
        <Flex justify={'center'}>
          <Title order={2}>{'Program Tracks'}</Title>
        </Flex>
        <Text>
          {'For this semester, we are looking to provide three Tracks'}
        </Text>
        <List>
          <List.Item>
            <Text>{'Tech Industry Track'}</Text>
          </List.Item>
          <List.Item>
            <Text>{'Finance Industry Track'}</Text>
          </List.Item>
          <List.Item>
            <Text>{'Leadership Track'}</Text>
          </List.Item>
        </List>
        <Text>
          {
            'As many of our mentors are in the Tech and Finance industries, we can include industry specific programming for these. However, we still want to offer mentorship to students looking to join any industry, so we are also providing a Leadership track.'
          }
        </Text>
        <Text>
          {
            'We will do our best to match mentees in the Leadership Track to mentors in their prospective fields, but finding exact matches will be more difficult and programming will focus more on generally useful skills.'
          }
        </Text>
      </Stack>
    </Paper>
  )
}

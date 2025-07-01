import { Flex, List, Paper, Stack, Text, Title } from '@mantine/core'
import styles from './Tracks.module.css'

// Track Details for different groups of mentees.
export function Tracks() {
  return (
    <Paper className={styles.tracks}>
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
            <Text>{'Business Industry Track'}</Text>
          </List.Item>
          <List.Item>
            <Text>{'Leadership Track'}</Text>
          </List.Item>
        </List>
        <Text>
          {
            'The Tech and Business Tracks will incorporate industry specific topics while the Leadership Track will look to develop various professional skills. In the leadership track, we will match pairs based on a number of factors, such as leadership style, personal strengths, and career industry.'
          }
        </Text>
      </Stack>
    </Paper>
  )
}

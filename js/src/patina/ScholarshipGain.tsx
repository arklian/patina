import { Text, Paper, Flex, Title } from '@mantine/core'
import styles from './ScholarshipGain.module.css'

export function ScholarshipGain() {
  return (
    <Flex direction={'column'}>
      <Title>{' What Will I Gain? '}</Title>
      <Flex>
        <Paper withBorder className={styles.contain}>
          <Flex direction={'column'} align={'center'}>
            <Title size={'18px'} mb={'sm'}>
              {'Financial Need'}
            </Title>
            <Text ta={'center'}>
              {'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' +
                'Velit officia consequat duis enim velit mollit. '}
            </Text>
          </Flex>
        </Paper>
        <Paper withBorder className={styles.contain}>
          <Flex direction={'column'} align={'center'}>
            <Title size={'18px'} mb={'sm'}>
              {'Financial Needs'}
            </Title>
            <Text ta={'center'}>
              {'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' +
                'Velit officia consequat duis enim velit mollit. '}
            </Text>
          </Flex>
        </Paper>
        <Paper withBorder className={styles.contain}>
          <Flex direction={'column'} align={'center'}>
            <Title size={'18px'} mb={'sm'}>
              {'Financial Needs'}
            </Title>
            <Text ta={'center'}>
              {'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ' +
                'Velit officia consequat duis enim velit mollit. '}
            </Text>
          </Flex>
        </Paper>
      </Flex>
    </Flex>
  )
}

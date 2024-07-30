import { useMediaQuery } from '@mantine/hooks'
import { Flex, Text, Title, Grid } from '@mantine/core'
import styles from './Forms.module.css'

const submission_values = {
  url: 'https://docs.google.com/forms/d/e/1FAIpQLSfpmW9aw6PuFESSN6ZW4SzX8sp9h6yHR08XfR06hzy3FUR29A/formResponse',
  namelink: 'entry.510878894',
  emaillink: 'entry.1931913170',
  subjectlink: 'entry.420573566',
  messagelink: 'entry.1609371387',
}

export function Forms() {
  const largeScreen = useMediaQuery('(min-width: 60rem)')

  return (
    <form action={submission_values.url} method="post" className={styles.form}>
      <Grid className={styles.gridLayout}>
        <Grid.Col span={largeScreen ? 5 : 12}>
          <Flex direction={'column'} rowGap="xl">
            <Title className={styles.title}>{'Questions?'}</Title>
            <Text>
              {'Please contact hi@patinanetwork.org if you have any questions.'}
            </Text>
          </Flex>
        </Grid.Col>
        <Grid.Col span={largeScreen ? 5 : 12} offset={largeScreen ? 2 : 0}>
          <Flex direction={'column'} rowGap="md">
            <Flex direction={'row'} className={styles.nameemail}>
              <Flex direction={'column'} rowGap="xs">
                <label>{'Name'}</label>
                <input
                  type="text"
                  name={submission_values.namelink}
                  size={12}
                />
              </Flex>
              <Flex direction={'column'} rowGap="xs">
                <label>{'Email'}</label>
                <input
                  type="text"
                  name={submission_values.emaillink}
                  size={12}
                />
              </Flex>
            </Flex>
            <Flex direction={'column'} rowGap="xs">
              <label>{'Subject'}</label>
              <input type="text" name={submission_values.subjectlink} />
            </Flex>
            <Flex direction={'column'} rowGap="xs">
              <label>{'Message'}</label>
              <textarea name={submission_values.messagelink} rows={3} />
            </Flex>
            <button type="submit" className={styles.button}>
              {'Send'}
            </button>
          </Flex>
        </Grid.Col>
      </Grid>
    </form>
  )
}

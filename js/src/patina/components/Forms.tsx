import { useMediaQuery } from '@mantine/hooks'
import { Flex, Text, Title, Grid, Button, TextInput } from '@mantine/core'
import React from 'react'
import styles from './Forms.module.css'

const submission_values = {
  url: 'https://docs.google.com/forms/d/e/1FAIpQLSfpmW9aw6PuFESSN6ZW4SzX8sp9h6yHR08XfR06hzy3FUR29A/formResponse',
  nameLink: 'entry.510878894',
  emailLink: 'entry.1931913170',
  subjectLink: 'entry.420573566',
  messageLink: 'entry.1609371387',
}

export function Forms() {
  const largeScreen = useMediaQuery('(min-width: 60rem)')

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    event.preventDefault()
    alert('You have just sent a message')
  }
  return (
    <form
      action={submission_values.url}
      method="post"
      onSubmit={handleSubmit}
      className={styles.form}
    >
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
                <TextInput type="text" name={submission_values.nameLink} />
              </Flex>
              <Flex direction={'column'} rowGap="xs">
                <label>{'Email'}</label>
                <TextInput type="text" name={submission_values.emailLink} />
              </Flex>
            </Flex>
            <Flex direction={'column'} rowGap="xs">
              <label>{'Subject'}</label>
              <TextInput type="text" name={submission_values.subjectLink} />
            </Flex>
            <Flex direction={'column'} rowGap="xs">
              <label>{'Message'}</label>
              <textarea name={submission_values.messageLink} rows={3} />
            </Flex>
            <Button type="submit" className={styles.button}>
              {'Send'}
            </Button>
          </Flex>
        </Grid.Col>
      </Grid>
    </form>
  )
}

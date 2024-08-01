import { useMediaQuery } from '@mantine/hooks'
import {
  Flex,
  Text,
  Title,
  Grid,
  Button,
  TextInput,
  Textarea,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import React from 'react'
import * as EmailValidator from 'email-validator'
import styles from './Forms.module.css'

const submissionValues = {
  url: 'https://docs.google.com/forms/d/e/1FAIpQLSfpmW9aw6PuFESSN6ZW4SzX8sp9h6yHR08XfR06hzy3FUR29A/formResponse',
  nameLink: 'entry.510878894',
  emailLink: 'entry.1931913170',
  subjectLink: 'entry.420573566',
  messageLink: 'entry.1609371387',
}

export function Forms() {
  const largeScreen = useMediaQuery('(min-width: 60em)')

  const handleSubmit = (event: React.FormEvent<EventTarget>) => {
    // this is to prevent a direct linking to the Google forms (otherwise would direct to the /formResponse url)
    event.preventDefault()
    form.resetTouched()
    // make a modal/toast for this
    alert('You have just sent a message')
  }

  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: { name: '', email: '', subject: '', message: '' },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? 'Name must have at least 2 letters' : null,
      email: (value) =>
        EmailValidator.validate(value) ? null : 'Invalid email',
      subject: (value) =>
        value.length < 3 ? 'Subject must have at least 3 letters' : null,
      message: (value) =>
        value.length < 10 ? 'Message must have at least 10 letters' : null,
    },
  })

  return (
    <form
      action={submissionValues.url}
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
                <TextInput
                  {...form.getInputProps('name')}
                  type="text"
                  name={submissionValues.nameLink}
                />
              </Flex>
              <Flex direction={'column'} rowGap="xs">
                <label>{'Email'}</label>
                <TextInput
                  {...form.getInputProps('email')}
                  type="text"
                  name={submissionValues.emailLink}
                />
              </Flex>
            </Flex>
            <Flex direction={'column'} rowGap="xs">
              <label>{'Subject'}</label>
              <TextInput
                {...form.getInputProps('subject')}
                type="text"
                name={submissionValues.subjectLink}
              />
            </Flex>
            <Flex direction={'column'} rowGap="xs">
              <label>{'Message'}</label>
              <Textarea
                {...form.getInputProps('message')}
                name={submissionValues.messageLink}
                rows={4}
              />
            </Flex>
            {form.isValid() ?
              <Button type="submit" className={styles.button}>
                {'Send'}
              </Button>
            : <Button disabled> {'Send'} </Button>}
          </Flex>
        </Grid.Col>
      </Grid>
    </form>
  )
}

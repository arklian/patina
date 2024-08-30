import { Flex, Paper, Space, Stack, Text, Title } from '@mantine/core'
import styles from './About.module.css'

// Defining the About component
export function About() {
  return (
    <Flex className={styles.about}>
      <div>
        <Title order={2}>{'About the Program'}</Title>
        <Space h={'sm'} />
        <Text size={'lg'}>
          {
            'Many young people feel uncertain as they navigate their educational and career paths. Our mentors are here to provide personalized guidance, working closely with you to understand your goals and learning style and helping you find a clear path to your career.'
          }
          <p />
          {
            'We also offer group activities designed to help you connect with other students and mentors while developing essential career skills, such as networking and interview preparation.'
          }
          <p />
          {
            "Together, we will also explore topics rarely discussed in the workplace, like what it means to be AANHPI in today’s professional environment. We'll explore various AANHPI cultures and celebrate our diverse backgrounds."
          }
          <p />
          {
            'We hope all participants in our program leave not only with a stronger foundation for their career but also as a committed ally, ready to contribute to a more inclusive workplace for future generations.'
          }
        </Text>
      </div>
      <Stack className={styles.quote}>
        <Paper withBorder h={'fit-content'}>
          <Text className={styles.quoteText}>
            {
              '“I feel more motivated and confident not only in what I want for my future but in reaching out to other professionals and building my network”'
            }
            <Text inherit className={styles.quoteAuthor}>
              {' - Jasmine'}
            </Text>
          </Text>
        </Paper>
      </Stack>
    </Flex>
  )
}

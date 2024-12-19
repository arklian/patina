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
            'We also offer group activities designed to help you connect with other students and mentors while developing essential career skills. Our weekly topics include networking, resume reviews, interview preparation, giving and receiving feedback, managing difficult professional conversations, and more!.'
          }
          <p />
          {
            'Together, we will also explore important topics, such as mental health and resiliency, sharing struggles we face, and what it means to be AANHPI in today’s professional environment. We’ll dive into our various cultures, celebrate our diverse backgrounds, and build community.'
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

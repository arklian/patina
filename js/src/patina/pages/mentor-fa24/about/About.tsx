import { Flex, Paper, Space, Stack, Text, Title } from '@mantine/core'
import styles from './About.module.css'

// Defining the About component
export function About() {
  return (
    <Flex className={styles.about}>
      <Stack className={styles.quote}>
        <Paper withBorder h={'fit-content'}>
          <Text className={styles.quoteText}>
            {
              '"It\'s given me insight on how to properly prepare for my job search and a glimpse of what my future could be”'
            }
            <Text inherit className={styles.quoteAuthor}>
              {' - Amanda'}
            </Text>
          </Text>
        </Paper>
      </Stack>
      <div className={styles.aboutText}>
        <Title order={2}>{'About the Program'}</Title>
        <Space h={'sm'} />
        <Text size={'lg'}>
          {
            "In today’s competitive job market, having a trusted mentor can make all the difference in a young professional's career. By joining our program, you’ll have the opportunity to shape the next generation of leaders, offering insights that go beyond textbooks and lectures. Your personal experiences, both successes and challenges, will help students understand what it takes to succeed in their chosen fields and empower them to navigate the unique challenges faced by AANHPI individuals in the workplace."
          }
          <p />
          {
            "In addition to one-on-one mentoring, you'll also engage in group activities that foster cultural awareness and inclusion, ensuring that each student leaves the program not just as a skilled professional but as a strong advocate for diversity and inclusion."
          }
        </Text>
      </div>
    </Flex>
  )
}

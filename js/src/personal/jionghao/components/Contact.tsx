import { Button, Text, Title } from '@mantine/core'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.contactLine}></div>
      <Title className={styles.title}>{'Get In Touch'}</Title>
      <Text className={styles.text}>
        {'I am currently looking for full-time and internship opportunities, '}
        {
          'so my inbox is always open! Whether you have a job opportunity, a question, or just want to say hi, '
        }
        {'I’ll to get back to you as soon as possible!'}
      </Text>
      <Button
        variant={'outline'}
        size={'lg'}
        component={'a'}
        href="mailto:Jhwu03@gmail.com"
      >
        {'Contact me!'}
      </Button>
    </div>
  )
}

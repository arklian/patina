import { Button, Text, Title, ActionIcon } from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from '@tabler/icons-react'
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

      <div className={styles.iconSection}>
        <ActionIcon
          className={styles.icons}
          component={'a'}
          href={'https://github.com/Jhwu3'}
          variant={'transparent'}
        >
          <IconBrandGithub size={32} stroke={1.25} />
        </ActionIcon>
        <ActionIcon
          className={styles.icons}
          variant={'transparent'}
          component={'a'}
          href={'https://www.linkedin.com/in/jionghao-wu/'}
        >
          <IconBrandLinkedin size={32} stroke={1.25} />
        </ActionIcon>
        <ActionIcon
          className={styles.icons}
          variant={'transparent'}
          component={'a'}
          href={'https://www.instagram.com/jionghaow/'}
        >
          <IconBrandInstagram size={32} stroke={1.25} />
        </ActionIcon>
      </div>
      <Text className={styles.author}>{'Built By Jionghao Wu'}</Text>
    </div>
  )
}

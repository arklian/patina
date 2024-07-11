import { Title, Text, List } from '@mantine/core'
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <div>
      <footer className={styles.wrapper}>
        <div className={styles.text}>
          <Title
            className={styles.title}
            order={2}
          >
            {'Contact'}
          </Title>
          <Text
            className={styles.description}
            size="md"
          >
            {'Please feel free to reach out!'}
          </Text>
        </div>
        <List className={styles.links}>
          <List.Item className={styles.link}>
            <a
              className={styles.innerLink}
              href="https://www.instagram.com/kazi_mansha/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram
                size={30}
                color={'black'}
              />
              <Text size="md">{'@kazi_mansha'}</Text>
            </a>
          </List.Item>
          <List.Item className={styles.link}>
            <a
              className={styles.innerLink}
              href="https://www.linkedin.com/in/kazimansha/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn
                size={30}
                color={'black'}
              />
              <Text size="md">{'Kazi Mansha'}</Text>
            </a>
          </List.Item>
          <List.Item className={styles.link}>
            <a
              className={styles.innerLink}
              href="https://github.com/KaziMansha"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={30}
                color={'black'}
              />
              <Text size="md">{'KaziMansha'}</Text>
            </a>
          </List.Item>
        </List>
      </footer>
    </div>
  )
}

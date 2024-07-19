import { Title, Text, Image, List } from '@mantine/core'
import bitmojiImageStanding from '../../assets/bitmoji_hero.png'
import patinaNetwork from '../../assets/patina_network_logo.jpeg'
import allStarCode from '../../assets/all_star_code_logo.jpeg'
import hunterCollege from '../../assets/hunter_college_logo.jpeg'
import styles from './Experiences.module.css'

export function Experiences() {
  return (
    <div>
      <section className={styles.wrapper}>
        <Title className={styles.title} order={2}>
          {'What am I doing right now?'}
        </Title>
        <div className={styles.content}>
          <Image
            className={styles.image}
            src={bitmojiImageStanding}
            alt={'Bitmoji Image of Kazi'}
          />
          <Text size={'md'}>{''}</Text>
          <List className={styles.unorderedList}>
            <List.Item className={styles.unorderedListItem}>
              <div className={styles.Item}>
                <Image
                  src={patinaNetwork}
                  h={100}
                  w={100}
                  alt={'Patina Network Corporation Logo'}
                />
                <div className={styles.unorderedListItemText}>
                  <Title order={3}>
                    {'Software Engineer Intern at Patina Network'}
                    <br />
                    {'June 2024 - Present'}
                  </Title>
                  <Text size={'md'}>
                    {
                      'By utilizing technologies like React, TypeScript, Vite, and Mantine, I am developing a robust fullstack website for Patina, while also leveraging Python to analyze extensive databases, enabling the creation of applications that pinpoint strategic school targets for programs and fundraising efforts directed at AANHPI communities.'
                    }
                  </Text>
                </div>
              </div>
            </List.Item>
            <List.Item className={styles.unorderedListItem}>
              <div className={styles.Item}>
                <Image
                  src={allStarCode}
                  h={100}
                  w={100}
                  alt={'All Star Code Logo'}
                />
                <div className={styles.unorderedListItemText}>
                  <Title order={3}>
                    {'Lead Teaching Assistant at All Star Code'}
                    <br />
                    {'June 2024 - Present'}
                  </Title>
                  <Text size={'md'}>
                    {
                      'I assist and mentor 120 Black and Latinx high school students in a coding summer intensive, crafting and teaching lessons on HTML, CSS, JavaScript, JSON, and databases through project-based learning, in collaboration with two other instructors.'
                    }
                  </Text>
                </div>
              </div>
            </List.Item>
            <List.Item className={styles.unorderedListItem}>
              <div className={styles.Item}>
                <Image
                  src={hunterCollege}
                  h={100}
                  w={100}
                  alt={'Hunter College Logo'}
                />
                <div className={styles.unorderedListItemText}>
                  <Title order={3}>
                    {'Undergraduate Teaching Assistant'}
                    <br />
                    {'Jan 2022 - Present'}
                  </Title>
                  <Text size={'md'}>
                    {
                      'I administer and grade quizzes and mock technical interviews in Python and C++ while cooperating with fellow teaching assistants to tutor students in Introduction to Python, Analysis & Design I and II classes, helping them debug code and providing individualized assistance with weekly assignments and personal projects.'
                    }
                  </Text>
                </div>
              </div>
            </List.Item>
          </List>
        </div>
      </section>
    </div>
  )
}

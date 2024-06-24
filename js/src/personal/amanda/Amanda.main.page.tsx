import { NavLink, Title, Text, Divider } from '@mantine/core'
import styles from './Amanda.module.css'

export function AmandaMainPage() {
  return (
    <div className={styles.mainPage}>
      <div className={styles.navbar}>
        <NavLink
          label="about"
          href="#about"
        />
        <NavLink
          label="projects"
          href="#projects"
        />
        <NavLink
          label="misc"
          href="#misc"
        />
        <NavLink
          label="contact"
          href="#contact"
        />
      </div>
      <div>
        <Title id="about">{'about'}</Title>
        <Text>
          {' '}
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
          }
          {'incididunt ut labore et dolore magna aliqua. Ut enim ad...'}
        </Text>
        <Divider my="md" />
        <Title id="projects">{'projects'}</Title>
        <Text>
          {' '}
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
          }
          {'incididunt ut labore et dolore magna aliqua. Ut enim ad...'}
        </Text>
        <Divider my="md" />
        <Title id="misc">{'misc'}</Title>
        <Text>
          {' '}
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
          }
          {'incididunt ut labore et dolore magna aliqua. Ut enim ad...'}
        </Text>
        <Divider my="md" />
        <Title id="contact">{'contact'}</Title>
        <Text>
          {' '}
          {
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
          }
          {'incididunt ut labore et dolore magna aliqua. Ut enim ad...'}
        </Text>
      </div>
    </div>
  )
}

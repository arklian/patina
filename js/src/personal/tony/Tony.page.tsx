import { Title, Text, Grid, Image, ActionIcon } from '@mantine/core'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import styles from './Tony.module.css'

//TonyPage Component
export function TonyPage() {
  return (
    <>
      <Grid
        gutter="md"
        className={styles.grid}
      >
        <Grid.Col span={6}>
          <Title
            className={styles.title}
            ta="left"
          >
            <Text
              inherit
              component="span"
            >
              {'Tony Wang'}
            </Text>
          </Title>
          <Text className={styles.text}>{'Software Engineer Intern'}</Text>
          <Image
            className={styles.pfp}
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
            alt="Profile"
          />
          <div className={styles.socialIcons}>
            <ActionIcon
              component="a"
              href="https://github.com/wangtony4005"
              target="_blank"
              size="lg"
            >
              <FaGithub size={24} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="mailto:wangtony4005@gmail.com"
              size="lg"
            >
              <FaEnvelope size={24} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://linkedin.com/in/wangtony4005"
              target="_blank"
              size="lg"
            >
              <FaLinkedin size={24} />
            </ActionIcon>
          </div>
        </Grid.Col>
        <Grid.Col span={6}>
          <Text className={styles.about}>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
          </Text>
        </Grid.Col>
      </Grid>
    </>
  )
}

import { useState } from 'react'
import {
  Title,
  Text,
  Grid,
  Image,
  ActionIcon,
  Container,
  Badge,
  Group,
  MantineProvider,
} from '@mantine/core'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import A_list from './assets/A_list.png'
import Tony_pfp from './assets/tony.jpg'
import styles from './Tony.module.css'
import { theme } from './theme'

export function TonyPage() {
  const [flashlightStyle, setFlashlightStyle] = useState({
    left: '0px',
    top: '0px',
  })
  const [showFlashlight, setShowFlashlight] = useState(false)
  const handleMouseMove = (e: React.MouseEvent) => {
    setFlashlightStyle({
      left: `${e.clientX + window.scrollX}px`,
      top: `${e.clientY + window.scrollY}px`,
    })
  }

  const handleMouseEnter = () => setShowFlashlight(true)
  const handleMouseLeave = () => setShowFlashlight(false)

  return (
    <MantineProvider theme={theme}>
      <div
        className={styles.grid}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={styles.flashlight}
          style={{
            ...flashlightStyle,
            display: showFlashlight ? 'block' : 'none',
          }}
        />
        <Grid gutter="md">
          <Grid.Col span={6} className={styles.gridLeft}>
            <Title className={styles.name} ta="left">
              <Text inherit component="span">
                {'Tony Wang'}
              </Text>
            </Title>
            <div className={styles.flex}>
              <Text className={styles.textSWE}>{'Software Engineer'}</Text>
              <div className={styles.socialIcons}>
                <ActionIcon
                  color={'#C9CCC8'}
                  component="a"
                  href="https://github.com/wangtony4005"
                  target="_blank"
                  size="lg"
                >
                  <FaGithub size={24} />
                </ActionIcon>
                <ActionIcon
                  color={'#C9CCC8'}
                  component="a"
                  href="mailto:wangtony4005@gmail.com"
                  size="lg"
                >
                  <FaEnvelope size={24} />
                </ActionIcon>
                <ActionIcon
                  component="a"
                  color={'#C9CCC8'}
                  href="https://linkedin.com/in/wangtony4005"
                  target="_blank"
                  size="lg"
                >
                  <FaLinkedin size={24} />
                </ActionIcon>
              </div>
            </div>
            <Container className={styles.menu}>
              <div className={styles.flexMenu}>
                <div className={styles.navLine}></div>
                <Text className={styles.menu1}>{' About'}</Text>
              </div>
              <div className={styles.flexMenu}>
                <div className={styles.navLine}></div>
                <Text className={styles.menu1}>{' Experiences'}</Text>
              </div>
              <div className={styles.flexMenu}>
                <div className={styles.navLine}></div>
                <Text className={styles.menu1}>{' Projects'}</Text>
              </div>
            </Container>
            <Image className={styles.pfp} src={Tony_pfp} alt="Profile" />
          </Grid.Col>
          <Grid.Col span={6}>
            <Text className={styles.about}>
              {
                "Welcome to my site. I'm currently a senior at CUNY Hunter College studying Computer Science. I aspire towards a career where I can create meaningful digital experiences. When I'm not coding it up, I enjoy playing video games like League of Legends, Valorant and Teamfight Tactics. I also enjoy outdoor activities such as hiking and jogging."
              }
            </Text>
            <div className={styles.experienceDiv}>
              <a
                href="https://maryash.github.io/135/index.html"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.link}
              >
                <Text className={styles.experienceTitle}>
                  {'CSCI-135 Teaching Assistant @ Hunter College ↗'}
                </Text>
                <Text className={styles.experienceDates}>
                  {'Jan 2023 - Present'}
                </Text>
                <Text className={styles.experienceText}>
                  {
                    'Provided tutoring for 400+ students in topics related to OOP in C++ and Python. Created and graded projects/assignments in C++. Conducted weekly code reviews.'
                  }
                </Text>
                <Group className={styles.skillGroup}>
                  <Badge color={'#0dba93'} autoContrast>
                    {'C++'}
                  </Badge>
                  <Badge color={'#0dba93'} autoContrast>
                    {'Python'}
                  </Badge>
                </Group>
              </a>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.experienceDiv}>
              <a
                href="https://thedifferenceapp.com/"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.link}
              >
                <Text className={styles.experienceTitle}>
                  {'Software Developer Intern @ The Difference App ↗'}
                </Text>
                <Text className={styles.experienceDates}>
                  {'Jul 2023 - Aug 2023'}
                </Text>
                <Text className={styles.experienceText}>
                  {
                    'Implemented push notifications options using Flutter for a weight management calorie tracking app to allow both Android and iOS users to receive periodic reminder notifications to log their caloric intake and exercise'
                  }
                </Text>
                <Group className={styles.skillGroup}>
                  <Badge color={'#0dba93'} autoContrast>
                    {'Flutter'}
                  </Badge>
                  <Badge color={'#0dba93'} autoContrast>
                    {'Android Studio'}
                  </Badge>
                </Group>
              </a>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.experienceDiv}>
              <Text className={styles.experienceTitle}>
                {'Software Developer Intern @ Patina Network ↗'}
              </Text>
              <Text className={styles.experienceDates}>{'Placeholder'}</Text>
              <Text className={styles.experienceText}>
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis.'
                }
              </Text>
              <Group className={styles.skillGroup}>
                <Badge color={'#0dba93'} autoContrast>
                  {'HTML'}
                </Badge>
                <Badge color={'#0dba93'} autoContrast>
                  {'CSS'}
                </Badge>
                <Badge color={'#0dba93'} autoContrast>
                  {'Typescript'}
                </Badge>
                <Badge color={'#0dba93'} autoContrast>
                  {'React'}
                </Badge>
                <Badge color={'#0dba93'} autoContrast>
                  {'Mantine'}
                </Badge>
              </Group>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.flexProject}>
              <a
                href="https://devpost.com/software/a-ping"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.link}
              >
                <div className={styles.projectItem}>
                  <Image
                    className={styles.projectPic}
                    src={A_list}
                    alt="A-List"
                  />
                  <div className={styles.projectText}>
                    <Text className={styles.experienceTitle}>
                      {'A-List Manga Updates App'}
                    </Text>
                    <Text className={styles.projectDates}>{'↗'}</Text>
                    <Text className={styles.experienceText}>
                      {
                        'Created a Flutter app that allows you to create a list of your favorite webtoon/manga series, and track most recently updated chapters. Save 5+ minutes a day from manually checking and refreshing.'
                      }
                    </Text>
                  </div>
                </div>
              </a>
            </div>
          </Grid.Col>
        </Grid>
      </div>
    </MantineProvider>
  )
}

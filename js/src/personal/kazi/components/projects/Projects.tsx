import { Title, Text, Image, List } from '@mantine/core'
import oculusLogo from '../../assets/oculus_logo.png'
import cvLogo from '../../assets/CV_Logo.png'
import styles from './Projects.module.css'

export function Projects() {
  return (
    <div>
      <section className={styles.wrapper}>
        <Title
          order={2}
          className={styles.title}
        >
          {'Projects'}
        </Title>
        <div className={styles.projects}>
          <div className={styles.container}>
            <Image
              className={styles.image}
              src={cvLogo}
              alt={''}
            />
            <Title
              className={styles.projectTitle}
              order={3}
            >
              {'Age, Gender, Emotion Model'}
            </Title>
            <Text
              className={styles.description}
              size="md"
            >
              {
                'Trained a model to predict age, gender and emotion through pictures or live feed.'
              }
            </Text>
            <List className={styles.skills}>
              <List.Item className={styles.skill}>{'Python3'}</List.Item>
              <List.Item className={styles.skill}>{'LLM'}</List.Item>
              <List.Item className={styles.skill}>{'Data Science'}</List.Item>
            </List>
            <div className={styles.links}>
              <a
                className={styles.link}
                href={''}
                target="_blank"
                rel="noreferrer"
              >
                {'Source'}
              </a>
            </div>
          </div>

          <div className={styles.container}>
            <Image
              className={styles.image}
              src={oculusLogo}
              alt={''}
            />
            <Title
              className={styles.projectTitle}
              order={3}
            >
              {"Beat 'Em Up FPS VR Game"}
            </Title>
            <Text
              className={styles.description}
              size="md"
            >
              {
                "Created a rudimentary FPS VR game in the Beat 'Em Genre on Unity with multiple scenes and environments for different levels"
              }
            </Text>
            <List className={styles.skills}>
              <List.Item className={styles.skill}>{'Unity'}</List.Item>
              <List.Item className={styles.skill}>{'C#'}</List.Item>
              <List.Item className={styles.skill}>{'Mixamo'}</List.Item>
            </List>
            <div className={styles.links}>
              <a
                className={styles.link}
                href={'https://github.com/KaziMansha/VR-Project'}
                target="_blank"
                rel="noreferrer"
              >
                {'Source'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

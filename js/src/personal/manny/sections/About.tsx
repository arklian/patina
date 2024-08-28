import { Container, Grid, Text, Title, Image } from '@mantine/core'
import styles from './About.module.css'
import { imageUrls } from '@/patina/assets/images'

export function About() {
  return (
    <Container size="xl" className={styles.aboutSection}>
      <Title order={2} className={styles.sectionTitle}>
        {'About'}
      </Title>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <div className={styles.textContainer}>
            <Image
              src={imageUrls.placeholder.src}
              alt="Avatar"
              className={styles.avatar}
            />
            <Text className={styles.description}>
              {
                "Hello! I'm Manny, a passionate Computer Science student at Hunter"
              }
              {
                'College in New York, set to graduate in 2025. I aspire to enter'
              }
              {
                'the world of software engineering, where coding is more than just'
              }
              {
                "a skill—it's a thrilling adventure. With strong expertise in C++"
              }
              {"and experience in Python, JavaScript, React, and Swift, I've"}
              {'developed a solid foundation in full-stack development and'}
              {'problem-solving. Beyond coding, I enjoy exploring new'}
              {
                'technologies, playing video games, and spending time with loved'
              }
              {"ones. I'm always eager for opportunities to learn, grow, and"}
              {'showcase my skills.'}
            </Text>
          </div>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }}>
          <div className={styles.iconGrid}>
            <div className={styles.iconWrapper}>
              <img
                src={imageUrls.placeholder.src}
                alt="HTML"
                className={styles.icon}
              />
              <div className={styles.iconLabel}>{'HTML'}</div>
            </div>
            <div className={styles.iconWrapper}>
              <img
                src={imageUrls.placeholder.src}
                alt="JavaScript"
                className={styles.icon}
              />
              <div className={styles.iconLabel}>{'JavaScript'}</div>
            </div>
            <div className={styles.iconWrapper}>
              <img
                src={imageUrls.placeholder.src}
                alt="React"
                className={styles.icon}
              />
              <div className={styles.iconLabel}>{'React'}</div>
            </div>
            <div className={styles.iconWrapper}>
              <img
                src={imageUrls.placeholder.src}
                alt="Node.js"
                className={styles.icon}
              />
              <div className={styles.iconLabel}>{'Node.js'}</div>
            </div>
            <div className={styles.iconWrapper}>
              <img
                src={imageUrls.placeholder.src}
                alt="Spring"
                className={styles.icon}
              />
              <div className={styles.iconLabel}>{'Spring'}</div>
            </div>
            <div className={styles.iconWrapper}>
              <img
                src={imageUrls.placeholder.src}
                alt="Git"
                className={styles.icon}
              />
              <div className={styles.iconLabel}>{'Git'}</div>
            </div>
            <div className={styles.iconWrapper}>
              <img
                src={imageUrls.placeholder.src}
                alt="AWS"
                className={styles.icon}
              />
              <div className={styles.iconLabel}>{'AWS'}</div>
            </div>
            <div className={styles.iconWrapper}>
              <img
                src={imageUrls.placeholder.src}
                alt="Figma"
                className={styles.icon}
              />
              <div className={styles.iconLabel}>{'Figma'}</div>
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

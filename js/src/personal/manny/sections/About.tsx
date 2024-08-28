import { Container, Grid, Text, Title, Image, Anchor } from '@mantine/core'
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

      {/* New Personality Section */}
      <div className={styles.personalitySection}>
        <Title order={3} className={styles.sectionSubTitle}>
          {'More About Me'}
        </Title>
        <Text className={styles.personalityDescription}>
          {
            "I live in New York, a city full of energy and excitement. When I'm not"
          }
          {
            'coding, you can find me exploring the city or immersed in my favorite'
          }
          {' video games.'}
        </Text>
        <div className={styles.gamingProfiles}>
          <Anchor
            href="https://steamcommunity.com/profiles/76561199052633659/" // Replace with your Steam link
            target="_blank"
            className={styles.steamProfile}
          >
            <img
              src={imageUrls.placeholder.src}
              alt="Steam Profile"
              className={styles.iconImage}
            />
            <Text>{'Steam'}</Text>
          </Anchor>
          <Anchor
            href="https://www.xbox.com/en-US/play/user/l%20T00N%20l"
            target="_blank"
            className={styles.xboxProfile}
          >
            <img
              src={imageUrls.placeholder.src}
              alt="Xbox Profile"
              className={styles.iconImage}
            />
            <Text>{'Xbox'}</Text>
          </Anchor>
        </div>
      </div>
    </Container>
  )
}

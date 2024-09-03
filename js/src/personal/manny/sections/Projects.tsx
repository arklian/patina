import { Container, Grid, Title, Text, Button, Image } from '@mantine/core'
import styles from './Projects.module.css'
import { imageUrls } from '@/patina/assets/images'

const projects = [
  {
    title: 'Patina Network',
    description:
      'As part of the team developing the foundational website for the non-profit organization ' +
      'Patina Network, I played a key role in creating a dynamic, user-friendly platform designed ' +
      "to showcase the organization's mission and initiatives. My responsibilities included " +
      "collaborating on the website's structure, implementing responsive design elements, and " +
      'ensuring seamless navigation for a diverse audience. I also developed an image management ' +
      'script to automate image uploads and versioning across Google Drive and DigitalOcean, ' +
      "streamlining the workflow. This system differentiated between 'prod' and 'dev' " +
      'environments, ensuring accurate version control during deployment. The website now ' +
      'serves as the primary digital presence for Patina Network, enhancing community engagement ' +
      'and content management efficiency.',
    image: imageUrls.placeholder.src,
    liveAppLink: 'https://patinanetwork.org',
    learnMoreLink: 'https://github.com/arklian/patina',
  },
  {
    title: 'Splitsy',
    description:
      'Splitsy is an iOS app that is intended to make your life easier by providing a simple ' +
      'solution to this splitting problem. All you have to do is scan your receipt at the end of ' +
      'your hangout and Splitsy will automatically detect the total price and itemized items with ' +
      'their quantity and price. Then you could either choose a divide evenly option or a divide ' +
      'per person option to determine how you want to split the bill. After adding people to the ' +
      'session and putting in your tip percentage and tax Splitsy will calculate based on what ' +
      'food each person ordered their total that they must pay back.',
    image: imageUrls.placeholder.src,
    learnMoreLink: 'https://github.com/Riyuanliu/Splitsy',
  },
  // Add more in the future
]

export function Projects() {
  return (
    <Container size="xl" className={styles.projectsSection}>
      {projects.map((project, index) => (
        <Grid key={index} className={styles.projectContainer}>
          {index % 2 === 0 ?
            <>
              <Grid.Col span={6}>
                <Image
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
              </Grid.Col>
              <Grid.Col span={6} className={styles.projectContent}>
                <Title order={2} className={styles.projectTitle}>
                  {project.title}
                </Title>
                <Text className={styles.projectDescription}>
                  {project.description}
                </Text>
                <div className={styles.buttonGroup}>
                  <Button
                    component="a"
                    href={project.learnMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.learnMoreButton}
                  >
                    {'LEARN MORE'}
                  </Button>
                </div>
              </Grid.Col>
            </>
          : <>
              <Grid.Col span={6} className={styles.projectContent}>
                <Title order={2} className={styles.projectTitle}>
                  {project.title}
                </Title>
                <Text className={styles.projectDescription}>
                  {project.description}
                </Text>
                <div className={styles.buttonGroup}>
                  <Button
                    component="a"
                    href={project.liveAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.liveAppButton}
                  >
                    {'LIVE APP'}
                  </Button>
                  <Button
                    component="a"
                    href={project.learnMoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.learnMoreButton}
                  >
                    {'LEARN MORE'}
                  </Button>
                </div>
              </Grid.Col>
              <Grid.Col span={6}>
                <Image
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
              </Grid.Col>
            </>
          }
        </Grid>
      ))}
    </Container>
  )
}

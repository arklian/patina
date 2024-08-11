import {
  SimpleGrid,
  Title,
  Text,
  List,
  Image,
  ListItem,
  Flex,
  Container,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import styles from '@/personal/riyuan/Riyuan.module.css'
import aboutStyles from '@/personal/riyuan/pages/main/about/About.module.css'
import pfp from '@/personal/riyuan/assets/images/pfp.jpg'

// Define an interface for the props
interface InfoSectionProps {
  title: string
  description: string
  listItems: string[]
}

// Create a utility function to bold the first word:
const formatText = (text: string) => {
  const [firstWord, ...rest] = text.split(' ');
  return (
    <span>
      <Text component="span">
        {firstWord}
      </Text>{' '}
      <Text component="span" c="dimmed">
        {rest.join(' ')}
      </Text>
    </span>
  );
};

/**
 * Function to render the info section with a title, description,
 * and bullet points with more details.
 */
function InfoSection({ title, description, listItems }: InfoSectionProps) {
  return (
    <div className={aboutStyles.info}>
      <Title className={aboutStyles.title}>{title}</Title>
      <Text ta="left" size="md" mx="auto" mt="xl">
        {description}
      </Text>
      <List mt={30} spacing="sm" size="sm">
        {listItems.map((bulletPoint, index) => (
          <ListItem key={index}>
            <Text ta="left" size="md" mx="auto" pl={5}>
              {formatText(bulletPoint)}
            </Text>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

/**
 * Function to render the About Section ->
 * Provides background information about myself, including professional details and an image
 */
export function About() {
  const largeScreen = useMediaQuery('(min-width: 60em)')

  const listItems = [
    "Developed and maintained dynamic web applications, ensuring optimal performance and user experience.",
    "Collaborated with industry professionals to work on real-world projects, enhancing technical proficiency.",
    "Assisted in teaching and guiding peers through complex technical concepts, strengthening communication and problem-solving skills.",
    "Focused on secure authentication systems and modern development practices to address real-world challenges."
  ]

  const description =
    "I am a Computer Science major at Hunter College with a strong passion for technology and development. I’m currently a teaching assistant and a GSWEP Fellow at Google, where I collaborate on various projects and enhance my technical skills. My focus is on creating React components and integrating secure authentication systems. I am committed to continuous learning and applying my skills to real-world challenges."

  return (
    <div id={'About'} className={styles.container}>
      <Container className={styles.inner} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' }}>
        <Title className={styles.title} ta="left" mt={100}>
          {'About Me'}
        </Title>
        <SimpleGrid cols={largeScreen ? 2 : 1} spacing="xl" style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <InfoSection
            title="Software developer"
            description={description}
            listItems={listItems}
          />
          <Flex direction={'row'} justify={'center'} align={'center'}>
            <Image src={pfp} w={400} />
          </Flex>
        </SimpleGrid>
      </Container>
    </div>
  )
}

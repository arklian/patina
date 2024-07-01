import {
  SimpleGrid,
  Title,
  Text,
  List,
  Image,
  ListItem,
  Flex,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import styles from '@/personal/riyuan/Riyuan.module.css'
import aboutStyles from '@/personal/riyuan/components/about/About.module.css'

// Define an interface for the props
interface InfoSectionProps {
  title: string
  description: string
  listItems: string[]
}
// Function to render the info section
function InfoSection({ title, description, listItems }: InfoSectionProps) {
  return (
    <div className={aboutStyles.info}>
      <Title className={aboutStyles.title}>{title}</Title>
      <Text
        c="dimmed"
        ta="left"
        size="lg"
        mx="auto"
        mt="xl"
      >
        {description}
      </Text>
      <List
        mt={30}
        spacing="sm"
        size="sm"
      >
        {listItems.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </div>
  )
}

export function About() {
  const largeScreen = useMediaQuery('(min-width: 60em)')

  const listItems = [
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  ]

  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

  return (
    <div
      id={'About'}
      className={styles.container}
    >
      <Title
        className={styles.title}
        ta="left"
        mt={100}
      >
        {'About Me'}
      </Title>
      <SimpleGrid
        cols={largeScreen ? 2 : 1}
        spacing="xs"
      >
        <InfoSection
          title="Software developer"
          description={description}
          listItems={listItems}
        />
        <Flex
          direction={'row'}
          justify={'center'}
          align={'center'}
        >
          <Image
            src={'https://placehold.co/400x600'}
            w={400}
          />
        </Flex>
      </SimpleGrid>
    </div>
  )
}

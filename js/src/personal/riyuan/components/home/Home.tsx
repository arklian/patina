import {
  Text,
  Title,
  Container,
  Group,
  Button,
  Image,
  SimpleGrid,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import hstyles from '@/personal/riyuan/components/home/Home.module.css'
import typing from '@/personal/riyuan/assets/gif/typing.gif'

/**
 *  Function to render the Home section of the MainPage ->
 *  Provides a welcoming introduction to visitors
 */
export function Home() {
  const largeScreen = useMediaQuery('(min-width: 60em)')
  return (
    <Container className={hstyles.wrapper}>
      <SimpleGrid
        cols={largeScreen ? 2 : 1}
        spacing="xl"
      >
        <div>
          <Title
            className={hstyles.title}
            ta={'left'}
          >
            {'Hi there I'}&apos;{'m'}{' '}
          </Title>
          <Title
            className={hstyles.title}
            ta={'left'}
          >
            <Text
              component="span"
              className={hstyles.highlight}
              inherit
            >
              {'Riyuan'}
            </Text>
          </Title>
          <Title>{'a Software Engineer!'}</Title>
          <Text
            size="lg"
            color="dimmed"
            className={hstyles.description}
            ta={'left'}
          >
            {
              'This website is a space where I share my experiences, interests, and'
            }
            {'personal projects. If you'}&apos;
            {'re interested in learning more about'}
            {
              'me and my work, keep scrolling to explore my skills and projects.'
            }
          </Text>
          <Group
            justify={'left'}
            pt={'md'}
          >
            <Button
              className={hstyles.control}
              ta={'center'}
              size="lg"
              variant="default"
              color="gray"
              mr="md"
              component="a"
              target="_blank"
              href=""
            >
              <Text
                component="span"
                className={hstyles.highlight}
                inherit
              >
                {'Check my resume'}
              </Text>
            </Button>
          </Group>
        </div>
        <Group
          className={hstyles.Typing}
          justify={'center'}
          pt={'lg'}
        >
          <Image
            src={typing}
            alt="My GIF"
            height={400}
            radius="md"
          />
        </Group>
      </SimpleGrid>
    </Container>
  )
}

import {
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Title,
  Text,
} from '@mantine/core'
import { Link } from 'react-router-dom'
import { theme } from '@/personal/martin/theme.ts'
import { Jumbotron } from '@/personal/martin/components/Jumbotron.tsx'
import MartinFront from '@/personal/martin/assets/MartinFront.jpg'

export function MartinMain() {
  return (
    <>
      <Jumbotron
        title="Hello! I'm Martin"
        text="Welcome to my page. I am an SWE intern at Patina Network."
        imgSrc={MartinFront}
        imgSize="35%"
      />
      <Grid grow bg={theme.colors.cobalt[7]}>
        <Grid.Col span={12}>
          <Center>
            <Container>
              <Title order={2}>{'Learn More'}</Title>
            </Container>
          </Center>
        </Grid.Col>
        <Grid.Col span={6}>
          <Container pb={'2em'}>
            <Title order={2}>{'Who am I?'}</Title>
            <Text>
              {
                'Clovis born, Pewaukee raised, and Renton living, I am a University of Washington - Bothell graduate'
              }
              {
                'with a BA of Science - Computer Science & Software Engineering. I enjoy creating software and working on'
              }
              {
                'various projects to expand my knowledge and skill set. Over the last few years, I worked on projects'
              }
              {'involving graphics, game engines, and web applications.'}
            </Text>
            <Link to="/personal/martin/about">
              <Button>{'About Me'}</Button>
            </Link>
          </Container>
        </Grid.Col>
        <Grid.Col span={6}>
          <Container pb={'2em'}>
            <Title order={2}>{'What do I do?'}</Title>
            <Text>
              {
                'I program in many various languages such as Python, C++, C#, Java, JavaScript, and more. Some of my'
              }
              {
                'previous projects include a JavaScript web based game engine, a modified version that includes a physics'
              }
              {' engine module, a Voxel based game engine, and more.'}
            </Text>
            <Link to="/personal/martin/project">
              <Button>{'Projects'}</Button>
            </Link>
          </Container>
        </Grid.Col>
      </Grid>
      <Divider my="md" />
      <Container bg={theme.colors.cobalt[9]}>
        <Title order={2}>{'Feature'}</Title>
        <Text>{'Something fun/interesting'}</Text>
      </Container>
      <Divider my="md" />
    </>
  )
}

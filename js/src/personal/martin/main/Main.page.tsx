import { Button, Center, Container, Divider, Flex, Grid, Image, Title, Text } from '@mantine/core'
import { theme } from '@/personal/martin/theme.ts'
import { Link } from 'react-router-dom'
import MartinFront from '@/personal/martin/assets/MartinFront.jpg'

export function MartinMain() {
  return (
    <>
      <Flex align="center" justify="center">
        <Grid grow justify="center" align="center">
          <Grid.Col span={4}>
            <Container>
              <Title order={1} mx={"1em"}>Hello! I'm Martin</Title>
              <Text mx={"3em"}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                vitae, justo.
              </Text>
            </Container>
          </Grid.Col>
          <Grid.Col span={4}>
            <Image
              w="35%"
              h="35%"
              src={ MartinFront }
              alt="Martin Front Shot"
              style={{ padding: "15px" }}
            />
          </Grid.Col>
        </Grid>
      </Flex>
      <Grid grow bg={ theme.colors.cobalt[7]}>
        <Grid.Col span={12}>
          <Center>
            <Container>
              <Title order={2}>Learn More</Title>
            </Container>
          </Center>
        </Grid.Col>
        <Grid.Col span={6}>
          <Container pb={"2em"}>
            <Title order={2}>Who am I?</Title>
            <Text>
              Clovis born, Pewaukee raised, and Renton living, I am a University of Washington - Bothell graduate
              with a BA of Science - Computer Science & Software Engineering. I enjoy creating software and working on
              various projects to expand my knowledge and skillset. Over the last few years, I worked on projects
              involving graphics, game engines, and web applications.
            </Text>
            <Link to='/personal/martin/about'>
              <Button>About Me</Button>
            </Link>
          </Container>
        </Grid.Col>
        <Grid.Col span={6} >
          <Container pb={"2em"}>
            <Title order={2}>What do I do?</Title>
            <Text>
              I program in many various languages such as Python, C++, C#, Java, JavaSpript, and more. Some of my
              previous projects include a JavaScript web based game engine, a modified version that includes a physics
              engine module, a Voxel based game engine, and more.
            </Text>
            <Link to='/personal/martin/project'>
              <Button>Projects</Button>
            </Link>
          </Container>
        </Grid.Col>
      </Grid>
      <Divider my="md"/>
      <Container bg={ theme.colors.cobalt[9]}>
        <Title order={2}>Feature</Title>
        <Text>Something fun/interesting</Text>
      </Container>
      <Divider my="md"/>
    </>
  )
}

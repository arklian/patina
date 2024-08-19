import {
  Button,
  Center,
  Container,
  Divider,
  Grid,
  rem,
  Title,
  Text,
} from '@mantine/core'
import { Link } from 'react-router-dom'
import { theme } from '@/personal/martin/theme.ts'
import { Jumbotron } from '@/personal/martin/components/Jumbotron.tsx'
import { Clock, timeZone } from '@/personal/martin/components/Clock.tsx'
import { mainAboutMe, mainProjects } from '@/personal/martin/data.json'
import classes from '@/personal/martin/Martin.module.css'

export function MartinMain() {
  return (
    <>
      <Jumbotron
        title="Hello! I'm Martin"
        text="Welcome to my page. I am an SWE intern at Patina Network."
        imgSrc="https://patina-dev.nyc3.cdn.digitaloceanspaces.com/personal/martin/assets/MartinFront.jpg"
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
          <Container>
            <Title order={2}>{'Who am I?'}</Title>
            <Text>{mainAboutMe}</Text>
          </Container>
        </Grid.Col>
        <Grid.Col span={6}>
          <Container>
            <Title order={2}>{'What do I do?'}</Title>
            <Text>{mainProjects}</Text>
          </Container>
        </Grid.Col>
        <Grid.Col span={6} my={rem(2)}>
          <Container>
            <Link to="/personal/martin/about">
              <Button>{'About Me'}</Button>
            </Link>
          </Container>
        </Grid.Col>
        <Grid.Col span={6} my={rem(2)}>
          <Container>
            <Link to="/personal/martin/project">
              <Button>{'Projects'}</Button>
            </Link>
          </Container>
        </Grid.Col>
      </Grid>
      <Divider my="md" />
      <Grid grow className={classes.clockDisplay}>
        <Grid.Col span={3}>
          <Container size="20rem">
            <Clock timezone={timeZone.LocalTime} name={'Local'} />
          </Container>
        </Grid.Col>
        <Grid.Col span={3}>
          <Container size="20rem">
            <Clock timezone={timeZone.Pacific} name={'Seattle'} />
          </Container>
        </Grid.Col>
        <Grid.Col span={3}>
          <Container size="20rem">
            <Clock timezone={timeZone.EastCoast} name={'New York City'} />
          </Container>
        </Grid.Col>
      </Grid>
      <Divider my="md" />
    </>
  )
}

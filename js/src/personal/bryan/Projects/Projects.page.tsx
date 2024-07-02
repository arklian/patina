import { Flex, Text, Title, Grid, Anchor } from '@mantine/core'
import classes from './Projects.module.css'

export function ProjectsPage() {
  const Project = (props: { title: string; link: string }) => (
    <>
      <Grid.Col span={{ base: 12, md: 5, lg: 2.5 }}>
        <Title
          component="span"
          className={classes.title2}
        >
          {props.title}
        </Title>
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 7, lg: 3.5 }}>
        <Anchor
          href={props.link}
          target="_blank"
        >
          {'Github'}
        </Anchor>
        <Text>
          {
            "Hello World. This is placeholder text that I'm writing here for the sake of having a long text thing. This is so I have a good sense of how much I would normally write for a description of one of my pieces. That way, I know how large of an image I can put on the side, as well as how much space it'll take up on my page."
          }
        </Text>
      </Grid.Col>
    </>
  )
  return (
    <Flex
      mr="2rem"
      direction={{ base: 'column', sm: 'row' }}
    >
      <Title
        ml="5rem"
        className={classes.title}
        component="span"
      >
        {'Projects'}
      </Title>
      <Grid
        ml="5rem"
        component="span"
        justify="center"
      >
        <Grid.Col span={12}>
          <Text>{'Currently done projects'}</Text>
        </Grid.Col>
        <Project
          title="This site"
          link="https://github.com/arklian/patina/tree/main/js/src/personal/bryan"
        />
        <Project
          title="COS 429"
          link="https://github.com/bz5989/429_Final"
        />
        <Grid.Col span={12}>
          <Text>{'Future projects'}</Text>
        </Grid.Col>
        <Project
          title="COS 333"
          link="https://github.com/arklian/patina/tree/main/js/src/personal/bryan"
        />
        <Project
          title="COS 397"
          link="https://github.com/arklian/patina/tree/main/js/src/personal/bryan"
        />
      </Grid>
    </Flex>
  )
}

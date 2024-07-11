import { Flex, Text, Title, Grid, Anchor, Center, Image } from '@mantine/core'
import classes from '@/personal/bryan/Bryan.module.css'
import image from '@/personal/bryan/assets/images/Personal_Site.png'
import document from '@/personal/bryan/assets/files/COS_429_Report.pdf'

export function ProjectsPage() {
  const Project = (props: {
    title: string
    link: string
    text: string
    image: string
    read?: boolean
    file?: string
  }) => {
    let Starter = (
      <Anchor href={props.link} target="_blank">
        {'Github'}
      </Anchor>
    )
    if (props.read) {
      Starter = (
        <>
          <Anchor href={props.link} target="_blank">
            {'Github'}
          </Anchor>
          {'   '}
          <Anchor href={props.file} target="_blank">
            {'Report'}
          </Anchor>
        </>
      )
    }
    return (
      <Grid.Col span={{ base: 12, md: 12, lg: 5.9 }} bd="1px solid gray">
        <Grid component="span">
          <Grid.Col span={{ base: 12, md: 5, lg: 5 }}>
            <Center>
              <Title mt="1rem" component="span" className={classes.title2}>
                {props.title}
              </Title>
            </Center>
            <Image src={props.image} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 7, lg: 7 }}>
            {Starter}
            <Text>{props.text}</Text>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    )
  }
  return (
    <Flex mr="5rem" ml="5rem" direction={{ base: 'column', sm: 'column' }}>
      <Title className={classes.title} component="span">
        {'Projects'}
      </Title>
      <Grid component="span" justify="center">
        <Grid.Col span={12}>
          <Text mt="0.5rem" mb="0.5rem">
            {'Currently done projects'}
          </Text>
        </Grid.Col>
        <Project
          title="This site"
          link="https://github.com/arklian/patina/tree/main/js/src/personal/bryan"
          image={image}
          text="Hello World. This is placeholder text that I'm writing here for the sake of having a long text thing. This is so I have a good sense of how much I would normally write for a description of one of my pieces. That way, I know how large of an image I can put on the side, as well as how much space it'll take up on my page."
        />
        <Grid.Col span={0.2}></Grid.Col>
        <Project
          title="COS 429"
          link="https://github.com/bz5989/429_Final"
          image={image}
          read
          file={document}
          text="Hello World. This is placeholder text that I'm writing here for the sake of having a long text thing. This is so I have a good sense of how much I would normally write for a description of one of my pieces. That way, I know how large of an image I can put on the side, as well as how much space it'll take up on my page."
        />
        <Grid.Col span={12}>
          <Text mt="0.5rem" mb="0.5rem">
            {'Future projects'}
          </Text>
        </Grid.Col>
        <Project
          title="COS 333"
          link="https://github.com/arklian/patina/tree/main/js/src/personal/bryan"
          image={image}
          text="Hello World. This is placeholder text that I'm writing here for the sake of having a long text thing. This is so I have a good sense of how much I would normally write for a description of one of my pieces. That way, I know how large of an image I can put on the side, as well as how much space it'll take up on my page."
        />
        <Grid.Col span={0.2}></Grid.Col>
        <Project
          title="COS 397"
          link="https://github.com/arklian/patina/tree/main/js/src/personal/bryan"
          image={image}
          text="Hello World. This is placeholder text that I'm writing here for the sake of having a long text thing. This is so I have a good sense of how much I would normally write for a description of one of my pieces. That way, I know how large of an image I can put on the side, as well as how much space it'll take up on my page."
        />
      </Grid>
    </Flex>
  )
}

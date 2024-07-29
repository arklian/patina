import {
  Flex,
  Text,
  Title,
  Grid,
  Anchor,
  Center,
  Image,
  Space,
} from '@mantine/core'
import classes from '@/personal/bryan/Bryan.module.css'
import image from '@/personal/bryan/assets/images/Personal_Site.png'
import document from '@/personal/bryan/assets/files/COS_429_Report.pdf'

export function ProjectsPage() {
  const Project = (props: {
    title: string
    link: string
    text: string
    addimage?: boolean
    image?: string
    read?: boolean
    file?: string
  }) => (
    <Grid.Col span={{ base: 12, md: 12, lg: 5.9 }} bd="1px solid gray">
      <Grid component="span">
        <Grid.Col span={{ base: 12, md: 5, lg: 5 }}>
          <Center>
            <Title mt="1rem" component="span" className={classes.title2}>
              {props.title}
            </Title>
          </Center>
          {props.addimage && <Image src={props.image} />}
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7, lg: 7 }}>
          <Anchor href={props.link} target="_blank">
            {'Github'}
          </Anchor>
          {props.read && (
            <>
              <Space />
              <Anchor href={props.file} target="_blank">
                {'Report'}
              </Anchor>
            </>
          )}
          <Text>{props.text}</Text>
        </Grid.Col>
      </Grid>
    </Grid.Col>
  )
  return (
    <Flex mr="5rem" ml="5rem" direction={{ base: 'column', sm: 'column' }}>
      <Title className={classes.title} component="span">
        {'Projects'}
      </Title>
      <Grid component="span" justify="center">
        <Grid.Col span={12}>
          <Text mt="0.5rem" mb="0.5rem">
            {'(Mostly) Finished Projects'}
          </Text>
        </Grid.Col>
        <Project
          title="Patina Network"
          link="https://github.com/arklian/patina/tree/main/js/src/personal/bryan"
          addimage
          image={image}
          text="Helped with making the site mobile friendly; worked on setting up database communication for the site."
        />
        <Grid.Col span={0.2}></Grid.Col>
        <Project
          title="COS 429"
          link="https://github.com/bz5989/429_Final"
          addimage
          image={image}
          read
          file={document}
          text="Wrote a paper here with Sarika Ahire. Paper is linked :)"
        />
        <Grid.Col span={12}>
          <Text mt="0.5rem" mb="0.5rem">
            {'Projects for the future'}
          </Text>
        </Grid.Col>
        <Project
          title="COS 333"
          link="https://github.com/arklian/patina/tree/main/js/src/personal/bryan"
          text="Expecting to create either a site or application for this course in the Fall 2024 semester."
        />
        <Grid.Col span={0.2}></Grid.Col>
        <Project
          title="COS 397"
          link="https://github.com/arklian/patina/tree/main/js/src/personal/bryan"
          text="Expecting to do research/coding/write a paper for this course in the Fall 2024 semester."
        />
      </Grid>
    </Flex>
  )
}

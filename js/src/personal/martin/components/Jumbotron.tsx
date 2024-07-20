import { Container, Flex, Grid, Image, Text, Title } from '@mantine/core'

type jumbotronProps = {
  title: string
  text: string
  imgSrc: string
  imgSize: string
}

export function Jumbotron(props: jumbotronProps) {
  return (
    <Flex align="center" justify="center">
      <Grid grow justify="center" align="center">
        <Grid.Col span={4}>
          <Container>
            <Title order={1} mx={'1em'}>
              {props.title}
            </Title>
            <Text mx={'3em'}>{props.text}</Text>
          </Container>
        </Grid.Col>
        <Grid.Col span={4}>
          <Image
            w={props.imgSize}
            h={props.imgSize}
            src={props.imgSrc}
            style={{ padding: '15px' }}
          />
        </Grid.Col>
      </Grid>
    </Flex>
  )
}

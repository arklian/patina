import {Container, Flex, Grid, Image, Text, Title} from "@mantine/core";

type JumbotronProps = {
  title: string;
  text: string;
  imgSrc: string;
  imgSize: string;
}

export const Jumbotron = ({
  title,
  text,
  imgSrc,
  imgSize,
}: JumbotronProps) => {
  return (
    <Flex align="center" justify="center">
      <Grid grow justify="center" align="center">
        <Grid.Col span={4}>
          <Container>
            <Title order={1} mx={"1em"}>{ title }</Title>
            <Text mx={"3em"}>{ text }</Text>
          </Container>
        </Grid.Col>
        <Grid.Col span={4}>
          <Image
            w={imgSize}
            h={imgSize}
            src={imgSrc}
            style={{padding: "15px"}}
          />
        </Grid.Col>
      </Grid>
    </Flex>
  )
}

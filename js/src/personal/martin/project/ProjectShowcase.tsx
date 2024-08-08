import { Card, Image, SimpleGrid, Text, Title } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import classes from '@/personal/martin/Martin.module.css'

type imgEntry = string[]
type projectEntry = { title: string; desc: string; img: imgEntry }
type projectData = projectEntry[]
interface ProjectShowcaseData {
  data: projectData
}

/*
  Creates <Carousel.Slide> elements containing an image from a list of img sources
  @params: string[]
  @return: <Carousel.Slide />
 */
function imageSlides(images: string[]) {
  return images.map((url) => (
    <Carousel.Slide key={url}>
      <Image h={300} w={400} src={url} fit="contain" />
    </Carousel.Slide>
  ))
}

export function ProjectShowcase({ data }: ProjectShowcaseData) {
  const projects = data.map((project) => (
    <Card
      key={project.title}
      shadow="md"
      radius="md"
      className={classes.projCard}
    >
      <Title fz="lg" mt="md" order={2}>
        {project.title}
      </Title>
      <Text fz="sm" mt="sm">
        {project.desc}
      </Text>
      <div className={classes.projCarousel}>
        <Carousel loop align="center" orientation="horizontal" withIndicators>
          {imageSlides(project.img)}
        </Carousel>
      </div>
    </Card>
  ))
  return (
    <>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt={50}>
        {projects}
      </SimpleGrid>
    </>
  )
}

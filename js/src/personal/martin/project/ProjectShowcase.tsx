import { Card, Image, SimpleGrid, Text } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import classes from '@/personal/martin/Martin.module.css'

type imgEntry = { img1: string; img2: string; img3: string }
type projectEntry = { title: string; desc: string; img: imgEntry }
type projectData = projectEntry[]
interface ProjectShowcaseData {
  data: projectData
}

export function ProjectShowcase({ data }: ProjectShowcaseData) {
  const projects = data.map((project) => (
    <Card key={project.title} shadow="md" radius="md" padding="xl">
      <Text fz="lg" fw={500} mt="md">
        {project.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {project.desc}
      </Text>
      <div className={classes.projCarousel}>
        <Carousel height={300} align="start" slideGap="md" loop>
          <Carousel.Slide>
            <Image src={project.img.img1} w="400" h="300" />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={project.img.img2} w="400" h="300" />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image src={project.img.img3} w="400" h="300" />
          </Carousel.Slide>
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

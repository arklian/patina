import { Card, Text, SimpleGrid } from '@mantine/core'
import MartinFront from '@/personal/martin/assets/MartinFront.jpg'
import { Jumbotron } from '@/personal/martin/components/Jumbotron.tsx'

const projectData = [
  {
    title: 'Patina Network',
    desc: 'Description',
  },
  {
    title: 'Voxel Game Engine',
    desc:
      'Using c++ and OpenGl to make a game engine library for voxel based games. Voxels allow' +
      ' a player to have the freedom to manipulate and change their environment and have a more' +
      ' interactive experience.',
  },
  {
    title: '2D Cloth Physics Simulation',
    desc: 'Description',
  },
  {
    title: 'JS Game Engine API',
    desc: 'Description',
  },
]

export function MartinProject() {
  const projects = projectData.map((project) => (
    <Card key={project.title} shadow="md" radius="md" padding="xl">
      <Text fz="lg" fw={500} mt="md">
        {project.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {project.desc}
      </Text>
    </Card>
  ))
  return (
    <>
      <Jumbotron
        title="Projects"
        text={'Showcase of my best and favorite projects.'}
        imgSrc={MartinFront}
        imgSize="35%"
      />

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl" mt={50}>
        {projects}
      </SimpleGrid>
    </>
  )
}

import { SimpleGrid, Group, Title, Text, Image, Button } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Project } from '@/personal/riyuan/components/project/projectData'
import laptop from '@/personal/riyuan/assets/images/laptop.png'
import projectStyle from '@/personal/riyuan/components/project/project.module.css'
import hstyles from '@/personal/riyuan/components/home/Home.module.css'
/**
 * This component provides a route in my page
 * Exports routes to different pages in my website
 * Defines the navigation structure for the Riyuan's section
 */
function ProjectItem({ project, index }: { project: Project; index: number }) {
  const largeScreen = useMediaQuery('(min-width: 60em)')
  const isEven = index % 2 === 0

  return (
    <SimpleGrid
      className={projectStyle.projectItem}
      key={index}
      cols={largeScreen ? 2 : 1}
      spacing="xl"
      pt={'lg'}
    >
      {isEven ?
        <>
          <ProjectTextSection
            project={project}
            index={index}
          />
          <ProjectImageSection project={project} />
        </>
      : <>
          <ProjectImageSection project={project} />
          <Group
            pl={'6rem'}
            align={'flex-start'}
          >
            <ProjectTextSection
              project={project}
              index={index}
            />
          </Group>
        </>
      }
    </SimpleGrid>
  )
}

/**
 * This function handles the text section of each project
 * Receives the project details and index as props
 * Renders the project header, title, description, and button
 */
function ProjectTextSection({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <Group
      pt={'lg'}
      display={'grid'}
      justify={'flex-start'}
      align={'flex-start'}
    >
      <div className={projectStyle.textSection}>
        <ProjectHeader index={index} />
        <Title>{project.name}</Title>
        <Text
          size="lg"
          color="dimmed"
          className={hstyles.description}
          ta={'left'}
        >
          {project.description}
        </Text>
        <Group
          justify={'left'}
          pt={'md'}
        >
          <Button
            ta={'center'}
            size="lg"
            variant="default"
            color="gray"
            mr="md"
            component="a"
            target="_blank"
            href=""
          >
            <Text
              component="span"
              className={hstyles.highlight}
              inherit
            >
              {'View Project ->'}
            </Text>
          </Button>
        </Group>
      </div>
    </Group>
  )
}

/**
 * This function renders the project header
 * Displays the project index in a specific format
 */
function ProjectHeader({ index }: { index: number }) {
  return (
    <div className={projectStyle.barSection}>
      <div className={projectStyle.barShape}></div>
      <div className={projectStyle.barLine}></div>
      <div className={projectStyle.barNumber}>
        {index < 10 ? `0${index + 1}` : index + 1}
      </div>
    </div>
  )
}

/**
 * This function handles the image section of each project
 * Receives the project details as props
 * Renders the project images
 */
function ProjectImageSection({ project }: { project: Project }) {
  return (
    <Group className={projectStyle.imageContainer}>
      <Image
        src={laptop}
        alt="Laptop"
        className={projectStyle.image1}
      />
      <Image
        src={project.imgSrc}
        alt={project.name}
        className={projectStyle.image2}
      />
    </Group>
  )
}

export { ProjectItem }

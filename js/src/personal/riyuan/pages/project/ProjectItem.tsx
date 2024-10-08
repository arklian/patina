import {
  SimpleGrid,
  Group,
  Title,
  Text,
  Image,
  Button,
  AspectRatio,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Project } from '@/personal/riyuan/pages/project/projectData.ts'
import laptop from '@/personal/riyuan/assets/images/laptop.png'
import projectStyle from '@/personal/riyuan/pages/project/Projects.module.css'
import hstyles from '@/personal/riyuan/pages/about/home/Home.module.css'

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
    <div>
      <ProjectHeader index={index} />
      <Title>{project.name}</Title>
      <Text size="lg" className={hstyles.description} ta={'left'}>
        {project.description}
      </Text>
      <Group justify={'left'} pt={'md'}>
        <Button
          className={hstyles.control}
          ta={'center'}
          size={'lg'}
          variant={'default'}
          color={'gray'}
          mr={'md'}
          component={'a'}
          target={'_blank'}
          href=""
        >
          <Text component="span" className={hstyles.highlight} inherit>
            {'View Project ->'}
          </Text>
        </Button>
      </Group>
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
      <AspectRatio>
        <Image src={laptop} alt="Laptop" className={projectStyle.image1} />
        <Image
          src={project.imgSrc}
          alt={project.name}
          className={projectStyle.image2}
        />
      </AspectRatio>
    </Group>
  )
}

export function ProjectItem({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const isLargeScreen = useMediaQuery('(min-width: 60em)')
  const isEven = index % 2 === 0
  return (
    <SimpleGrid
      className={projectStyle.projectItem}
      key={index}
      cols={isLargeScreen ? 2 : 1}
      spacing="xl"
      pt={'lg'}
    >
      {isEven && isLargeScreen ?
        <>
          <ProjectTextSection project={project} index={index} />
          <ProjectImageSection project={project} />
        </>
      : <>
          <ProjectImageSection project={project} />
          <Group pl={'6rem'} align={'flex-start'}>
            <ProjectTextSection project={project} index={index} />
          </Group>
        </>
      }
    </SimpleGrid>
  )
}

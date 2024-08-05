import MartinFront from '@/personal/martin/assets/MartinFront.jpg'
import { projData } from '@/personal/martin/data.json'
import { Jumbotron } from '@/personal/martin/components/Jumbotron.tsx'
import { ProjectShowcase } from './ProjectShowcase.tsx'

export function MartinProject() {
  return (
    <>
      <Jumbotron
        title="Projects"
        text={'Showcase of my best and favorite projects.'}
        imgSrc={MartinFront}
        imgSize="35%"
      />
      <ProjectShowcase data={projData} />
    </>
  )
}

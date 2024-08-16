import { projData } from '@/personal/martin/data.json'
import { Jumbotron } from '@/personal/martin/components/Jumbotron.tsx'
import { ProjectShowcase } from './ProjectShowcase.tsx'

export function MartinProject() {
  return (
    <>
      <Jumbotron
        title="Projects"
        text={'Showcase of my best and favorite projects.'}
        imgSrc="https://patina-dev.nyc3.cdn.digitaloceanspaces.com/personal/martin/assets/MartinFront.jpg"
        imgSize="35%"
      />
      <ProjectShowcase data={projData} />
    </>
  )
}

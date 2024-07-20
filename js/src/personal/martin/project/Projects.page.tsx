import MartinFront from '@/personal/martin/assets/MartinFront.jpg'
import { Jumbotron } from '@/personal/martin/components/Jumbotron.tsx'

export function MartinProject() {
  return (
    <>
      <Jumbotron
        title="Projects"
        text={'Short Paragraph into to page. '}
        imgSrc={MartinFront}
        imgSize="35%"
      />
    </>
  )
}

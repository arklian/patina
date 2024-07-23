import MartinFront from '@/personal/martin/assets/MartinFront.jpg'
import { Jumbotron } from '@/personal/martin/components/Jumbotron.tsx'
import { ProjectShowcase } from './ProjectShowcase.tsx'

const imgSrc = [
  {
    img1: 'https://picsum.photos/400/300/?blur=5',
    img2: 'https://picsum.photos/400/300/?blur=5',
    img3: 'https://picsum.photos/400/300/?blur=5',
  },
  {
    img1: 'https://patina-dev.nyc3.cdn.digitaloceanspaces.com/personal/martin/projects/Voxel/VoxelLightTest.jfif',
    img2: 'https://patina-dev.nyc3.cdn.digitaloceanspaces.com/personal/martin/projects/Voxel/VoxelTerrainTest.jfif',
    img3: 'https://patina-dev.nyc3.cdn.digitaloceanspaces.com/personal/martin/projects/Voxel/VoxelPerfTest.jfif',
  },
  {
    img1: 'https://patina-dev.nyc3.cdn.digitaloceanspaces.com/personal/martin/projects/ClothSim/Scene0.PNG',
    img2: 'https://patina-dev.nyc3.cdn.digitaloceanspaces.com/personal/martin/projects/ClothSim/Scene1.PNG',
    img3: 'https://patina-dev.nyc3.cdn.digitaloceanspaces.com/personal/martin/projects/ClothSim/Scene2.PNG',
  },
  {
    img1: 'https://patina-dev.nyc3.cdn.digitaloceanspaces.com/personal/martin/projects/JSGameEngine/dialogue0.PNG',
    img2: 'https://patina-dev.nyc3.cdn.digitaloceanspaces.com/personal/martin/projects/JSGameEngine/dialogue1.PNG',
    img3: 'https://patina-dev.nyc3.cdn.digitaloceanspaces.com/personal/martin/projects/JSGameEngine/dialogue-gif.gif',
  },
]

const projData = [
  {
    title: 'Patina Network',
    desc:
      'Working on curated projects to explore roles within the tech field, grow/enhance my ' +
      'skills, and make a meaningful impact to the startup.',
    img: imgSrc[0],
  },
  {
    title: 'Voxel Game Engine',
    desc:
      'Using c++ and OpenGl to make a game engine library for voxel based games. Voxels allow' +
      ' a player to have the freedom to manipulate and change their environment and have a more' +
      ' interactive experience.',
    img: imgSrc[1],
  },
  {
    title: '2D Cloth Physics Simulation',
    desc:
      'Created a physics module for my JavaScript game engine using algorithms such as Verlet' +
      ' Integration to calculate node/object positions in a soft-body simulation.',
    img: imgSrc[2],
  },
  {
    title: 'JS Game Engine API',
    desc:
      'Using JavaScript and WebGL to create a basic game engine for web based games. Includes' +
      ' features such as async loading, instancing, scenes, bound/per-pixel collision, and ' +
      'more.',
    img: imgSrc[3],
  },
]

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

import { Accordion, Container, Group, Text } from '@mantine/core'
import { SoundCloudPlayer } from '@/personal/martin/components/SoundCloudPlayer.tsx'
import { Jumbotron } from '@/personal/martin/components/Jumbotron.tsx'
import MartinFront from '@/personal/martin/assets/MartinFront.jpg'

const accordionList = [
  {
    id: 'life',
    label: 'Life Stuff',
    desc: 'My background',
    content: '[Insert content here]',
  },
  {
    id: 'edu',
    label: 'Education',
    desc: 'My path as a growing software engineer',
    content:
      "I graduated from the University of Washington-Bothell in the Fall of '24 with a BS of Science - CSSE." +
      ' During my tenure at UW-Bothell, I had many opportunities to learn various interesting topics such as' +
      ' Game Engine and API development, CyberSecurity, User Centered Design, and more. I have also been an active' +
      ' member in both the Filipino American Student Association (FASA) and Brilliant Billiards Club (BBC) where I' +
      " served as club president from 2021-23. I have also graduated from O'Dea High School in Seattle, WA.",
  },
  {
    id: 'exp',
    label: 'Experience',
    desc: 'My work background',
    content: '[Insert content here]',
  },
  {
    id: 'hobby',
    label: 'Hobbies',
    desc: 'How I spend my free time',
    content:
      'In my free time, I enjoy listening and making music. I listen to all genres of music and typically' +
      ' create cinematic future bass or house beats. I also participate in both casual and competitive sim racing' +
      ' in the  MX-5 cup or GT2/GT3 divisions.',
  },
]

interface LabelProps {
  label: string
  desc: string
}

function AccordionLabel({ label, desc }: LabelProps) {
  return (
    <Group wrap="nowrap">
      <div>
        <Text>{label}</Text>
        <Text size="sm" c="dimmed" fw={400}>
          {desc}
        </Text>
      </div>
    </Group>
  )
}

export function MartinAbout() {
  const items = accordionList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ))

  return (
    <>
      <Jumbotron
        title={'About Me'}
        text={'This page will display my personal background and hobbies.'}
        imgSrc={MartinFront}
        imgSize={'35%'}
      />
      <Container>
        <Accordion chevronPosition="right" variant="contained">
          {items}
        </Accordion>
      </Container>
      <Container>
        <SoundCloudPlayer
          src={
            'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1852463463&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
          }
          width={'100%'}
          height={'300'}
        />
      </Container>
    </>
  )
}

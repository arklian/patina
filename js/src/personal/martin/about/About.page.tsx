import { Accordion, Container, Group, Text } from '@mantine/core'
import { SoundCloudPlayer } from '@/personal/martin/components/SoundCloudPlayer.tsx'
import { Jumbotron } from '@/personal/martin/components/Jumbotron.tsx'
import { theme } from '@/personal/martin/theme.ts'
import { aboutData } from '@/personal/martin/data.json'
import classes from '@/personal/martin/Martin.module.css'

type aboutList = {
  id: string
  label: string
  desc: string
  content: string
}

interface LabelProps {
  label: string
  desc: string
}

function AccordionLabel({ label, desc }: LabelProps) {
  return (
    <Group wrap="nowrap">
      <div>
        <Text>{label}</Text>
        <Text size="sm" c={theme.colors.uranianBlue[8]} fw={400}>
          {desc}
        </Text>
      </div>
    </Group>
  )
}

export function MartinAbout() {
  const items = aboutData.map((item: aboutList) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control className={classes.accordionLabel}>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel className={classes.accordionContent}>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ))

  return (
    <>
      <Jumbotron
        title={'About Me'}
        text={'This page will display my personal background and hobbies.'}
        imgSrc="https://patina-dev.nyc3.cdn.digitaloceanspaces.com/personal/martin/assets/MartinFront.jpg"
        imgSize={'35%'}
      />
      <Container>
        <Accordion
          chevronPosition="right"
          variant="contained"
          transitionDuration={500}
        >
          {items}
        </Accordion>
      </Container>
      <Container className={classes.scPlayerWrapper}>
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

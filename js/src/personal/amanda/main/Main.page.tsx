import {
  AspectRatio,
  Container,
  ScrollArea,
  Spoiler,
  Text,
  Title,
} from '@mantine/core'
import { SectionContent } from './SectionContent.tsx'
import { Section } from '../Types.tsx'
import data from '../Data.json'
import styles from '@/personal/amanda/Amanda.module.css'

export function MainPage() {
  const info = data.info as Section[]
  return (
    <>
      <ScrollArea type="scroll" offsetScrollbars w="150rem" pl="5rem">
        {info.map((section) => (
          <SectionContent key={section.id} section={section} />
        ))}

        <Container className={styles.section} mb="3rem">
          <Title size="3rem" mb="0.5rem">
            {'recent activity'}
          </Title>
          <Text size="1.5rem" lh="xs">
            {'I visited Google for the first time!'}
          </Text>
          <Spoiler maxHeight={300} showLabel="Show more" hideLabel="Hide">
            <AspectRatio ratio={16 / 9} maw={1000} mx="auto">
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7224536482462539776"
                frameBorder="0"
                scrolling="no"
                title="Embedded post"
                className={styles.embedPost}
              />
            </AspectRatio>
          </Spoiler>
        </Container>
      </ScrollArea>
    </>
  )
}

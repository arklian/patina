import { Container, ScrollArea } from '@mantine/core'
import styles from './Amanda.module.css'
import { LightDarkButton } from './LightDarkButton.tsx'
import { SectionContent } from './SectionContent.tsx'
import { Sidebar } from './Sidebar.tsx'
import { Section } from './Types.tsx'
import data from './Data.json'

export function MainPage() {
  const info = data.info as Section[]
  return (
    <>
      <Container
        className={styles.lightDark}
        mt="1rem"
      >
        <LightDarkButton />
      </Container>
      <Container
        size="responsive"
        p="5rem"
        pb="0"
        className={styles.mainPage}
      >
        <Sidebar />
        <ScrollArea
          className={styles.content}
          type="scroll"
          offsetScrollbars
        >
          {info.map((section) => (
            <SectionContent section={section} />
          ))}
        </ScrollArea>
      </Container>
    </>
  )
}

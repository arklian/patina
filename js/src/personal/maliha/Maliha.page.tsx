import {
  Text,
  ScrollArea,
  MantineProvider,
  Image,
  UnstyledButton,
} from '@mantine/core'
import { useScrollIntoView } from '@mantine/hooks'
import { theme } from './theme.ts'
import { Menu } from './ModalMenu.tsx'
import { Social } from './Social.tsx'
import { Fonts } from './Fonts.tsx'
import { Images } from './Images.tsx'
import { About } from './About.tsx'
import styles from './Maliha.module.css'

export function MalihaPage() {
  const { scrollIntoView, targetRef, scrollableRef } = useScrollIntoView<
    HTMLDivElement,
    HTMLDivElement
  >({ axis: 'x' })
  return (
    <MantineProvider theme={theme}>
      <div
        className={styles.body}
        ref={scrollableRef}
      >
        <Fonts />
        <ScrollArea
          type="always"
          w={10000}
          h={900}
        >
          <Images />
          <UnstyledButton
            pos="fixed"
            h={100}
            w={100}
            top={50}
            className={styles.icons}
            onClick={() => scrollIntoView()}
          >
            <Image
              h={130}
              w={130}
              pos="fixed"
              id={styles.home_icon}
              pl={20}
              src="https://i.pinimg.com/originals/d6/81/b4/d681b4fac2b113532ae1f6e5986afeef.png"
            />
          </UnstyledButton>
          <div
            className={styles.left}
            ref={targetRef}
          >
            <Social />
            <Menu />
          </div>
          <div className={styles.border} />
          <Text
            inherit
            component="span"
            className={styles.title}
            id={styles.introduction}
            style={{ whiteSpace: 'pre-line' }}
            variant="gradient"
            gradient={{
              from: '#c75252',
              to: 'rgb(160,103,174)',
              deg: 50,
            }}
            pos="absolute"
          >
            {"hey it's"}
          </Text>
          <Text
            inherit
            component="span"
            variant="gradient"
            pos="absolute"
            gradient={{
              from: '#c75252',
              to: 'rgb(160,103,174)',
              deg: 90,
            }}
            className={styles.title}
          >
            {'mali'}
          </Text>
          <div
            className={styles.border}
            id={styles.about_border}
          />
          <About />
          <iframe
            className={styles.playlist}
            title="playlist"
            src="https://open.spotify.com/embed/playlist/4mdLDndEW9wNur74omMsN4?utm_source=generator"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <div
            className={styles.border}
            id={styles.resume_border}
          />
        </ScrollArea>
      </div>
    </MantineProvider>
  )
}

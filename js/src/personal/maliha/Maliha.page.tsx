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
import { Spotify } from './Spotify'
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
          scrollbarSize={1}
        >
          <Images />
          <div className={styles.left}>
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
                className={styles.home_icon}
                pl={20}
                src="https://i.pinimg.com/originals/d6/81/b4/d681b4fac2b113532ae1f6e5986afeef.png"
              />
            </UnstyledButton>
            <div ref={targetRef}>
              <Social />
              <Menu />
            </div>
          </div>
          <Images />
          <div className={styles.border} />
          <Text
            inherit
            component="span"
            className={`${styles.title} ${styles.introduction}`}
            style={{ whiteSpace: 'pre-line' }}
            variant="gradient"
            gradient={{
              from: '#c75252',
              to: '#a067ae',
              deg: 90,
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
              to: '#a067ae',
              deg: 90,
            }}
            className={styles.title}
          >
            {'mali'}
          </Text>
          <About />
          <Spotify />
          <div className={`${styles.border} ${styles.resume_border}`} />
        </ScrollArea>
      </div>
    </MantineProvider>
  )
}

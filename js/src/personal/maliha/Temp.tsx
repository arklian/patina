import {
  Text,
  ScrollArea,
  MantineProvider,
  Image,
  UnstyledButton,
} from '@mantine/core'
import { theme } from './theme.ts'
import { Menu } from './ModalMenu.tsx'
import { useScrollIntoView } from '@mantine/hooks'
import { Social } from './Social.tsx'
import { Fonts } from './Fonts.tsx'
import { Images } from './Images.tsx'
import { About } from './About.tsx'
import { Resume } from './Resume.tsx'
import styles from './Maliha.module.css'

/** Temporary file for flex box adjustments */
export function MalihaPage() {
  const {
    scrollIntoView: scrollToHome,
    targetRef: homeRef,
    scrollableRef: scroll1,
  } = useScrollIntoView<HTMLDivElement, HTMLDivElement>({ axis: 'x' })
  const { scrollIntoView: scrollToAbout, targetRef: aboutRef } =
    useScrollIntoView<HTMLDivElement, HTMLDivElement>({ axis: 'x' })
  const { scrollIntoView: scrollToResume, targetRef: resumeRef } =
    useScrollIntoView<HTMLDivElement, HTMLDivElement>({ axis: 'x' })

  return (
    <MantineProvider theme={theme}>
      <div className={styles.body} ref={scroll1}>
        <Fonts />
        <ScrollArea type="always" w={10000} h={900} scrollbarSize={1}>
          <Images />
          <div className={styles.left}>
            <UnstyledButton
              pos="fixed"
              h={100}
              w={100}
              top={50}
              className={styles.icons}
              onClick={() => scrollToHome()}
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
            <div ref={homeRef}>
              {/*<Social />*/}
              <Menu
                aboutFunc={() => scrollToAbout()}
                resumeFunc={() => scrollToResume()}
              />
            </div>
          </div>
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
              to: '#a067ae',
              deg: 90,
            }}
            className={styles.title}
          >
            {'mali'}
          </Text>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={resumeRef}>
            <Resume />
          </div>
          <Resume />
        </ScrollArea>
      </div>
    </MantineProvider>
  )
}

// import { Menu } from './ModalMenu.tsx'
// import { Social } from './menu/Social.tsx'
// import { Fonts } from './assets/Fonts.tsx'
// import { Images } from './assets/Images.tsx'
// import { About } from './about/About.tsx'
// import { Spotify } from './assets/Spotify'
import { MantineProvider } from '@mantine/core'
import { Intro } from './intro/Intro'
import { theme, resolver } from './theme.ts'
import styles from './Maliha.module.css'

export function MalihaPage() {
  return (
    <MantineProvider
      theme={theme}
      cssVariablesResolver={resolver}
      forceColorScheme="dark"
    >
      <div className={styles.main}>
        <div className={styles.intro}>
          <Intro />
        </div>
      </div>
    </MantineProvider>
  )
}

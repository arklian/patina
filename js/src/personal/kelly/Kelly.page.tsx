import { Box, MantineProvider, Title } from '@mantine/core'
import styles from './Kelly.module.css'
import { theme } from './theme.ts'

export function KellyPage() {
  return (
    <MantineProvider theme={theme}>
      <div className={styles.body_wrap}>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Caslon+Text:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <div className={styles.body_load}></div>
        <image
          src={
            'https://i.pinimg.com/originals/20/cc/09/20cc094d436c7db16c3c59ebed8f3419.gif'
          }
        ></image>
        <div className={styles.nav}>
          <a href={'#about'}>
            <p className={styles.nav_item}>{'About'}</p>
          </a>
          <a>
            <p className={styles.nav_item}>{'Projects'}</p>
          </a>
          <a>
            <p className={styles.nav_item}>{'Contact'}</p>
          </a>
        </div>
        <div className={styles.body_container}>
          <Title className={styles.title}>{'KELLY LIN'}</Title>
          <p className={styles.designation}>
            {'Computer Science @ Hunter College City University of New York'}
          </p>
          <div className={styles.window_container}>
            <Box className={styles.window}></Box>
          </div>
        </div>
        <div
          id={'about'}
          className={styles.about}
        >
          <p className={styles.about_header}>{'✦ ABOUT ME '}</p>
          <p className={styles.about_text}>
            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ' +
              'in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
              'culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,' +
              ' totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia ' +
              'voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ' +
              'ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ' +
              'ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea ' +
              'voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'}
          </p>
        </div>
        <div
          id={'projects'}
          className={styles.projects}
        >
          <p className={styles.about_header}>{'✦ PROJECTS '}</p>
          <p className={styles.about_text}>
            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
              'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor ' +
              'in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in ' +
              'culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,' +
              ' totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia ' +
              'voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ' +
              'ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ' +
              'ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea ' +
              'voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'}
          </p>
        </div>
      </div>
    </MantineProvider>
  )
}

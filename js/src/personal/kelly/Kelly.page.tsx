import { MantineProvider, Title } from '@mantine/core'
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
        <div className={styles.nav}>
          <div id="app"></div>
          <a href={'#projects'}>
            <p className={styles.nav_item}>{'projects'}</p>
          </a>
          <a href={'#contact'}>
            <p className={styles.nav_item}>{'contact'}</p>
          </a>
        </div>
        <div
          id={'home'}
          className={styles.parallax}
        >
          <Title className={styles.title}>
            <span className={styles.kelly}>{'KELLY'}</span>
            <span> </span>
            <span className={styles.lin}>{'LIN'}</span>
          </Title>
          <div className={styles.background}></div>
          <div className={styles.bg_cloud}></div>
        </div>
        <pre className={styles.about_header}>
          {"hi, i'm kelly.\na SWE Intern and Designer."}
        </pre>
        <div className={styles.info_container}>
          <div className={styles.about}>
            {'Currently doing Computer Science and Media Studies \nat Hunter College CUNY.' +
              "I'm from NYC and like art, \ngames, comics, and food. My family is raising two chickens\n" +
              'named Mold and Pou'}
            <img
              className={styles.about_arrow}
              alt={'arrow'}
              src={'https://cdn-icons-png.freepik.com/512/64/64820.png'}
            />
            <img
              className={styles.about_pfp}
              alt={'chickens'}
              src={
                'https://cdn.discordapp.com/attachments/1254882106945962056/1260969527890542662/IMG_4769.jpg?ex=669140e3&is=668fef63&hm=9ade1290a7733488ea3709e9d4ccca8cab5d78f3d020192dbfa0077473cfe944&'
              }
            />
          </div>
        </div>
        <p className={styles.about_header}>{'my work '}</p>
        <div
          id={'projects'}
          className={styles.projects}
        ></div>
        <p className={styles.about_header}>{'contact me '}</p>
        <div
          id={'contact'}
          className={styles.contact}
        >
          <pre className={styles.contact}>
            {'Kxclly\nNew York City, NY, USA\nlinkelly150@gmail.com\n'}
          </pre>
          <div className={styles.icon_container}>
            <a href={'https://www.instagram.com/kerrydoesthings/'}>
              <img
                className={styles.icon}
                alt={'insta logo'}
                src={
                  'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png'
                }
              />
            </a>
            <a href={'https://www.linkedin.com/in/kxllylin/'}>
              <img
                className={styles.icon}
                alt={'linkedin logo'}
                src={
                  'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png'
                }
              />
            </a>
            <a href={'https://github.com/Kxlcl'}>
              <img
                className={styles.icon}
                alt={'github logo'}
                src={
                  'https://static-00.iconduck.com/assets.00/github-icon-2048x2048-qlv5m092.png'
                }
              />
            </a>
          </div>
        </div>
      </div>
    </MantineProvider>
  )
}

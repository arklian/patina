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
        <div className={styles.nav}>
          <div className={styles.body_load}>
            <img
              alt={'loading'}
              src={
                'https://t3.ftcdn.net/jpg/05/14/75/82/360_F_514758236_i8rnB85PVdEaK19yGaK0TpaYEYMyxOL5.jpg'
              }
            />
          </div>
          <a href={'#home'}>
            <p className={styles.nav_item}>{'Home'}</p>
          </a>
          <a href={'#about'}>
            <p className={styles.nav_item}>{'About'}</p>
          </a>
          <a href={'#projects'}>
            <p className={styles.nav_item}>{'Projects'}</p>
          </a>
          <a href={'#contact'}>
            <p className={styles.nav_item}>{'Contact'}</p>
          </a>
        </div>
        <div
          id={'home'}
          className={styles.body_container}
        >
          <Title className={styles.title}>
            <span className={styles.kelly}>{'KELLY'}</span>
            <span> </span>
            <span className={styles.lin}>{'LIN'}</span>
          </Title>
          <p className={styles.designation}>
            {'Software Engineer and Designer'}
          </p>
          <div className={styles.window_container}>
            <Box className={styles.window}></Box>
          </div>
        </div>
        <div
          className={styles.aboutpadding}
          id={'about'}
        ></div>
        <p className={styles.about_header}>{'✦ ABOUT ME '}</p>
        <div className={styles.about}>
          <div className={styles.about_item}></div>
          <div>
            <img
              className={styles.pfp_img}
              alt={'pfp'}
              src={
                'https://i.pinimg.com/736x/68/31/12/68311248ba2f6e0ba94ff6da62eac9f6.jpg'
              }
            />
            <pre className={styles.pfp_about}>
              {'I am a first generation Chinese American with a passion\nfor design and development' +
                ' in tech. I love all things art, \nscience, and music related.\n\n' +
                'My family is also raising two chickens named Mold and Pou.'}
            </pre>
          </div>
        </div>
        <p className={styles.about_header}>{'✦ PROJECTS '}</p>
        <div
          id={'projects'}
          className={styles.projects}
        ></div>
        <p className={styles.about_header}>{'✦ CONTACT '}</p>
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

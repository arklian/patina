import styles from './Footer.module.css'
import logoLi from '../asset/linkedin.png'
import logoGh from '../asset/github.png'
import logoIn from '../asset/ig_logo.webp'

export function MannyFooter() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.logocontainer}>
          <a
            href={'https://www.linkedin.com/in/manuel-reyes-jr-swe/'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            <img
              src={logoLi}
              alt={'linkedin'}
              className={styles.logo}
            />
          </a>

          <a
            href={'https://github.com/MReyes1241'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            <img
              src={logoGh}
              alt={'Github'}
              className={styles.logo}
            />
          </a>

          <a
            href={'https://www.instagram.com/born_reyes/?hl=en'}
            target={'_blank'}
            rel={'noopener noreferrer'}
          >
            <img
              src={logoIn}
              alt={'Instagram'}
              className={styles.logo}
            />
          </a>
        </div>
        <text className={styles.footertext}>
          {'© 2024 Manny. All rights reserved.'}
        </text>
      </footer>
    </>
  )
}

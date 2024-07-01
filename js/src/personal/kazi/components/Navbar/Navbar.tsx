import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <a
          href="#hero"
          className={styles.a_links}
        >
          <span className={styles.navbar_links}>{'Kazi Mansha'}</span>
        </a>
        <a
          href="#projects"
          className={styles.a_links}
        >
          <span className={styles.navbar_links}>{'Projects'}</span>
        </a>
        <a
          href="#about"
          className={styles.a_links}
        >
          <span className={styles.navbar_links}>{'About'}</span>
        </a>
        <a
          href="#contact"
          className={styles.a_links}
        >
          <span className={styles.navbar_links}>{'Contact'}</span>
        </a>
        <div className={styles.links}>
          <a
            href="https://www.instagram.com/kazi_mansha/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/kazimansha/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn size={30} />
          </a>
          <a
            href="https://github.com/KaziMansha"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  )
}

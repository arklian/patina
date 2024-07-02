import {
  FaUserAlt,
  FaBriefcase,
  FaInfoCircle,
  FaPhone,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa'
import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <a
          href="#hero"
          className={styles.iconLink}
        >
          <FaUserAlt
            size={30}
            className={styles.icon}
          />
          <span className={styles.iconText}>{'Profile'}</span>
        </a>
        <a
          href="#about"
          className={styles.iconLink}
        >
          <FaInfoCircle
            size={30}
            className={styles.icon}
          />
          <span className={styles.iconText}>{'About'}</span>
        </a>
        <a
          href="#projects"
          className={styles.iconLink}
        >
          <FaBriefcase
            size={30}
            className={styles.icon}
          />
          <span className={styles.iconText}>{'Projects'}</span>
        </a>
        <a
          href="#contact"
          className={styles.iconLink}
        >
          <FaPhone
            size={30}
            className={styles.icon}
          />
          <span className={styles.iconText}>{'Contact'}</span>
        </a>
        <div className={styles.links}>
          <a
            href="https://www.instagram.com/kazi_mansha/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram
              size={30}
              color={'black'}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kazimansha/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn
              size={30}
              color={'black'}
            />
          </a>
          <a
            href="https://github.com/KaziMansha"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub
              size={30}
              color={'black'}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

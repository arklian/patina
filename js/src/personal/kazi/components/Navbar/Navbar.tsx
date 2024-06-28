import React from 'react'
import { Title, Text } from '@mantine/core'
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import styles from './Navbar.module.css'

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <a href="#hero">
          <span>{'Kazi Mansha'}</span>
        </a>
        <a href="#projects">
          <span>{'Projects'}</span>
        </a>
        <a href="#about">
          <span>{'About'}</span>
        </a>
        <a href="#contact">
          <span>{'Contact'}</span>
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

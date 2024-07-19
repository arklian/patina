import { ActionIcon, Text } from '@mantine/core'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'
import patinaLogo from '../../patinasquare.svg'

/**
 * Footer component to display patina network logo, social media links
 */
export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.logoTextContainer}>
        <img
          src={patinaLogo}
          alt="Patina Network Logo"
          className={styles.logo}
        />
        <div className={styles.textContainer}>
          <Text className={styles.patina}>{'patina'}</Text>
          <Text className={styles.patina}>{'network'}</Text>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <ActionIcon component="a" href="mailto:hi@patinanetwork.org" size="lg">
          <FaEnvelope size={24} />
        </ActionIcon>
        <ActionIcon
          component="a"
          href="https://www.linkedin.com/company/patinanetwork/"
          target="_blank"
          size="lg"
        >
          <FaLinkedin size={24} />
        </ActionIcon>
      </div>
    </div>
  )
}

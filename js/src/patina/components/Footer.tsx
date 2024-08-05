import { ActionIcon, UnstyledButton } from '@mantine/core'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'
import { PatinaBadge } from '@/patina/components/PatinaBadge.tsx'

/**
 * Footer component to display patina network logo, social media links
 */
export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContents}>
        <div className={styles.logoTextContainer}>
          <UnstyledButton component={'a'} href={'/'}>
            <PatinaBadge />
          </UnstyledButton>
        </div>
        <div className={styles.footerLinks}>
          <ActionIcon
            className={styles.linkIcon}
            component="a"
            href="mailto:hi@patinanetwork.org"
            size="lg"
            color="var(--mantine-color-dark-6)"
          >
            <FaEnvelope size={24} />
          </ActionIcon>
          <ActionIcon
            className={styles.linkIcon}
            color="var(--mantine-color-dark-6)"
            component="a"
            href="https://www.linkedin.com/company/patinanetwork/"
            target="_blank"
            size="lg"
          >
            <FaLinkedin size={24} />
          </ActionIcon>
        </div>
      </div>
    </div>
  )
}

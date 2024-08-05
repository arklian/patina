import { ActionIcon, UnstyledButton } from '@mantine/core'
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { ReactNode } from 'react'
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
          <FooterIconLink href={'mailto:hi@patinanetwork.org'}>
            <FaEnvelope size={24} />
          </FooterIconLink>
          <FooterIconLink
            href={'https://www.linkedin.com/company/patinanetwork'}
          >
            <FaLinkedin size={24} />
          </FooterIconLink>
          <FooterIconLink href={'https://www.instagram.com/patinanetwork'}>
            <FaInstagram size={24} />
          </FooterIconLink>
        </div>
      </div>
    </div>
  )
}

function FooterIconLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <ActionIcon
      component="a"
      href={href}
      target="_blank"
      color={'dark.0'}
      variant="transparent"
      size="lg"
    >
      {children}
    </ActionIcon>
  )
}

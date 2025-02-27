import { ActionIcon, Text, UnstyledButton } from '@mantine/core'
import { ReactNode } from 'react'
import { FaEnvelope, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { PatinaBadge } from '@/patina/components/PatinaBadge.tsx'
import styles from './Footer.module.css'

/**
 * Footer component to display patina network logo, social media links
 */
export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContents}>
        <div className={styles.logoTextContainer}>
          <UnstyledButton component={Link} to={'/'}>
            <PatinaBadge />
          </UnstyledButton>
        </div>
        <Text px={30} fs="italic">
          {'Patina Network is a 501(c)(3) non-profit organization.'}
        </Text>
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

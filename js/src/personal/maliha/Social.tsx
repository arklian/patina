import { Anchor, Stack } from '@mantine/core'
import { CgMail } from 'react-icons/cg'
import { CiLinkedin } from 'react-icons/ci'
import { FaInstagram, FaGithub } from 'react-icons/fa'
import { useHover } from '@mantine/hooks'
import styles from './Maliha.module.css'

const iconMap = [
  {
    icon: FaInstagram,
    size: '4.5em',
    href: 'https://www.instagram.com/birb.erry/',
  },
  {
    icon: FaGithub,
    size: '4.75em',
    href: 'https://github.com/MalihaT111',
  },
  {
    icon: CiLinkedin,
    size: '5em',
    href: 'https://www.linkedin.com/in/maliha-tasnim-81864b178/',
  },
  {
    icon: CgMail,
    size: '5em',
    href: 'mailto:ayesiddika@gmail.com',
  },
]

export function Social() {
  return (
    <Stack
      h={100}
      align="left"
      justify="center"
      gap={75}
      pos="absolute"
      className={styles.icons}
    >
      {iconMap.map(({ icon: Icon, size, href }) => (
        <SocialIcon
          Icon={Icon}
          size={size}
          href={href}
        />
      ))}
    </Stack>
  )
}
function SocialIcon({ Icon, size, href }: { Icon: any; size: any; href: any }) {
  const { hovered, ref } = useHover()
  const iconColor = hovered ? '#a63b6a' : '#cb5c5c'
  return (
    <Anchor
      href={href}
      target="_blank"
    >
      <div ref={ref}>
        <Icon
          size={size}
          color={iconColor}
        />
      </div>
    </Anchor>
  )
}

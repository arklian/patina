import { Anchor, Stack } from '@mantine/core'
import { CgMail } from 'react-icons/cg'
import { CiLinkedin } from 'react-icons/ci'
import { FaInstagram, FaGithubSquare } from 'react-icons/fa'
import { useHover } from '@mantine/hooks'
import styles from './Left.module.css'

/* Social Media Icons */
const iconMap = [
  {
    icon: FaInstagram,
    size: '3.5em',
    href: 'https://www.instagram.com/birb.erry/',
    outlineColor: '#000000',
    outlineWidth: '.5em',
  },
  {
    icon: FaGithubSquare,
    size: '3.5em',
    href: 'https://github.com/MalihaT111',
    outlineColor: '#000000',
    outlineWidth: '.4em',
  },
  {
    icon: CgMail,
    size: '4em',
    href: 'mailto:ayesiddika@gmail.com',
    outlineColor: '#000000',
    outlineWidth: '0.01em',
  },
  {
    icon: CiLinkedin,
    size: '4em',
    href: 'https://www.linkedin.com/in/maliha-tasnim-81864b178/',
    outlineColor: '#000000',
    outlineWidth: '0.01em',
  },
]

export function Social() {
  return (
    <div>
      <Stack
        h={200}
        align="left"
        justify="center"
        gap={55}
        pos="fixed"
        className={styles.icons}
        pr={100}
      >
        {iconMap.map(
          ({ icon: Icon, size, href, outlineColor, outlineWidth }, index) => (
            <SocialIcon
              key={index}
              Icon={Icon}
              size={size}
              href={href}
              outlineColor={outlineColor}
              outlineWidth={outlineWidth}
            />
          ),
        )}
      </Stack>
    </div>
  )
}

function SocialIcon({
  Icon,
  size,
  href,
  outlineColor,
  outlineWidth,
}: {
  Icon: any
  size: any
  href: any
  outlineColor: any
  outlineWidth: any
}) {
  const { hovered, ref } = useHover()
  const iconColor = hovered ? '#c02366' : '#d93939'
  return (
    <Anchor
      href={href}
      target="_blank"
    >
      <div ref={ref}>
        <Icon
          size={size}
          color={iconColor}
          pos="absolute"
          style={{
            stroke: outlineColor,
            strokeWidth: outlineWidth,
            fill: iconColor,
          }}
        />
      </div>
    </Anchor>
  )
}

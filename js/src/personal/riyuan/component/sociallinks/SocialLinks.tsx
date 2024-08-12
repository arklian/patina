import { useState } from 'react'
import { Group, Text } from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandBilibili,
  IconBrandQq,
  IconMail,
  IconBrandTwitter,
} from '@tabler/icons-react'
import socialLinks from '@/personal/riyuan/assets/data/socialLinks.json'
import styles from './SocialLinks.module.css'

interface SocialLink {
  name: string
  url: string
  icon: string
  tip: string
}

// Map Font Awesome icon names to icon components
const iconMap: { [key: string]: any } = {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandBilibili,
  IconBrandQq,
  IconMail,
  IconBrandTwitter,
}

export function SocialLinks() {
  const [socialTip, setSocialTip] = useState<string>(
    'You can contact me through here!',
  )

  return (
    <div className={styles.social}>
      <Group className={styles.link}>
        {socialLinks.map((item: SocialLink) => {
          const IconComponent = iconMap[item.icon]
          return (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setSocialTip(item.tip)}
              onMouseLeave={() => setSocialTip('You can contact me here!')}
            >
              {IconComponent && (
                <IconComponent size={24} className={styles.icon} />
              )}{' '}
              {/* Adjust size as needed */}
            </a>
          )
        })}
      </Group>
      <Text className={styles.tip}>{socialTip}</Text>
    </div>
  )
}

import { Affix, ActionIcon, Text } from '@mantine/core'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
} from '@tabler/icons-react'
import styles from './SideSection.module.css'

export function LeftStickySection() {
  return (
    <>
      <Affix position={{ bottom: 0, left: 30 }}>
        <div className={styles.iconSection}>
          <ActionIcon
            className={styles.icons}
            component={'a'}
            href={'https://github.com/Jhwu3'}
            variant={'transparent'}
          >
            <IconBrandGithub size={32} stroke={1.25} />
          </ActionIcon>
          <ActionIcon
            className={styles.icons}
            variant={'transparent'}
            component={'a'}
            href={'https://www.linkedin.com/in/jionghao-wu/'}
          >
            <IconBrandLinkedin size={32} stroke={1.25} />
          </ActionIcon>
          <ActionIcon
            className={styles.icons}
            variant={'transparent'}
            component={'a'}
            href={'https://www.instagram.com/jionghaow/'}
          >
            <IconBrandInstagram size={32} stroke={1.25} />
          </ActionIcon>
          <div className={styles.line}></div>
        </div>
      </Affix>

      <Affix position={{ bottom: 0, right: 30 }}>
        <div className={styles.verticalText}>
          <Text
            className={styles.txt}
            component={'a'}
            href="mailto:Jhwu03@gmail.com"
          >
            {'Jhwu03@gmail.com'}
          </Text>
          <div className={styles.line2}></div>
        </div>
      </Affix>
    </>
  )
}

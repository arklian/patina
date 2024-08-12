import { Flex } from '@mantine/core'
import { Message } from '@/personal/riyuan/component/message/message.tsx'
import { SocialLinks } from '@/personal/riyuan/component/sociallinks/SocialLinks.tsx'
import styles from '@/personal/riyuan/pages/home/Home.module.css'
import { Func } from '@/personal/riyuan/component/func/funct.tsx'

export function HomePage() {
  return (
    <Flex direction={'row'}>
      <div className={styles.left}>
        <Flex direction={'column'}>
          <Message />
          <SocialLinks />
        </Flex>
      </div>
      <div className={styles.right}>
        <Flex direction={'column'}>
          <Func />
        </Flex>
      </div>
    </Flex>
  )
}

import { Title, Space, Text } from '@mantine/core'
import styles from './Mission.module.css'
import { ContentPage } from '@/patina/components/ContentPage.tsx'

export function MissionPage() {
  return (
    <ContentPage>
      <Title className={styles.title}>{'Our Vision'}</Title>
      <div>
        <Text size={'xl'}>
          {'Our vision is to see AANHPI women leading in every field, from politics and business to arts and sciences,' +
            ' contributing to a more equitable, inclusive, and vibrant world.'}
        </Text>
      </div>
      <Space h="md" />
      <Title className={styles.title}>{'Our Mission'}</Title>
      <div>
        <Text size={'xl'}>
          {'At Patina Network, our mission is to celebrate, empower, educate on the race, culture, and ethnicity of' +
            ' AANHPI women, and champion allyship within the community.'}
        </Text>
      </div>

      <Space h="md" />
      <Title className={styles.title}>{'Why “Patina Network”?'}</Title>
      <div>
        <Text size={'xl'}>
          {'A patina is the result of impressions over time. It represents how one can be shaped and enriched by' +
            ' their unique circumstances, collectively creating a pattern that is distinctive, rich, and celebrated. '}
        </Text>
      </div>

      <Space h="md" />
      <Title className={styles.title}>{'How it started'}</Title>
      <div>
        <Text size={'xl'}>
          {'After meeting serendipitously at a networking event, our founders bonded over their shared experience' +
            ' of struggling with lack of mentorship and resources during critical years of their education.'}
          <br />

          {'They decided to do something about it! We are now unified under the name Patina Network, and we strive' +
            ' to empower future generations of students, foster a safe safe with peers, and engage elders who' +
            ' overcame similar challenges. '}
        </Text>
      </div>
      <Space h="md" />
    </ContentPage>
  )
}

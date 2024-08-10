import { Title, Space, Text, Image } from '@mantine/core'
import { imageUrls } from '@/patina/assets/images.ts'
import styles from './Mission.module.css'
import { ContentPage } from '@/patina/components/ContentPage.tsx'

export function MissionPage() {
  return (
    <ContentPage>
      <div>
        <Image
          src={imageUrls.missionBannerSmile.src}
          alt={imageUrls.missionBannerSmile.alt}
          height={'auto'}
          width={'100%'}
        />
      </div>

      <Space h={'lg'} />

      <div className={styles.statementContainer}>
        <div>
          <Title order={4} className={styles.title}>
            {'Our Vision'}
          </Title>
          <div>
            <Text>
              {'Our vision is to see AANHPI women leading in every field, from politics and business to arts and sciences,' +
                ' contributing to a more equitable, inclusive, and vibrant world.'}
            </Text>
          </div>
        </div>
        <Space w="xl" />
        <div>
          <Title order={4} className={styles.title}>
            {'Our Mission'}
          </Title>
          <div>
            <Text>
              {'At Patina Network, our mission is to celebrate, empower, educate on the race, culture, and ethnicity of' +
                ' AANHPI women, and champion allyship within the community.'}
            </Text>
          </div>
        </div>
      </div>

      <Space h="md" />

      <div>
        <Title className={styles.title}>{'Why “Patina Network”?'}</Title>
        <div>
          <Text size={'xl'}>
            {'A patina is the result of impressions over time. It represents how one can be shaped and enriched by' +
              ' their unique circumstances, collectively creating a pattern that is distinctive, rich, and celebrated. '}
          </Text>
        </div>

        <div>
          <Image
            src={imageUrls.missionKnife.src}
            alt={imageUrls.missionKnife.alt}
          />
        </div>
      </div>

      <Space h="md" />

      <div>
        <Title className={styles.title}>{'Our story'}</Title>
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
        <div>
          <Image
            src={imageUrls.missionInterns24.src}
            alt={imageUrls.missionInterns24.alt}
          />
        </div>
      </div>
    </ContentPage>
  )
}

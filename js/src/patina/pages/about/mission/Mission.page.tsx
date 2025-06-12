import { Image, Space, Text, Title } from '@mantine/core'
import { imageUrls } from '@/patina/assets/images.ts'
import styles from './Mission.module.css'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { PillarSection } from '@/patina/pages/about/mission/PillarSection.tsx'

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
            {'Our vision'}
          </Title>
          <div>
            <Text>
              {
                'To help build a world where anyone can lead with confidence - uplifting their community, advancing their career, and shaping their own path..'
              }
            </Text>
          </div>
        </div>
        <Space w="xl" />
        <div>
          <Title order={4} className={styles.title}>
            {'Our mission'}
          </Title>
          <div>
            <Text>
              {'At Patina Network, our mission is to celebrate, empower, educate on the race, culture, and ethnicity of' +
                ' AANHPI women, and champion allyship within the community.'}
            </Text>
          </div>
        </div>
      </div>

      <Space h={'xl'} />
      <PillarSection />

      <Space h="xl" />

      <div className={styles.nameContainer}>
        <div>
          <Title order={4} className={styles.title}>
            {'Why “Patina Network”?'}
          </Title>
          <Space h={'xs'} />
          <div>
            <Text>
              {'When co-founder Andrea was growing up, a distinct memory of her grandfather ' +
                'was that he would fill his favorite coffee cup to the exact spot every morning ' +
                'in order to create a gradual mark that was uniquely his.'}
              <br />
              <br />
              {'A patina is the result of impressions over time. It represents how one can be shaped and enriched by their' +
                ' unique circumstances, collectively creating a pattern that is distinctive, rich, and cherished.'}
            </Text>
          </div>
        </div>

        <Space w="xl" />

        <div className={styles.nameKnifeContainer}>
          <Image
            src={imageUrls.missionKnife.src}
            alt={imageUrls.missionKnife.alt}
          />
        </div>
      </div>

      <div className={styles.backStoryContainer}>
        <div className={styles.Ig24PatContainer}>
          <Image
            src={imageUrls.missionInterns24.src}
            alt={imageUrls.missionInterns24.alt}
          />
        </div>
        <div className={styles.backStoryText}>
          <Title order={4} className={styles.title}>
            {'Our story'}
          </Title>
          <div>
            <Text>
              {'Our founders bonded over ' +
                'their shared struggles of lack of mentorship and resources ' +
                'during critical years of their education. They realized a need for stronger representation and a deeper understanding of the culture within AANHPI spheres.' +
                ' In the summer of 2024, we got together and started our own very first internship program. We look forward to expanding our' +
                ' support for AANPHI students in the near future.'}
            </Text>
          </div>
        </div>
      </div>
    </ContentPage>
  )
}

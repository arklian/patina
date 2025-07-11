import {
  Anchor,
  Box,
  Button,
  Center,
  Flex,
  List,
  ListItem,
  Space,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { ReactNode } from 'react'
import { ContentPage } from '@/patina/components/ContentPage.tsx'
import { Hero } from '@/patina/components/Hero'
import { imageUrls } from '@/patina/assets/images.ts'
import styles from './Scholarship.module.css'
// import { About } from '@/patina/pages/scholarship/about/About.tsx'
import { ProgramDetails } from '@/patina/pages/scholarship/program/ProgramDetails.tsx'
import { TwoCol } from '@/patina/components/TwoCol.tsx'
import twoColStyles from '@/patina/components/TwoCol.module.css'

export function ScholarshipPage() {
  const message = (
    <Text className={styles.description}>
      {
        'The Patina Network Community Scholarship Program aims to empower and support Asian American, Native Hawaiian, and Pacific Islander (AANHPI) women and allies. We hope to help foster education opportunities by providing this small boost of financial assistance to under-resourced New York State students who demonstrate academic potential, community engagement, and financial need. '
      }
      <p />
      <Text fw={700} size={'xl'}>
        {'Applications are open June 9 - August 11! '}
      </Text>
      <Text pl={24} size={'lg'}>
        {'Total Awards: 2'}
      </Text>
      <Text pl={24} size={'lg'}>
        {'Amount: $1,000 per recipient'}
      </Text>
    </Text>
  )
  return (
    <ContentPage>
      <Hero
        title="Patina Network Community Scholarship"
        details={message}
        img={imageUrls.scholarshipHero.src}
        alt={imageUrls.scholarshipHero.alt}
        buttonLink="https://docs.google.com/forms/d/e/1FAIpQLSebmBkODUg-FePMCvAO-iH7iItH1ruUFN1Whc13TrIkXRlbnQ/viewform"
        buttonText="Application Link"
        buttonColor={'var(--mantine-color-patina-green-light)'}
      />
      {/*<About />*/}
      <ProgramDetails />
      <Space h={64} />
      {/*<Criteria />*/}
      <TwoCol left={<HowToApply />} right={<EvaluationMetrics />}></TwoCol>
      {/*<Application />*/}
      <Space h={32} />
      <ContactUs />
      <Space h={32} />
      <ApplyButton />
      <Space h={32} />
    </ContentPage>
  )
}

function HowToApply() {
  return (
    <Stack className={twoColStyles.equalCols}>
      <Center>
        <Title order={3}>{'Application Requirements'}</Title>
      </Center>
      <Box>
        <List listStyleType={'none'} spacing="xs" size={'lg'}>
          <TitledBullet
            subtitle={'Personal Statement'}
            msg={
              <>
                {
                  'Submit an essay addressing one or both of the following (500 word limit total):'
                }
                <List withPadding>
                  <ListItem icon={'-'}>
                    {
                      'Please elaborate on how your financial circumstances and/or identity has impacted you, your values, and how you want to positively impact our target community?'
                    }
                  </ListItem>
                  <ListItem icon={'-'}>
                    {
                      'How have you demonstrated your commitment to advocacy, leadership, or community service initiatives that support AANHPI women?'
                    }
                  </ListItem>
                </List>
              </>
            }
          />
          <TitledBullet
            subtitle={'Financial Need Statement'}
            msg={
              'Please provide your FAFSA-provided SAI number. Optional written statement expressing financial circumstances is also welcome (150 word limit). '
            }
          />
          <TitledBullet
            subtitle={'Letter of Recommendation'}
            msg={
              'Academic or Community Recommendation: A letter from a teacher, mentor, or community leader who can speak to the applicant’s dedication to advocacy and leadership (250 word limit).'
            }
          />
          <TitledBullet
            subtitle={'Unofficial or Official Transcript'}
            msg={''}
          />
        </List>
      </Box>
    </Stack>
  )
}

function TitledBullet({
  subtitle,
  msg,
}: {
  subtitle: string
  msg: string | ReactNode
}) {
  const theme = useMantineTheme()

  return (
    <>
      <List.Item
        styles={{
          itemWrapper: {
            alignItems: 'flex-start',
          },
        }}
      >
        <Text c={theme.other.patinaGreenLight}>
          {subtitle + (msg ? ': ' : '')}
          <Text span c={'dark.0'}>
            {msg}
          </Text>
        </Text>
      </List.Item>
    </>
  )
}

function EvaluationMetrics() {
  return (
    <Stack className={twoColStyles.equalCols}>
      <Center>
        <Title order={3}>{'Evaluation Metrics'}</Title>
      </Center>
      <Text>
        {
          'To ensure equity, the selection committee will assess applications holistically, considering applicants’ personal experiences, impact, and financial need. The selection criteria include:'
        }
      </Text>
      <Box>
        <List pr={32} spacing="xs" size="sm">
          <TitledBullet
            subtitle={'Financial Need (40%)'}
            msg={
              'Evaluated through a self-reported financial statement and FAFSA documentation.'
            }
          />
          <TitledBullet
            subtitle={'Scholastic Achievement (20%)'}
            msg={'Based on GPA and academic performance.'}
          />
          <TitledBullet
            subtitle={'Personal Statement (20%)'}
            msg={'Evaluation of clarity, impact, and commitment to advocacy.'}
          />
          <TitledBullet
            subtitle={'Recommendation Letter (10%) '}
            msg={'Strength and relevance of recommendation letters.'}
          />
          <TitledBullet
            subtitle={'Extracurricular Activities (10%)'}
            msg={'Depth of community engagement and leadership.'}
          />
          <TitledBullet
            subtitle={'Extenuating Circumstances (+5%)'}
            msg={
              'Potential additional considerations may be made for extraordinary hardships or overcoming significant challenges..'
            }
          />
        </List>
      </Box>
    </Stack>
  )
}

function ContactUs() {
  return (
    <Flex>
      <Text size={'xl'}>
        {'Questions? Email '}
        <Anchor href={'mailto:hi@patinanetwork.org'}>
          {'hi@patinanetwork.org'}
        </Anchor>
        {' or join our Discord server and introduce yourself!'}
      </Text>
    </Flex>
  )
}

function ApplyButton() {
  return (
    <Center>
      <Button
        component="a"
        className={styles.appButton}
        variant="filled"
        color="var(--mantine-color-patina-green-light)"
        c={'black'}
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSebmBkODUg-FePMCvAO-iH7iItH1ruUFN1Whc13TrIkXRlbnQ/viewform"
      >
        <Text className={styles.appButtonText} size="20">
          {'Apply Here!'}
        </Text>
      </Button>
    </Center>
  )
}

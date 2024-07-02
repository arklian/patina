import { Image, Paper, Text, Title } from '@mantine/core'
import styles from './Work.module.css'

export function Projects() {
  return (
    <Paper
      className={styles.project}
      withBorder
      radius={'md'}
      shadow={'lg'}
    >
      <div className={styles.projectContent}>
        <Title
          size={'25px'}
          mb={'sm'}
        >
          {'Experience 1'}
        </Title>
        <Text>
          {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
            'Duis eget tortor eu nunc faucibus sodales nec et diam. ' +
            'Nulla consectetur semper maximus. Etiam convallis vehicula turpis ' +
            'et ornare. Morbi vel volutpat ex. Quisque venenatis libero a purus ' +
            'finibus convallis. Mauris pharetra tortor nec mi blandit faucibus.'}
        </Text>
      </div>
      <Image
        m={'20px'}
        pr={'xl'}
        radius={'10'}
        src={null}
        h={200}
        w={300}
        // flex={0.6}
        // w={120}
        fallbackSrc="https://placehold.co/1500x1000?text=Placeholder"
      />
    </Paper>
  )
}

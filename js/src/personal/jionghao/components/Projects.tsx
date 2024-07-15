import { Image, Paper, Text, Title, Badge, Group } from '@mantine/core'
import styles from './Work.module.css'

export function Projects() {
  return (
    <a className={styles.clickable} href={'http://google.com'}>
      <Paper className={styles.project} withBorder radius={'lg'} shadow={'md'}>
        <div className={styles.projectContent}>
          <Title className={styles.projectTitle} size={'25px'} mb={'sm'}>
            {'Project 1'}
          </Title>
          <Text>
            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
              'Duis eget tortor eu nunc faucibus sodales nec et diam. ' +
              'Nulla consectetur semper maximus. Etiam convallis vehicula turpis ' +
              'et ornare. Morbi vel volutpat ex. Quisque venenatis libero a purus '}
          </Text>
          <Group mt={'xs'}>
            <Badge
              radius={'md'}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            >
              {'C++'}
            </Badge>
            <Badge
              radius={'md'}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            >
              {'C++'}
            </Badge>
            <Badge
              radius={'md'}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            >
              {'C++'}
            </Badge>
            <Badge
              radius={'md'}
              variant="gradient"
              gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            >
              {'C++'}
            </Badge>
          </Group>
        </div>
        <div className={styles.projectImage}>
          <Image
            m={'35px'}
            mr={'35px'}
            radius={'10'}
            src={null}
            h={150}
            w={225}
            fallbackSrc="https://placehold.co/1500x1000?text=Placeholder"
          />
        </div>
      </Paper>
    </a>
  )
}

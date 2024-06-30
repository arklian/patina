import { Text, Anchor, List } from '@mantine/core'
import styles from './Maliha.module.css'

export function About() {
  return (
    <>
      <Anchor
        href="https://youtu.be/VgoE837TskI?si=o8p281ughP0aUxmM"
        target="_blank"
      >
        <Text
          inherit
          component="span"
          className={styles.title}
          id={styles.about_title}
          variant="gradient"
          gradient={{
            from: '#dc1d1d',
            to: 'rgb(151,92,164)',
            deg: 50,
          }}
          pos="absolute"
          pl={1440}
        >
          {'about me'}
        </Text>
      </Anchor>
      <Text
        inherit
        component="span"
        className={styles.title}
        id={styles.about_info}
        variant="gradient"
        gradient={{
          from: '#dc1d1d',
          to: 'rgb(151,92,164)',
          deg: 50,
        }}
        pos="absolute"
        pl={2000}
      >
        {'cs & math @ hunter | class of 2026'}
      </Text>
      <Text
        inherit
        component="span"
        className={styles.title}
        id={styles.about_info}
        variant="gradient"
        gradient={{
          from: '#dc1d1d',
          to: 'rgb(151,92,164)',
          deg: 50,
        }}
        pos="absolute"
        pl={2570}
        top={260}
      >
        {'i have birds'}
      </Text>
      <Text
        inherit
        component="span"
        className={styles.title}
        id={styles.about_info}
        variant="gradient"
        gradient={{
          from: '#dc1d1d',
          to: 'rgb(151,92,164)',
          deg: 50,
        }}
        pos="absolute"
        pl={2005}
        top={450}
      >
        {'i draw (rarely)'}
      </Text>
      <Text
        inherit
        component="span"
        className={styles.title}
        id={styles.about_info}
        variant="gradient"
        gradient={{
          from: '#dc1d1d',
          to: 'rgb(151,92,164)',
          deg: 50,
        }}
        pos="absolute"
        pl={2900}
        top={620}
      >
        {'i bike in central park'}
      </Text>
      <Text
        inherit
        component="span"
        className={styles.title}
        id={styles.about_info}
        variant="gradient"
        gradient={{
          from: '#dc1d1d',
          to: 'rgb(151,92,164)',
          deg: 50,
        }}
        pos="absolute"
        pl={2300}
        top={430}
      >
        {'currently watching: '}
        <List
          icon=" "
          id={styles.about_info}
        >
          <List.Item>{'bridgerton'}</List.Item>
          <List.Item>{'the boys'} </List.Item>
          <List.Item>{'queen charlotte'}</List.Item>
        </List>
      </Text>
      <Text
        inherit
        component="span"
        className={styles.title}
        id={styles.about_info}
        variant="gradient"
        gradient={{
          from: '#dc1d1d',
          to: 'rgb(151,92,164)',
          deg: 50,
        }}
        pos="absolute"
        pl={2600}
        top={380}
      >
        {'currently playing:'}
        <List
          icon=" "
          id={styles.about_info}
        >
          <List.Item>{'minecraft'}</List.Item>
          <List.Item>{'genshin impact'} </List.Item>
          <List.Item>{'kindergarten'}</List.Item>
        </List>
      </Text>
    </>
  )
}

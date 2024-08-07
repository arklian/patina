import { Text, Anchor, List } from '@mantine/core'
import { Spotify } from './Spotify'
import styles from './About.module.css'
import main_class from './Maliha.module.css'

/** About page component*/
export function About() {
  return (
    <>
      <div className={`${main_class.border} ${styles.about_border}`} />
      <Anchor
        href="https://youtu.be/VgoE837TskI?si=o8p281ughP0aUxmM"
        target="_blank"
        underline="never"
        className={styles.about_anchor}
      >
        <Text
          inherit
          component="span"
          className={`${main_class.title} ${styles.about_title}`}
          variant="gradient"
          gradient={{
            from: '#dc1d1d',
            to: '#975ca4',
            deg: 50,
          }}
          style={{ display: 'inline', lineHeight: '1' }}
        >
          {'about me'}
        </Text>
      </Anchor>
      <Spotify />
      <Text
        inherit
        component="span"
        className={`${main_class.title} ${styles.about_info}`}
        variant="gradient"
        gradient={{
          from: '#dc1d1d',
          to: '#975ca4',
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
        className={`${main_class.title} ${styles.about_info}`}
        variant="gradient"
        gradient={{
          from: '#dc1d1d',
          to: '#975ca4',
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
        className={`${main_class.title} ${styles.about_info}`}
        variant="gradient"
        gradient={{
          from: '#dc1d1d',
          to: '#975ca4',
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
        className={`${main_class.title} ${styles.about_info}`}
        variant="gradient"
        gradient={{
          from: '#dc1d1d',
          to: '#975ca4',
          deg: 50,
        }}
        pos="absolute"
        pl={2900}
        top={620}
      >
        {'i like biking'}
      </Text>
      <Text
        inherit
        component="span"
        className={`${main_class.title} ${styles.about_info}`}
        variant="gradient"
        gradient={{
          from: '#dc1d1d',
          to: '#975ca4',
          deg: 50,
        }}
        pos="absolute"
        pl={2300}
        top={430}
      >
        {'currently watching: '}
        <List icon=" " className={`${main_class.title} ${styles.about_info}`}>
          <List.Item>{'bridgerton'}</List.Item>
          <List.Item>{'the boys'} </List.Item>
          <List.Item>{'queen charlotte'}</List.Item>
        </List>
      </Text>
      <Text
        inherit
        component="span"
        className={`${main_class.title} ${styles.about_info}`}
        variant="gradient"
        gradient={{
          from: '#dc1d1d',
          to: '#975ca4',
          deg: 50,
        }}
        pos="absolute"
        pl={2600}
        top={380}
      >
        {'currently playing:'}
        <List icon=" " className={styles.about_info}>
          <List.Item font-weight={550}>{'minecraft'}</List.Item>
          <List.Item>{'genshin impact'} </List.Item>
          <List.Item>{'kindergarten'}</List.Item>
        </List>
      </Text>
    </>
  )
}

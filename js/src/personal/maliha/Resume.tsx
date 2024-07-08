import { Text, Anchor, List } from '@mantine/core'
import pdf from './Maliha_Tasnim_Resume.pdf'
import styles from './Resume.module.css'
import main_class from './Maliha.module.css'
/* Resume Component */
export function Resume() {
  return (
    <>
      <div className={`${main_class.border} ${styles.resume_border}`} />
      <Anchor
        href={pdf}
        target="_blank"
        download="Maliha_Tasnim_Resume.pdf"
        underline="never"
        style={{
          position: 'absolute',
          left: 3240,
          top: 300,
          zIndex: '100',
        }}
        className={styles.download_resume}
      >
        <Text
          inherit
          component="span"
          className={`${main_class.title} ${styles.resume_title}`}
          variant="gradient"
          gradient={{
            from: '#e02525',
            to: 'rgb(191,134,230)',
            deg: 190,
          }}
          pos="absolute"
          style={{ display: 'inline', lineHeight: '1' }}
        >
          {'resume'}
        </Text>
      </Anchor>
      <Text
        inherit
        component="span"
        className={`${styles.title} ${styles.resume_info}`}
        variant="gradient"
        gradient={{
          from: '#e02525',
          to: 'rgb(191,134,230)',
          deg: 190,
        }}
        pos="absolute"
        pl={40}
        pr={40}
        pb={40}
        pt={20}
        top={120}
        left={3900}
        style={{ border: 'dashed #be5555', borderRadius: 50 }}
      >
        {'education'}
        <List
          listStyleType="none"
          className={styles.resume_info_list}
        >
          <List.Item pt={20}>
            {"hunter college '26"}
            <List
              withPadding
              listStyleType="none"
              className={styles.resume_info_list2}
            >
              <List.Item>{'gpa: 3.9'}</List.Item>
              <List.Item>{'ba in cs, minor in math'}</List.Item>
            </List>
          </List.Item>
          <List.Item>{"stuyvesant '22"} </List.Item>
          <List
            withPadding
            listStyleType="none"
            className={styles.resume_info_list2}
          >
            <List.Item>{'gpa: 3.7'}</List.Item>
          </List>
        </List>
      </Text>
      <Text
        inherit
        component="span"
        className={`${styles.title} ${styles.resume_experience}`}
        variant="gradient"
        gradient={{
          from: '#e02525',
          to: 'rgb(191,134,230)',
          deg: 190,
        }}
        pos="absolute"
        pl={40}
        pr={40}
        pb={20}
        pt={20}
        top={75}
        left={4500}
        style={{ border: 'dashed #be5555', borderRadius: 40 }}
      >
        {'swe intern @'}
        <br />
        {'patina network'}
      </Text>

      <Text
        inherit
        component="span"
        className={`${styles.title} ${styles.resume_experience}`}
        variant="gradient"
        gradient={{
          from: '#e02525',
          to: 'rgb(191,134,230)',
          deg: 190,
        }}
        pos="absolute"
        pl={40}
        pr={40}
        pb={20}
        pt={40}
        top={275}
        left={4400}
        style={{ border: 'dashed #be5555', borderRadius: 40 }}
      >
        {'swe intern @'}
        <br />
        {'reach into cultural heights'}
        <br />
        {'heights'}
      </Text>

      <Text
        inherit
        component="span"
        className={`${styles.title} ${styles.resume_experience}`}
        variant="gradient"
        gradient={{
          from: '#e02525',
          to: 'rgb(191,134,230)',
          deg: 190,
        }}
        pos="absolute"
        pl={40}
        pr={40}
        pb={20}
        pt={20}
        top={560}
        left={4500}
        style={{ border: 'dashed #be5555', borderRadius: 40 }}
      >
        {'uta @'}
        <br />
        {'hunter college'}
      </Text>
    </>
  )
}

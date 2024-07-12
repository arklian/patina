import { Text } from '@mantine/core'
import styles from './Initiatives.module.css'
import community from './images/community.jpeg'
import scholarship from './images/scholarship.jpeg'
import mentorship from './images/mentorship.jpeg'
import { Cards } from './Cards.tsx'

/** Initiatives Section Component */
const detailsMap = [
  {
    title: 'Mentorship',
    details:
      'Mentor matching and internships for students and young professionals.',
    img: mentorship,
    link: 'https://github.com/arklian/patina/blob/main/tools/git/gerrit/setup.md',
  },
  {
    title: 'Scholarship',
    details: 'Annual scholarship fund for under resourced students.',
    img: scholarship,
    link: 'https://github.com/arklian/patina/blob/main/tools/git/gerrit/setup.md',
  },
  {
    title: 'Community',
    details:
      'Spaces to connect with community and learn about diverse cultures.',
    img: community,
    link: 'https://github.com/arklian/patina/blob/main/tools/git/gerrit/setup.md',
  },
]

export function Initiatives() {
  return (
    <>
      <div className={styles.container}>
        <Text>{'Our initiatives'}</Text>
        {detailsMap.map(({ title, details, img, link }, index) => (
          <Cards
            key={index}
            title={title}
            details={details}
            img={img}
            link={link}
          />
        ))}
      </div>
    </>
  )
}

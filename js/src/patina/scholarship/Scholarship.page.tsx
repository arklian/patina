import styles from './Scholarship.module.css'

export function ScholarshipPage() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero_container}>
          <div className={styles.hero_title}>
            {'Patina Network Scholarship Fund'}
            <div className={styles.hero_description}>
              {
                'The Patina Network Scholarship fund is... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              }
            </div>
          </div>
          <div>
            <img
              className={styles.hero_image}
              alt={'scholarship hero'}
              src={
                'https://cdn.discordapp.com/attachments/1261068702171009085/1262480237615124571/Group_297559.png?ex=6696bfd8&is=66956e58&hm=2506faf9caa9b3d56c06b7f228d89b3c1fe6137c605e1732b3f2bf80ae694531&'
              }
            />
          </div>
        </div>
      </div>
    </>
  )
}

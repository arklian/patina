import { Title, Text, Image } from '@mantine/core'
import styles from './About.module.css'

export function About() {
  return (
    <div
      className={styles.about}
      id="about"
    >
      <div className={styles.aboutDesc}>
        <div className={styles.titleContainer}>
          <Title className={styles.title}>{'About Me '}</Title>
          <div className={styles.titleLine}></div>
        </div>
        <div>
          <Text className={styles.aboutText}>
            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
              'Quisque malesuada sem ut tellus fermentum, ut pulvinar turpis pulvinar. ' +
              'Nulla lorem ligula, varius porta ex eu, euismod vulputate elit. ' +
              'Nam condimentum massa semper enim accumsan interdum. ' +
              'Duis at lectus sed sem sodales laoreet. Morbi hendrerit ipsum varius nisl ' +
              'dignissim malesuada. Sed vel magna mauris. Integer aliquam velit metus, ' +
              'lobortis consequat urna posuere id. Curabitur orci turpis, tincidunt sed leo et, ' +
              'commodo dignissim sapien. Phasellus auctor maximus dolor.'}
          </Text>
          <Text className={styles.aboutText}>
            {'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
              'Quisque malesuada sem ut tellus fermentum, ut pulvinar turpis pulvinar. ' +
              'Nulla lorem ligula, varius porta ex eu, euismod vulputate elit. ' +
              'Nam condimentum massa semper enim accumsan interdum. ' +
              'Duis at lectus sed sem sodales laoreet. Morbi hendrerit ipsum varius nisl ' +
              'dignissim malesuada. Sed vel magna mauris. Integer aliquam velit metus, ' +
              'lobortis consequat urna posuere id. Curabitur orci turpis, tincidunt sed leo et, ' +
              'commodo dignissim sapien. Phasellus auctor maximus dolor.'}
          </Text>
        </div>
      </div>
      <div className={styles.aboutImageDiv}>
        <Image
          radius="md"
          ml={'10px'}
          src={null}
          h={'auto'}
          w={'300px'}
          fallbackSrc="https://placehold.co/500x500?text=Placeholder"
          fit={'contain'}
          className={styles.aboutImage}
        />
      </div>
    </div>
  )
}

import {
  Button,
  Container,
  Image,
  MantineProvider,
  Text,
  Title,
} from '@mantine/core'
import styles from './About.module.css'
import PFP from '../assets/PicOfManny.jpg'

export function About() {
  return (
    <MantineProvider>
      <div className={styles.banner}>
        <Title className={styles.bannerTitle}>{'ABOUT'}</Title>
      </div>
      <Container className={styles.buttonContainer}>
        <Button
          component={'a'}
          href={'mailto:manuelreyes1241@outlook.com'}
          variant={'outline'}
          color={'gray'}
          className={styles.contactButton}
        >
          {'Chat With Me'}
        </Button>
      </Container>
      <Container className={styles.container}>
        <div className={styles.content}>
          <Image
            src={PFP}
            alt={'ProfilePic'}
            className={styles.image}
            radius={'md'}
          />
          <div className={styles.text}>
            <Text className={styles.description}>
              {"Hello and welcome to my page! I'm Manuel, but you can call me Manny." +
                " I'm a passionate Computer Science student at Hunter College in the vibrant " +
                'city of New York, with graduation on the horizon in 2025. My goal is to dive ' +
                'into the exciting world of software engineering once I graduate. Coding is not' +
                " just a skill for me; it's a thrilling adventure that I love to embark on and" +
                ' share with fellow enthusiasts. Join me as I explore the endless possibilities' +
                ' of technology and innovation!'}
              <br />
              <br />
              {'I have experience in a wide array of programming languages, including Python, ' +
                'JavaScript, React, C++, and Swift, with a particularly strong background in C++.' +
                " Over the years, I've honed my skills in full-stack development, " +
                "problem-solving, and project management. When I'm not immersed in coding," +
                ' you can find me exploring cutting-edge technologies, diving into the latest ' +
                'video games, or enjoying quality time with family and friends.'}
              <br />
              <br />
              {'I love to experiment with the web as a creative medium. This portfolio ' +
                'showcases my journey in learning and using web technology in unique ways.' +
                'I am always eager for opportunities to show my knowledge and expertise, and ' +
                'for the ability to grow and learn.'}
              <br />
              <br />
              {'Outside of work, I have a passion for reading, traveling, ' +
                "and immersing myself in all types of media. I'm constantly on the lookout" +
                ' for thrilling projects and fresh opportunities that allow me to grow and learn.'}
            </Text>
          </div>
          <Container className={styles.quoteSection}>
            <blockquote className={styles.blockquote}>
              {"It's not only moving that creates new starting points. " +
                'Sometimes all it takes is a subtle shift in perspective, an opening of ' +
                'the mind, an intentional pause and reset, or a new route to start to see new ' +
                'options and new possibilities.'}
            </blockquote>
            <cite className={styles.cite}>{'— Kristin Armstrong'}</cite>
          </Container>
        </div>
      </Container>
    </MantineProvider>
  )
}

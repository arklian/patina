import {
  TextInput,
  Textarea,
  Button,
  Title,
  Container,
  Text,
} from '@mantine/core'
import styles from './Contact.module.css'

export const ContactSection = () => (
  <section className={styles.contactSection}>
    <Container size="md" className={styles.container}>
      <Title order={1} className={styles.title}>
        {'Contact'}
      </Title>
      <Text className={styles.subtitle}>
        {
          "Have a question or want to work together? Leave your details and I'll get back to you as soon as possible."
        }
      </Text>
      <form className={styles.form}>
        <TextInput placeholder="Name" className={styles.input} required />
        <TextInput placeholder="Email" className={styles.input} required />
        <Textarea
          placeholder="Message"
          className={styles.input}
          required
          minRows={4}
        />
        <Button type="submit" className={styles.submitButton}>
          {'SUBMIT'}
        </Button>
      </form>
    </Container>
  </section>
)

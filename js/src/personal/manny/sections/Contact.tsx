import React, { useState } from 'react'
import {
  TextInput,
  Textarea,
  Button,
  Title,
  Container,
  Text,
} from '@mantine/core'
import styles from './Contact.module.css'

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:8080/api/contact/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('Message sent successfully!')
      } else {
        setStatus('Failed to send message. Please try again.')
      }
    } catch (error) {
      setStatus('Error sending message. Please try again.')
    }
  }

  return (
    <section className={styles.contactSection}>
      <Container size="md" className={styles.container}>
        <Title order={1} className={styles.title}>
          {'Contact'}
        </Title>
        <Text className={styles.subtitle}>
          {
            "Have a question or want to work together? Leave your details and I'll"
          }
          {'get back to you as soon as possible.'}
        </Text>
        <form className={styles.form} onSubmit={handleSubmit}>
          <TextInput
            name="name"
            placeholder="Name"
            className={styles.input}
            required
            onChange={handleChange}
            value={formData.name}
          />
          <TextInput
            name="email"
            placeholder="Email"
            className={styles.input}
            required
            onChange={handleChange}
            value={formData.email}
          />
          <Textarea
            name="message"
            placeholder="Message"
            className={styles.input}
            required
            minRows={4}
            onChange={handleChange}
            value={formData.message}
          />
          <Button type="submit" className={styles.submitButton}>
            {'SUBMIT'}
          </Button>
          {status && <Text className={styles.status}>{status}</Text>}
        </form>
      </Container>
    </section>
  )
}

'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import styles from './NewsletterForm.module.scss'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function NewsletterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || 'Unable to subscribe right now.')
      }

      setStatus('success')
      setMessage(data?.message || 'Thanks for joining our mailing list.')
      setName('')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      )
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.copy}>
        <h3 className={styles.title}>Join our mailing list</h3>
        <p className={styles.text}>
          Get updates on support events, inspiring stories, and ways to help women beyond cancer.
        </p>
      </div>

      <Form className={styles.form} noValidate onSubmit={handleSubmit}>
        <Row className={styles.formRow}>
          <Col lg={4}>
            <Form.Group className={styles.fieldGroup} controlId="newsletter-name">
              <Form.Label className={styles.label}>First name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                autoComplete="name"
                className={styles.input}
                placeholder="Your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>
          </Col>

          <Col lg={5}>
            <Form.Group className={styles.fieldGroup} controlId="newsletter-email">
              <Form.Label className={styles.label}>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                autoComplete="email"
                required
                className={styles.input}
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
          </Col>

          <Col lg="auto">
            <Button
              type="submit"
              variant="light"
              className={styles.button}
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Joining...' : 'Join Now'}
            </Button>
          </Col>
        </Row>
      </Form>

      <p className={styles.finePrint}>
        We will only send occasional updates. You can unsubscribe at any time.
      </p>

      {message ? (
        <Alert
          variant={status === 'success' ? 'success' : 'warning'}
          className={styles.message}
          role="status"
          aria-live="polite"
        >
          {message}
        </Alert>
      ) : null}
    </div>
  )
}

'use client'

import Link from 'next/link'
import type { SubmitEvent } from 'react'
import { useState } from 'react'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import styles from './NewsletterForm.module.scss'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function NewsletterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('')

    if (!consent) {
      setStatus('error')
      setMessage('Please confirm that you are happy to receive email updates before joining.')
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          consent,
        }),
      })

      let data: { error?: string; message?: string } = {}
      try {
        data = await response.json()
      } catch {
        // server returned a non-JSON body
      }

      if (!response.ok) {
        throw new Error(data?.error || 'Unable to subscribe right now.')
      }

      setStatus('success')
      setMessage(data?.message || 'Thanks for joining our mailing list.')
      setName('')
      setEmail('')
      setConsent(false)
    } catch (error) {
      setStatus('error')
      const message = error instanceof Error ? error.message : ''
      setMessage(message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.copy}>
        <h3 className={styles.title}>Join our mailing list</h3>
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

        <Form.Group className={styles.consentGroup} controlId="newsletter-consent">
          <Form.Check
            required
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className={styles.consentCheck}
            label={
              <span className={styles.consentText}>
                I agree to receive occasional emails from Women Beyond Cancer about programme
                updates, events, and related news. I understand I can unsubscribe at any time.
              </span>
            }
          />
        </Form.Group>
      </Form>

      <p className={styles.finePrint}>
        By joining, you confirm you have read our{' '}
        <Link href="/privacy" className={styles.inlineLink}>
          Privacy Policy
        </Link>
        ,{' '}
        <Link href="/terms" className={styles.inlineLink}>
          Terms of Use
        </Link>
        , and{' '}
        <Link href="/cookies" className={styles.inlineLink}>
          Cookie Policy
        </Link>
        .
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

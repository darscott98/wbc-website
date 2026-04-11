import { NextResponse } from 'next/server'

const MAILERLITE_SUBSCRIBERS_URL = 'https://connect.mailerlite.com/api/subscribers'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type SubscribeRequest = {
  email?: string
  name?: string
  consent?: boolean
}

export async function POST(request: Request) {
  const apiToken = process.env.MAILERLITE_API_TOKEN
  const groupId = process.env.MAILERLITE_GROUP_ID

  if (!apiToken) {
    return NextResponse.json(
      { error: 'MailerLite API token is not configured.' },
      { status: 500 }
    )
  }

  if (!groupId) {
    return NextResponse.json(
      { error: 'MailerLite group ID is not configured.' },
      { status: 500 }
    )
  }

  let body: SubscribeRequest

  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    )
  }

  const email = body.email?.trim().toLowerCase()
  const name = body.name?.trim()
  const consent = body.consent === true

  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 }
    )
  }

  if (!consent) {
    return NextResponse.json(
      { error: 'Please confirm that you want to receive email updates before joining.' },
      { status: 400 }
    )
  }

  try {
    const response = await fetch(MAILERLITE_SUBSCRIBERS_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify({
        email,
        fields: name ? { name } : undefined,
        groups: [groupId],
        status: 'active',
      }),
      cache: 'no-store',
    })

    const data = await response.json()

    if (!response.ok) {
      const emailErrors = Array.isArray(data?.errors?.email) ? data.errors.email.join(' ') : null
      const errorMessage = emailErrors || data?.message || 'Subscription failed.'

      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Thanks for joining our mailing list.',
      subscriber: data?.data ?? null,
    })
  } catch {
    return NextResponse.json(
      { error: 'Unable to reach MailerLite right now. Please try again shortly.' },
      { status: 502 }
    )
  }
}

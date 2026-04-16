const MAILERLITE_SUBSCRIBERS_URL = 'https://connect.mailerlite.com/api/subscribers'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Env = {
  MAILERLITE_API_TOKEN: string
  MAILERLITE_GROUP_ID: string
}

type PagesContext = {
  request: Request
  env: Env
}

type SubscribeRequest = {
  email?: string
  name?: string
  consent?: boolean
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function onRequestPost({ request, env }: PagesContext) {
  const apiToken = env.MAILERLITE_API_TOKEN
  const groupId = env.MAILERLITE_GROUP_ID

  if (!apiToken) {
    return json({ error: 'MailerLite API token is not configured.' }, 500)
  }

  if (!groupId) {
    return json({ error: 'MailerLite group ID is not configured.' }, 500)
  }

  let body: SubscribeRequest

  try {
    body = await request.json()
  } catch {
    return json({ error: 'Invalid request body.' }, 400)
  }

  const email = body.email?.trim().toLowerCase()
  const name = body.name?.trim()
  const consent = body.consent === true

  if (!email || !EMAIL_PATTERN.test(email)) {
    return json({ error: 'Please enter a valid email address.' }, 400)
  }

  if (!consent) {
    return json({ error: 'Please confirm that you want to receive email updates before joining.' }, 400)
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
    })

    const data = await response.json() as Record<string, unknown>

    if (!response.ok) {
      const errors = data?.errors as Record<string, unknown> | undefined
      const emailErrors = Array.isArray(errors?.email) ? (errors!.email as string[]).join(' ') : null
      const errorMessage = emailErrors || (data?.message as string) || 'Subscription failed.'
      return json({ error: errorMessage }, response.status)
    }

    return json({
      success: true,
      message: 'Thanks for joining our mailing list.',
      subscriber: (data as { data?: unknown })?.data ?? null,
    })
  } catch {
    return json({ error: 'Unable to reach MailerLite right now. Please try again shortly.' }, 502)
  }
}

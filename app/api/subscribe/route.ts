const MAILERLITE_SUBSCRIBERS_URL = 'https://connect.mailerlite.com/api/subscribers'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function json(data: unknown, status = 200): Response {
  return Response.json(data, { status })
}

export async function POST(request: Request): Promise<Response> {
  const apiToken = process.env.MAILERLITE_API_TOKEN
  const groupId = process.env.MAILERLITE_GROUP_ID

  if (!apiToken) {
    return json({ error: 'MailerLite API token is not configured.' }, 500)
  }

  if (!groupId) {
    return json({ error: 'MailerLite group ID is not configured.' }, 500)
  }

  let body: { email?: string; name?: string; consent?: boolean }

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

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 10_000)

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
      signal: controller.signal,
    })

    clearTimeout(timeout)

    let data: Record<string, unknown> = {}
    try {
      data = await response.json() as Record<string, unknown>
    } catch {
      if (!response.ok) {
        return json({ error: 'Subscription failed. Please try again shortly.' }, response.status)
      }
    }

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
  } catch (error) {
    clearTimeout(timeout)
    if (error instanceof Error && error.name === 'AbortError') {
      return json({ error: 'The request timed out. Please try again shortly.' }, 504)
    }
    return json({ error: 'Unable to reach MailerLite right now. Please try again shortly.' }, 502)
  }
}

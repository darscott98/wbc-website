import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../legal-pages.module.scss'

export const metadata: Metadata = {
  title: 'Privacy Policy — Women Beyond Cancer',
  description:
    'How Women Beyond Cancer collects, uses, and protects personal information through this website and mailing list.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <div className={styles.headerInner}>
          <p className={styles.eyebrow}>Legal</p>
          <h1 className={styles.pageTitle}>Privacy Policy</h1>
          <p className={styles.pageLead}>
            This policy explains what personal information we collect through this website,
            how we use it, and the choices available to you.
          </p>
          <p className={styles.updated}>Last updated: 11 April 2026</p>
        </div>
      </header>

      <section className={styles.contentSection}>
        <article className={styles.contentInner}>
          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>1. Who we are</h2>
            <p className={styles.body}>
              Women Beyond Cancer is a community-focused website sharing information, updates,
              and support opportunities for women navigating life after cancer. For the purposes
              of data protection law, Women Beyond Cancer is responsible for the personal
              information collected through this website.
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>2. Information we collect</h2>
            <p className={styles.body}>We may collect:</p>
            <ul className={styles.list}>
              <li>your name and email address when you join the waitlist or mailing list;</li>
              <li>any information you choose to send to us in direct messages or replies;</li>
              <li>
                technical information such as IP address, browser type, device information, and
                basic server logs needed to operate and secure the website.
              </li>
            </ul>
            <p className={styles.body}>
              Please do not submit detailed medical or other sensitive health information through
              the newsletter form unless we specifically ask for it and explain how it will be
              used.
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>3. How we use your information</h2>
            <ul className={styles.list}>
              <li>to send you the updates you asked to receive;</li>
              <li>to manage the waitlist, events, or programme communications;</li>
              <li>to respond to enquiries and provide support-related information;</li>
              <li>to operate, maintain, and protect the website; and</li>
              <li>to comply with legal or regulatory obligations.</li>
            </ul>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>4. Our legal bases</h2>
            <p className={styles.body}>Where UK GDPR or EU GDPR applies, we rely on:</p>
            <ul className={styles.list}>
              <li>
                <strong>consent</strong> for marketing or newsletter emails that you actively sign
                up to receive;
              </li>
              <li>
                <strong>legitimate interests</strong> to run, improve, and secure the website and
                communicate about genuine operational matters; and
              </li>
              <li>
                <strong>legal obligations</strong> where we must keep records or respond to lawful
                requests.
              </li>
            </ul>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>5. Who we share data with</h2>
            <p className={styles.body}>
              We do not sell your personal information. We may share limited data with trusted
              service providers who help us run the website or manage communications.
            </p>
            <p className={styles.body}>
              For mailing list sign-ups, we currently use <strong>MailerLite</strong> to store
              subscriber details and send updates on our behalf. We may also use website hosting,
              security, and IT support providers where needed for normal site operation.
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>6. International transfers</h2>
            <p className={styles.body}>
              Some of our service providers may process information outside the UK or EEA. Where
              that happens, we expect appropriate safeguards to be in place, such as standard
              contractual clauses or another lawful transfer mechanism.
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>7. Data retention</h2>
            <p className={styles.body}>
              We keep mailing list information until you unsubscribe, ask us to delete it, or we
              decide it is no longer needed for the purpose it was collected. We may keep limited
              records for administrative, security, or legal reasons where appropriate.
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>8. Your rights</h2>
            <p className={styles.body}>Depending on your location, you may have the right to:</p>
            <ul className={styles.list}>
              <li>request access to the personal information we hold about you;</li>
              <li>ask for inaccurate information to be corrected;</li>
              <li>ask for your information to be deleted;</li>
              <li>object to or restrict certain processing; and</li>
              <li>withdraw consent for marketing emails at any time.</li>
            </ul>
            <p className={styles.body}>
              You can unsubscribe from our emails at any time using the unsubscribe link in the
              message itself. If you believe your data has been handled improperly, you may also
              complain to the UK Information Commissioner&apos;s Office at{' '}
              <a className={styles.link} href="https://ico.org.uk" target="_blank" rel="noreferrer">
                ico.org.uk
              </a>
              .
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>9. Cookies</h2>
            <p className={styles.body}>
              We use cookies and similar technologies to help the website function and, where
              enabled, to understand how it is used. Please read our{' '}
              <Link href="/cookies" className={styles.link}>
                Cookie Policy
              </Link>{' '}
              for more detail.
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>10. Changes and contact</h2>
            <p className={styles.body}>
              We may update this policy from time to time to reflect changes to the site, our
              services, or the law. The latest version will always be posted on this page.
            </p>
            <p className={styles.body}>
              If you have a privacy question or want to exercise your rights, please contact Women
              Beyond Cancer using the contact details provided on this website or by replying to
              one of our emails.
            </p>
            <div className={styles.note}>
              This policy should be read together with our{' '}
              <Link href="/terms" className={styles.link}>
                Terms of Use
              </Link>{' '}
              and{' '}
              <Link href="/cookies" className={styles.link}>
                Cookie Policy
              </Link>
              .
            </div>
          </section>
        </article>
      </section>
    </>
  )
}

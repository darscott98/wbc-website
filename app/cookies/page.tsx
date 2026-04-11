import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../legal-pages.module.scss'

export const metadata: Metadata = {
  title: 'Cookie Policy — Women Beyond Cancer',
  description:
    'Information about how Women Beyond Cancer uses cookies and similar technologies on this website.',
}

export default function CookiePolicyPage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <div className={styles.headerInner}>
          <p className={styles.eyebrow}>Legal</p>
          <h1 className={styles.pageTitle}>Cookie Policy</h1>
          <p className={styles.pageLead}>
            This page explains what cookies are, how this website may use them, and how you can
            manage your choices.
          </p>
          <p className={styles.updated}>Last updated: 11 April 2026</p>
        </div>
      </header>

      <section className={styles.contentSection}>
        <article className={styles.contentInner}>
          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>1. What cookies are</h2>
            <p className={styles.body}>
              Cookies are small text files placed on your device when you visit a website. They can
              help a site function properly, remember preferences, measure performance, and improve
              user experience.
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>2. Types of cookies we may use</h2>
            <ul className={styles.list}>
              <li>
                <strong>Strictly necessary cookies</strong> to deliver the site, keep it secure,
                and support core features.
              </li>
              <li>
                <strong>Functional cookies</strong> to remember preferences or support forms and
                embedded services where needed.
              </li>
              <li>
                <strong>Analytics or measurement cookies</strong> only if we enable them in future
                to understand how visitors use the site and where consent is required.
              </li>
              <li>
                <strong>Third-party provider cookies</strong> where external tools or platforms are
                used, such as email, hosting, or embedded content services.
              </li>
            </ul>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>3. Our current approach</h2>
            <p className={styles.body}>
              At the time of writing, this website is intended to rely mainly on essential
              functionality and limited service-provider technologies needed to deliver the site and
              mailing list experience. If we introduce non-essential analytics or marketing cookies,
              we will update this page and ask for consent where required by law.
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>4. How to manage cookies</h2>
            <p className={styles.body}>
              You can usually control cookies through your browser settings, including blocking or
              deleting existing cookies. Please note that disabling essential cookies may affect how
              the website works.
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>5. More information</h2>
            <p className={styles.body}>
              For more detail on how personal data is handled, please read our{' '}
              <Link href="/privacy" className={styles.link}>
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms" className={styles.link}>
                Terms of Use
              </Link>
              .
            </p>
            <p className={styles.body}>
              If you have a question about cookie use on this site, please contact Women Beyond
              Cancer using the contact details published on the website.
            </p>
          </section>
        </article>
      </section>
    </>
  )
}

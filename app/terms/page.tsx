import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../legal-pages.module.scss'

export const metadata: Metadata = {
  title: 'Terms of Use — Women Beyond Cancer',
  description:
    'The terms that apply when you use the Women Beyond Cancer website and related content.',
}

export default function TermsOfUsePage() {
  return (
    <>
      <header className={styles.pageHeader}>
        <div className={styles.headerInner}>
          <p className={styles.eyebrow}>Legal</p>
          <h1 className={styles.pageTitle}>Terms of Use</h1>
          <p className={styles.pageLead}>
            These terms explain the rules for using the Women Beyond Cancer website and the
            information made available through it.
          </p>
          <p className={styles.updated}>Last updated: 11 April 2026</p>
        </div>
      </header>

      <section className={styles.contentSection}>
        <article className={styles.contentInner}>
          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>1. Using this website</h2>
            <p className={styles.body}>
              By accessing this website, you agree to use it lawfully and respectfully. If you do
              not agree with these terms, please do not use the site.
            </p>
            <p className={styles.body}>
              Women Beyond Cancer may update the website, its content, or these terms from time to
              time. The latest version published here will apply.
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>2. Information only — not medical advice</h2>
            <p className={styles.body}>
              This website provides general information about community support, wellbeing, and
              life after cancer. It is <strong>not</strong> medical advice, mental health advice,
              diagnosis, or treatment.
            </p>
            <p className={styles.body}>
              Always seek advice from a qualified clinician or other appropriate professional about
              your own health or circumstances. Do not ignore or delay professional advice because
              of something you read on this site.
            </p>
            <div className={styles.note}>
              If you think you may be in crisis or need urgent medical help, contact your doctor,
              NHS 111, or emergency services as appropriate.
            </div>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>3. Acceptable use</h2>
            <p className={styles.body}>You must not:</p>
            <ul className={styles.list}>
              <li>use the site in a way that is unlawful, abusive, or fraudulent;</li>
              <li>try to gain unauthorised access to the website or its systems;</li>
              <li>introduce malicious code, spam, or harmful material; or</li>
              <li>copy or reuse content in a misleading way or without permission.</li>
            </ul>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>4. Mailing list and submissions</h2>
            <p className={styles.body}>
              If you join our waitlist or mailing list, you agree to provide accurate information
              and only submit details that belong to you or that you are authorised to share.
            </p>
            <p className={styles.body}>
              You can unsubscribe from non-essential emails at any time. How we handle personal
              information is explained in our{' '}
              <Link href="/privacy" className={styles.link}>
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>5. Intellectual property</h2>
            <p className={styles.body}>
              Unless otherwise stated, the content on this website — including text, design,
              branding, graphics, and original materials — belongs to Women Beyond Cancer or is
              used with permission. You may view it for personal, non-commercial use, but you may
              not reproduce or distribute it without prior permission unless the law allows it.
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>6. External links</h2>
            <p className={styles.body}>
              This website may link to third-party websites for reference or convenience. We are
              not responsible for the content, availability, or privacy practices of those external
              services.
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>7. Availability and accuracy</h2>
            <p className={styles.body}>
              We aim to keep the site accurate and available, but we do not promise that it will
              always be uninterrupted, error-free, or up to date. Content may change without
              notice.
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>8. Liability</h2>
            <p className={styles.body}>
              To the fullest extent permitted by law, Women Beyond Cancer is not liable for any
              indirect or consequential loss arising from use of this website. Nothing in these
              terms excludes liability that cannot legally be excluded, including liability for
              fraud or for death or personal injury caused by negligence.
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>9. Governing law</h2>
            <p className={styles.body}>
              These terms are governed by the laws of England and Wales, except where mandatory
              consumer protection laws in your country of residence apply.
            </p>
          </section>

          <section className={styles.card}>
            <h2 className={styles.sectionTitle}>10. Contact</h2>
            <p className={styles.body}>
              If you have questions about these terms, please contact Women Beyond Cancer using the
              contact details shown on this website or in our communications.
            </p>
            <div className={styles.note}>
              These terms work alongside our{' '}
              <Link href="/privacy" className={styles.link}>
                Privacy Policy
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

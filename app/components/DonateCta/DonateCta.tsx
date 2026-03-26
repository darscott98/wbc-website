import styles from './DonateCta.module.scss'

export default function DonateCta() {
  return (
    <section className={styles.section} id="donate">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgCircle} />
      </div>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Make a Difference</p>
        <h2 className={styles.heading}>
          Your support changes<br />a woman&apos;s world
        </h2>
        <p className={styles.body}>
          Every contribution — however large or small — helps us reach more women
          who need community, guidance, and hope. Together, we can ensure no woman
          faces this journey alone.
        </p>
        <div className={styles.actions}>
          <a href="#" className={styles.btnDonate}>
            Donate Now
          </a>
          <a href="#contact" className={styles.btnVolunteer}>
            Volunteer With Us
          </a>
        </div>
        <div className={styles.trust}>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Registered UK Charity
          </div>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            Secure Payments
          </div>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            100% Goes to Women
          </div>
        </div>
      </div>
    </section>
  )
}

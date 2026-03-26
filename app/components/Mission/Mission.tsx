import styles from './Mission.module.scss'

export default function Mission() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={styles.label}>
          <span>Our Mission</span>
        </div>
        <blockquote className={styles.quote}>
          &ldquo;We believe that a cancer diagnosis is not the end of a woman&apos;s
          story. We exist to ensure no woman walks this journey alone — and that
          life beyond cancer is filled with{' '}
          <em className={styles.highlight}>purpose, connection, and joy.</em>&rdquo;
        </blockquote>
        <div className={styles.pillars}>
          <div className={styles.pillar}>
            <div className={styles.pillarIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className={styles.pillarTitle}>Community</h3>
            <p className={styles.pillarText}>
              Connecting women who understand — because shared experience
              is its own kind of medicine.
            </p>
          </div>
          <div className={styles.pillar}>
            <div className={styles.pillarIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3 className={styles.pillarTitle}>Wellbeing</h3>
            <p className={styles.pillarText}>
              Holistic programmes supporting emotional, physical, and
              mental wellness throughout and after treatment.
            </p>
          </div>
          <div className={styles.pillar}>
            <div className={styles.pillarIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <h3 className={styles.pillarTitle}>Hope</h3>
            <p className={styles.pillarText}>
              Empowering women to reclaim their identity, confidence, and
              future — one step at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import styles from './Mission.module.scss'

export default function Mission() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={styles.label}>
          <span>The Programme</span>
        </div>
        <blockquote className={styles.quote}>
          &ldquo;Women Beyond Cancer is a warm, purposeful community for women
          who have completed active cancer treatment. It weaves together three
          things that research consistently shows matter in recovery:{' '}
          <em className={styles.highlight}>guided journaling, time in nature, and peer community.</em>&rdquo;
        </blockquote>
        <div className={styles.pillars}>
          <div className={styles.pillar}>
            <div className={styles.pillarIcon} aria-hidden="true">
              {/* Pen / writing icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
              </svg>
            </div>
            <h3 className={styles.pillarTitle}>Journaling</h3>
            <p className={styles.pillarText}>
              Guided, progressive journaling that helps you process what has
              happened and begin to author what comes next.
            </p>
          </div>
          <div className={styles.pillar}>
            <div className={styles.pillarIcon} aria-hidden="true">
              {/* Leaf / nature icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8C8 10 5.9 16.17 3.82 22" />
                <path d="M21 3c-9 1-13 8-11 17" />
                <path d="M21 3C9 3 5 10 3 22" />
              </svg>
            </div>
            <h3 className={styles.pillarTitle}>Nature</h3>
            <p className={styles.pillarText}>
              Quarterly forest bathing in Swansea&apos;s green spaces — a
              clinically-informed return to your senses, your body, and the
              present moment.
            </p>
          </div>
          <div className={styles.pillar}>
            <div className={styles.pillarIcon} aria-hidden="true">
              {/* People icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className={styles.pillarTitle}>Community</h3>
            <p className={styles.pillarText}>
              Fortnightly peer support with women who understand — no
              background explaining required.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

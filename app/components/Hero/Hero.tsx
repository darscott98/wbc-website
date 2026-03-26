import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgShape1} />
        <div className={styles.bgShape2} />
      </div>

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Women Beyond Cancer</p>

          <h1 className={styles.heading}>
            Life doesn&apos;t end<br />
            <span className={styles.accent}>beyond cancer.</span><br />
            It begins again.
          </h1>

          <p className={styles.subheading}>
            A community of strength, healing, and hope — supporting women
            through and beyond their cancer journey with compassion,
            resources, and connection.
          </p>

          <div className={styles.actions}>
            <a href="#donate" className={styles.btnDonate}>
              Donate Today
            </a>
            <a href="#about" className={styles.btnLearn}>
              Our Story
            </a>
          </div>
        </div>

        <div className={styles.stats} aria-label="Our impact at a glance">
          <div className={styles.statCard}>
            <span className={styles.statNum}>2,400<span className={styles.statPlus}>+</span></span>
            <span className={styles.statLabel}>Women Supported</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.statCard}>
            <span className={styles.statNum}>12</span>
            <span className={styles.statLabel}>Years of Impact</span>
          </div>
          <div className={styles.statDivider} aria-hidden="true" />
          <div className={styles.statCard}>
            <span className={styles.statNum}>180<span className={styles.statPlus}>+</span></span>
            <span className={styles.statLabel}>Events Each Year</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span />
      </div>
    </section>
  )
}

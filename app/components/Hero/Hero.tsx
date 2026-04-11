import Link from 'next/link'
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
          <h1 className={styles.heading}>
            You finished treatment.<br />
            <span className={styles.accent}>So why does this feel</span><br />
            like the hardest part?
          </h1>

          <p className={styles.subheading}>
            Everyone told you that finishing treatment was the goal. But nobody
            told you about what comes after — the silence, the uncertainty, the
            strange grief of being told you&apos;re well when you don&apos;t feel it.
            If you&apos;re finding life after cancer harder than anyone around you
            seems to understand, you are not alone.
          </p>

          <div className={styles.actions}>
            <a href="#waitlist" className={styles.btnDonate}>
              Join the Waitlist
            </a>
            <Link href="/about" className={styles.btnLearn}>
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

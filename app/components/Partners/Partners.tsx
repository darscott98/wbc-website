import styles from './Partners.module.scss'

// National Lottery Community Fund Wales
function NationalLotteryLogo() {
  return (
    <img
      src="/logos/national-lottery-logo.png"
      alt="National Lottery Community Fund Wales"
      loading="lazy"
    />
  )
}

// Maggies
function MaggiesLogo() {
  return (
    <img
      src="/logos/maggies-logo.png"
      alt="Maggies"
      loading="lazy"
    />
  )
}

// The Old Mill Foundation
function OldMillFoundationLogo() {
  return (
    <img
      src="/logos/old-mill-logo.png"
      alt="The Old Mill Foundation"
      loading="lazy"
    />
  )
}

export default function Partners() {
  return (
    <section className={styles.section} aria-label="Programme supporters">
      <div className={styles.inner}>
        <p className={styles.label}>Supported by</p>
        <div className={styles.logos}>
          <div className={styles.logoItem}>
            <NationalLotteryLogo />
          </div>
          <div className={styles.logoItem}>
            <MaggiesLogo />
          </div>
          <div className={styles.logoItem}>
            <OldMillFoundationLogo />
          </div>
        </div>
      </div>
    </section>
  )
}

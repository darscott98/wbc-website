import styles from './Programs.module.scss'

const programs = [
  {
    tag: 'Weekly',
    title: 'Guided Journaling Sessions',
    description:
      'We begin with the foundations and gradually deepen your reflection as your confidence grows. No experience required — only a willingness to show up.',
    cta: 'Join the Waitlist',
    href: '#waitlist',
    accent: 'teal',
  },
  {
    tag: 'Fortnightly',
    title: 'Peer Support Groups',
    description:
      'Honest conversation with others who "get it" — no managing other people\'s discomfort, show up just as you are.',
    cta: 'Join the Waitlist',
    href: '#waitlist',
    accent: 'red',
  },
  {
    tag: 'Quarterly',
    title: 'Forest Bathing & Mindful Walking',
    description:
      'In-person sessions in Swansea\'s green spaces, guided by a certified forest bathing practitioner. Each session offers a quiet, unhurried invitation back into your senses, your body, and the present moment.',
    cta: 'Join the Waitlist',
    href: '#waitlist',
    accent: 'teal',
  },
  {
    tag: 'Annual',
    title: 'Day Retreat',
    description:
      'A day to go deeper — bringing together forest bathing, creative journaling, and mindfulness in a nurturing, restorative space. A day entirely for you.',
    cta: 'Join the Waitlist',
    href: '#waitlist',
    accent: 'red',
  },
]

export default function Programs() {
  return (
    <section className={styles.section} id="programs">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>What We Offer</p>
          <h2 className={styles.heading}>
            Four interwoven<br />
            <span className={styles.headingAccent}>threads of support</span>
          </h2>
          <p className={styles.sub}>
            A thoughtfully structured programme, building week on week
            throughout the year — for women who have completed active
            cancer treatment.
          </p>
        </div>

        <div className={styles.grid}>
          {programs.map((p) => (
            <article key={p.title} className={`${styles.card} ${styles[`accent_${p.accent}`]}`}>
              <span className={styles.tag}>{p.tag}</span>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardText}>{p.description}</p>
              <a href={p.href} className={styles.cardCta}>
                {p.cta}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

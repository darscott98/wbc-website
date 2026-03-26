import styles from './Programs.module.scss'

const programs = [
  {
    tag: 'Support',
    title: 'Peer Connection Groups',
    description:
      'Monthly gatherings — in person and online — where women share their experiences, fears, and triumphs in a safe, confidential space. Led by trained facilitators who truly understand.',
    cta: 'Join a Group',
    href: '#contact',
    accent: 'teal',
  },
  {
    tag: 'Wellness',
    title: 'Wellbeing Programmes',
    description:
      'From yoga and mindfulness to nutrition workshops and creative therapies, our holistic programmes are designed around the specific needs of women at every stage of their journey.',
    cta: 'Explore Programmes',
    href: '#contact',
    accent: 'red',
  },
  {
    tag: 'Resources',
    title: 'Information & Guidance',
    description:
      'Navigating cancer treatment and life after is complex. Our resource hub offers clear, practical information alongside one-to-one guidance sessions with specialist advisors.',
    cta: 'Access Resources',
    href: '#contact',
    accent: 'teal',
  },
  {
    tag: 'Events',
    title: 'Community Events',
    description:
      'Retreats, fundraising walks, celebration dinners, and more. Our events calendar is filled with opportunities to connect, laugh, and remind yourself that joy is always possible.',
    cta: 'View Events',
    href: '#events',
    accent: 'red',
  },
]

export default function Programs() {
  return (
    <section className={styles.section} id="programs">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>What We Do</p>
          <h2 className={styles.heading}>
            Support that meets you<br />
            <span className={styles.headingAccent}>wherever you are</span>
          </h2>
          <p className={styles.sub}>
            Every woman&apos;s journey is different. Our programmes are built
            to support you at every stage — from diagnosis through treatment
            and into life beyond.
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

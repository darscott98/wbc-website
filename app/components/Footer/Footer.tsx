import Link from 'next/link'
import styles from './Footer.module.scss'

const navGroups = [
  {
    title: 'Programme',
    links: [
      { href: '/about',         label: 'About Rebecca' },
      { href: '/#programs',     label: 'What We Offer' },
      { href: '/why-it-works',  label: 'Why It Works' },
      { href: '/#waitlist',     label: 'Join the Waitlist' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Use' },
      { href: '/cookies', label: 'Cookie Policy' },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <img
              src="/logos/wbc-long-plain.png"
              alt="Women Beyond Cancer logo"
              className={styles.logoImage}
            />
          </Link>
          <p className={styles.tagline}>
            A community for women navigating life after cancer —
            built on lived experience and evidence.
          </p>
          <p className={styles.charity}>Funded by the National Lottery Community Fund Wales</p>
        </div>

        <nav className={styles.linkGroups} aria-label="Footer navigation">
          {navGroups.map((group) => (
            <div key={group.title} className={styles.group}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.groupList}>
                {group.links.map(({ href, label }) => (
                  <li key={label}>
                    <Link href={href} className={styles.link}>{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>
          &copy; {year} Women Beyond Cancer. All rights reserved.
        </p>
        <div className={styles.socials} aria-label="Social media">
          <a href="https://www.instagram.com/women.beyondcancer/" className={styles.social} aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/rebperkins/" className={styles.social} aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

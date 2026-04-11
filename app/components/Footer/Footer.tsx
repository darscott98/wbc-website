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
          {/* Facebook */}
          <a href="#" className={styles.social} aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
          {/* Instagram */}
          <a href="#" className={styles.social} aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          {/* Twitter/X */}
          <a href="#" className={styles.social} aria-label="Twitter">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'

const navLinks = [
  { href: '/about',         label: 'About' },
  { href: '/#programs',     label: 'What We Offer' },
  { href: '/why-it-works',  label: 'Why It Works' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <img 
            src="/logos/wbc-long-plain-red.png" 
            alt="Women Beyond Cancer logo" 
            className={styles.logoImage} 
          />
        </Link>

        {/* Desktop links */}
        <ul className={styles.links}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={styles.link}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="/#waitlist" className={styles.donateCta}>
          Join Waitlist
        </a>

        {/* Mobile hamburger */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen((p) => !p)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <ul className={styles.drawerLinks}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={styles.drawerLink}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <a href="/#waitlist" className={styles.drawerCta} onClick={() => setMenuOpen(false)}>
          Join the Waitlist
        </a>
      </div>
    </header>
  )
}

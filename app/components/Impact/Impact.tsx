import Link from 'next/link'
import styles from './Impact.module.scss'

const findings = [
  {
    quote: 'Structured expressive writing produces measurable improvements in psychological wellbeing and post-traumatic growth in cancer survivors.',
    source: 'Systematic review, 2025',
  },
  {
    quote: 'Forest bathing reduces cortisol, increases serotonin and oxytocin, and reduces depression scores — effects lasting at least one week after a single session.',
    source: 'Clinical study, 2024',
  },
  {
    quote: 'Peer connection produces significant improvements in resilience, quality of life, and reductions in anxiety and fear of recurrence.',
    source: 'Review of peer support for cancer survivors, 2023',
  },
]

export default function Impact() {
  return (
    <section className={styles.section} id="impact">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>The Evidence</p>
          <h2 className={styles.heading}>
            Why these three<br />
            approaches?
          </h2>
          <p className={styles.body}>
            The programme is built on three interlocking approaches, each
            supported by a substantial body of research. Each approach building on the others.
          </p>
          <Link href="/why-it-works" className={styles.cta}>
            Read the full evidence
          </Link>
        </div>

        <div className={styles.right}>
          {findings.map(({ quote, source }) => (
            <div key={source} className={styles.stat}>
              <p className={styles.findingQuote}>&ldquo;{quote}&rdquo;</p>
              <span className={styles.findingSource}>{source}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

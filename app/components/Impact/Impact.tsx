import Link from 'next/link'
import styles from './Impact.module.scss'

const findings = [
  {
    quote: 'A systematic review covering 34 studies and 4,316 participants found expressive writing produced improvements in fatigue, passive mood, and physical quality of life in cancer patients.',
    source: 'Abu-Odah et al., Support Care Cancer, 2024',
  },
  {
    quote: 'Forest bathing significantly reduced symptoms of depression and anxiety across 36 studies involving 3,554 participants.',
    source: 'Siah et al., Int J Ment Health Nurs, 2023',
  },
  {
    quote: 'Peer-to-peer support produced meaningful benefits for depression, anxiety, coping, and cancer-specific quality of life across 18 randomised controlled trials.',
    source: 'Kiemen et al., J Cancer Res Clin Oncol, 2023',
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

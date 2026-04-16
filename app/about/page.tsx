import type { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'About Rebecca — Women Beyond Cancer',
  description:
    'Rebecca Perkins founded Women Beyond Cancer from lived experience — combining therapeutic journaling, forest bathing, and NLP coaching to support women after cancer treatment.',
}

export default function AboutPage() {
  return (
    <>
      {/* ─── Page Header ──────────────────────────────────────── */}
      <header className={styles.pageHeader}>
        <div className={styles.headerInner}>
          <p className={styles.eyebrow}>About Rebecca</p>
          <h1 className={styles.pageTitle}>
            Some programmes are born from training.<br />
            This one was born from lived experience.
          </h1>
          <p className={styles.pageLead}>
            Rebecca Perkins is the founder of Women Beyond Cancer — a programme she created
            not from a distance, but from the inside out.
          </p>
        </div>
      </header>

      {/* ─── Her Story ────────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <p className={styles.sectionLabel}>Her Story</p>
          <h2 className={styles.sectionHeading}>
            The particular strangeness of being told the hard part is over
          </h2>
          <p className={styles.sectionBody}>
            Rebecca knows what it is to finish cancer treatment and find yourself suddenly
            without the scaffolding that held you in place. She knows the particular strangeness
            of being told by the medical system that the hard part is over, while privately
            knowing that a different kind of hard part is only just beginning.
          </p>
          <p className={styles.sectionBody}>
            That experience — and everything she learned in navigating it — sits at the heart
            of everything Women Beyond Cancer does. The programme exists because Rebecca asked,
            after her own recovery, what she had actually needed. And then dedicated herself
            to making that available to others.
          </p>
        </div>
      </section>

      {/* ─── What She Brings ──────────────────────────────────── */}
      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <p className={styles.sectionLabel}>Training &amp; Expertise</p>
          <h2 className={styles.sectionHeading}>
            Three disciplines. One considered approach.
          </h2>
          <p className={styles.sectionBody}>
            Rebecca trained across three disciplines that, when held together, offer something
            genuinely different: a way of helping women tell themselves a new story about who
            they are now, and find their footing in it.
          </p>
          <div className={styles.credentials}>
            <div className={styles.credential}>
              <div className={styles.credentialDot} />
              <h3 className={styles.credentialTitle}>Certified Therapeutic Journaling Practitioner</h3>
              <p className={styles.credentialText}>
                Creates a space where writing becomes a tool for insight rather than
                performance — a place to put down what is hard to say aloud, and find,
                through the page, something that begins to feel like clarity.
              </p>
            </div>
            <div className={styles.credential}>
              <div className={styles.credentialDot} />
              <h3 className={styles.credentialTitle}>Accredited Forest Bathing Guide</h3>
              <p className={styles.credentialText}>
                Grounded in the emerging body of evidence that time in nature, guided with
                intention, can measurably restore the nervous system and reconnect people
                with themselves in ways that clinical settings rarely can.
              </p>
            </div>
            <div className={styles.credential}>
              <div className={styles.credentialDot} />
              <h3 className={styles.credentialTitle}>NLP Coach</h3>
              <p className={styles.credentialText}>
                Provides tools to help women notice the thought patterns and self-narratives
                shaped by illness — and begin, gently, to rewrite them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Her Vision ───────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <p className={styles.sectionLabel}>Her Vision</p>
          <h2 className={styles.sectionHeading}>
            Surviving cancer is not the end of the story.
            It is a beginning.
          </h2>
          <p className={styles.sectionBody}>
            Rebecca created Women Beyond Cancer because she believes that surviving cancer
            is not the end of the story — and that beginning deserves proper support,
            proper community, and proper space to unfold.
          </p>
          <p className={styles.sectionBody}>
            She is committed to making that support accessible. Through the partnership
            with the National Lottery Community Fund Wales, the programme is offered
            completely free to women in Wales — because financial circumstances should
            never be the thing that stands between a woman and her own recovery.
          </p>
          <p className={styles.sectionBody}>
            Rebecca leads every session herself — the journaling, the forest
            bathing, the peer spaces — bringing the same presence and care to each that
            she wishes someone had brought to her.
          </p>
        </div>
      </section>
    </>
  )
}

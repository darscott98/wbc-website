import type { Metadata } from 'next'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'Why It Works — Women Beyond Cancer',
  description:
    'The evidence behind the Women Beyond Cancer programme — why guided journaling, forest bathing, and peer community help women recover after cancer treatment.',
}

export default function WhyItWorksPage() {
  return (
    <>
      {/* ─── Page Header ──────────────────────────────────────── */}
      <header className={styles.pageHeader}>
        <div className={styles.headerInner}>
          <p className={styles.eyebrow}>The Evidence</p>
          <h1 className={styles.pageTitle}>
            Why journaling, nature,<br />and community?
          </h1>
          <p className={styles.pageLead}>
            Because the evidence points here. Each element of the Women Beyond Cancer programme
            is grounded in published research — and the combination is more than the sum of its parts.
          </p>
        </div>
      </header>

      {/* ─── The Problem ──────────────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <p className={styles.sectionLabelRed}>The Problem Nobody Talks About</p>
          <h2 className={styles.sectionHeading}>
            The end of treatment is not the end of the experience.
          </h2>
          <p className={styles.sectionBody}>
            We have made enormous progress in treating cancer. Survival rates continue to improve,
            and there are currently around 570,000 women living beyond a breast cancer diagnosis
            in the UK alone. But in the gap between clinical success and genuine wellbeing, there
            is a significant and largely unaddressed problem.
          </p>
          <p className={styles.sectionBody}>
            Research consistently shows that finishing active cancer treatment can, paradoxically,
            be one of the most psychologically vulnerable moments in a cancer journey.
          </p>
          <div className={styles.statHighlights}>
            <div className={styles.statCard}>
              <span className={styles.statFigure}>84%</span>
              <p className={styles.statDesc}>
                of women with breast cancer had not been provided with any information about the
                potential long-term mental health effects of their cancer.
                <br /><em>Survey of 2,862 women in England, 2018</em>
              </p>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statFigure}>75%</span>
              <p className={styles.statDesc}>
                reported feeling more socially isolated at the end of treatment than at the
                time of their diagnosis.
                <br /><em>Survey of 2,862 women in England, 2018</em>
              </p>
            </div>
          </div>
          <p className={styles.sectionBody}>
            This is not an individual failing. It is a structural one. A UK NHS survey found that
            post-treatment follow-up care is neither universal nor consistent — and even where it
            does exist, it frequently fails to address the psychological and emotional needs that
            healthcare professionals themselves identify as most important: fear of recurrence,
            fatigue, anxiety, and depression.
          </p>
          <p className={styles.sectionBody}>
            A large-scale UK study tracking over 57,000 women with a history of breast cancer
            found that cancer survivorship is associated with significantly raised risks of
            anxiety, depression, sleep disorders, and fatigue — persisting well into the
            survivorship period, sometimes years beyond the end of treatment. Women Beyond Cancer
            was built specifically for that chapter.
          </p>
        </div>
      </section>

      {/* ─── Pillar 1: Journaling ─────────────────────────────── */}
      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <p className={styles.sectionLabel}>Pillar One</p>
          <h2 className={styles.sectionHeading}>Therapeutic Journaling</h2>
          <p className={styles.sectionBody}>
            Expressive writing has one of the longest and most robust evidence bases of any
            psychological self-help practice. The foundational work of Dr James Pennebaker and
            colleagues established that writing about difficult experiences produces measurable
            improvements in both psychological and physical health outcomes — and this work has
            been replicated and extended in the context of cancer specifically.
          </p>
          <p className={styles.sectionBody}>
            Multiple studies have found that expressive and reflective writing can improve
            psychological wellbeing and lower anxiety in cancer patients and survivors. Writing
            about the cancer experience has been linked to decreased pain, improved emotional
            regulation, and what researchers call <em>post-traumatic growth</em> — a positive,
            meaningful shift in how people understand themselves and their lives following a
            period of significant adversity.
          </p>
          <p className={styles.sectionBody}>
            A 2025 systematic review examining writing interventions specifically with cancer
            survivors identified multiple beneficial effects, including improvements in
            psychopathological symptoms, bio-psycho-social wellbeing, and the management of
            treatment side effects. Crucially, the review found that guided, structured writing —
            the kind offered in Women Beyond Cancer — tends to produce stronger effects than
            unguided writing alone.
          </p>
          <p className={styles.sectionBody}>
            What matters in Women Beyond Cancer is not journaling as diary-keeping. It is
            journaling as a practice — guided, progressive, and purposefully structured to help
            women process what has happened, understand how they are changing, and begin to
            author their own story of what comes next.
          </p>
        </div>
      </section>

      {/* ─── Pillar 2: Forest Bathing ─────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <p className={styles.sectionLabel}>Pillar Two</p>
          <h2 className={styles.sectionHeading}>Forest Bathing and Time in Nature</h2>
          <p className={styles.sectionBody}>
            The practice of <em>Shinrin-yoku</em> — forest bathing — originated in Japan in the
            1980s and has since accumulated a significant international body of research. It
            refers not to hiking or exercise, but to the deliberate, unhurried experience of
            being present within a natural environment using all the senses.
          </p>
          <p className={styles.sectionBody}>
            The evidence for its benefits is striking. A meta-analysis examining 20 studies
            across Asia and Europe found that forest bathing produces meaningful reductions in
            anxiety, depression, and anger in the short term. A systematic review found
            consistent positive effects on self-reported mood alongside measurable physiological
            changes — including reductions in cortisol (the body&apos;s primary stress hormone),
            improvements in heart rate variability, and increased blood serotonin levels.
          </p>
          <p className={styles.sectionBody}>
            Research on women with depression specifically found that forest bathing significantly
            reduced depression scores compared to urban walking, with effects lasting for at least
            one week after a single session. The same study found significant increases in
            oxytocin — a hormone associated with connection, calm, and social bonding — following
            forest immersion.
          </p>
          <p className={styles.sectionBody}>
            These are not marginal effects. They are physiological, measurable, and meaningful —
            and they are especially relevant for women coming out of cancer treatment, whose
            nervous systems have often been under sustained stress for months or years. The
            quarterly forest bathing sessions within Women Beyond Cancer are not a pleasant extra.
            They are a clinically-informed component of recovery, delivered by an accredited
            guide, in Swansea&apos;s green spaces.
          </p>
        </div>
      </section>

      {/* ─── Pillar 3: Peer Community ─────────────────────────── */}
      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <p className={styles.sectionLabel}>Pillar Three</p>
          <h2 className={styles.sectionHeading}>Peer Community and Belonging</h2>
          <p className={styles.sectionBody}>
            Perhaps the most underestimated element of life after cancer is the loneliness —
            and how little-discussed it is outside of the experience itself. The research is
            unambiguous: social isolation is one of the strongest predictors of poor mental
            health outcomes in cancer survivors.
          </p>
          <p className={styles.sectionBody}>
            A large UK study specifically examining loneliness in people living beyond cancer
            found that it is both prevalent and significantly associated with a range of
            unhealthy patterns — a vicious cycle in which isolation and poor wellbeing reinforce
            one another. Critically, research has identified that the transition off active
            treatment is a particularly isolating moment — precisely because it coincides with
            the withdrawal of structured clinical support and, often, the reduced attentiveness
            of friends and family who assume that the hard part is over.
          </p>
          <p className={styles.sectionBody}>
            Peer support — connection with others who share the same experience — addresses
            something that professional support alone cannot: the felt sense of being truly
            understood. Research on peer support for cancer survivors has found significant
            improvements in psychological wellbeing, resilience, and quality of life, as well
            as reductions in depression, anxiety, and fear of recurrence. The simply, the
            feeling of <em>&ldquo;no explaining required&rdquo;</em> has profound therapeutic value.
          </p>
          <p className={styles.sectionBody}>
            The fortnightly peer support groups within Women Beyond Cancer are not incidental
            conversation. They are a carefully held space designed to offer exactly what the
            evidence says women need most at this stage: the experience of being in a room —
            even a virtual one — with people who genuinely understand, without qualification
            or caveat, what this is like.
          </p>
        </div>
      </section>

      {/* ─── A Note on the Evidence ───────────────────────────── */}
      <section className={styles.noteSection}>
        <div className={styles.noteInner}>
          <h2 className={styles.noteHeading}>A note on the evidence</h2>
          <p className={styles.noteBody}>
            The Women Beyond Cancer programme does not claim to be a clinical intervention,
            and it is not a replacement for medical or psychological care. What it offers is
            evidence-informed community support — a programme designed with genuine care and
            grounded in the best available research on what helps women recover, reconnect,
            and find themselves on the other side of cancer treatment.
          </p>
          <p className={styles.noteBody}>
            Every element of the programme reflects a deliberate choice. The combination of
            journaling, nature, and peer community is not a collection of wellness trends.
            It is a considered, compassionate response to what the evidence — and lived
            experience — tells us women actually need.
          </p>
          <a href="/#waitlist" className={styles.noteCta}>
            Join the Waitlist
          </a>
        </div>
      </section>
    </>
  )
}

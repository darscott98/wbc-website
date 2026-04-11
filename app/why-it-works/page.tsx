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
            We have made enormous progress in treating cancer, but the period after treatment can
            still be one of the most psychologically demanding parts of the journey. In a large UK
            prospective survey of people finishing treatment, 30% reported more than five moderate
            or severe unmet needs at the end of treatment — and for 60% of that group, the
            situation had not improved six months later. The most commonly reported unmet needs
            were psychological, especially fear of recurrence.[1]
          </p>
          <p className={styles.sectionBody}>
            Loneliness and disconnection are also common. A 2024 UK study of 5,835 people living
            with and beyond cancer found that 19% reported higher loneliness, and those
            participants were less likely to meet recommendations for physical activity, fruit and
            vegetable intake, and smoking avoidance.[2] In other words, isolation is not just
            emotionally painful; it is closely tied to the everyday behaviours that support
            recovery.
          </p>
          <div className={styles.statHighlights}>
            <div className={styles.statCard}>
              <span className={styles.statFigure}>30%</span>
              <p className={styles.statDesc}>
                reported more than five moderate or severe unmet needs immediately after treatment.
                <br /><em>Armes et al., J Clin Oncol, 2009</em>
              </p>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statFigure}>19%</span>
              <p className={styles.statDesc}>
                of 5,485 UK adults living with and beyond cancer reported higher loneliness.
                <br /><em>Smith et al., BMC Public Health, 2024</em>
              </p>
            </div>
          </div>
          <p className={styles.sectionBody}>
            This is why survivorship support matters. The challenge after treatment is not simply
            &ldquo;getting back to normal&rdquo;; it is navigating uncertainty, fatigue, identity change,
            and the sudden absence of the clinical structure that carried many women through
            treatment in the first place.[1][2]
          </p>
        </div>
      </section>

      {/* ─── Pillar 1: Journaling ─────────────────────────────── */}
      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <p className={styles.sectionLabel}>Pillar One</p>
          <h2 className={styles.sectionHeading}>Therapeutic Journaling</h2>
          <p className={styles.sectionBody}>
            Expressive writing is one of the most studied low-cost psychosocial practices in
            cancer care. A 2023 systematic review and meta-analysis covering 34 studies and 4,316
            participants found improvements in fatigue, passive mood, and the physical dimension
            of quality of life, even though effects on anxiety and depression were not consistent
            across all studies.[3]
          </p>
          <p className={styles.sectionBody}>
            That nuance matters. An earlier meta-analysis of 16 randomized trials concluded that
            expressive writing is not a universal fix for every cancer survivor, but it may be
            more helpful for subgroups facing higher distress or lower emotional support.[4]
            In practice, writing tends to work best when it is structured, intentional, and
            supported rather than left completely open-ended.
          </p>
          <p className={styles.sectionBody}>
            What matters in Women Beyond Cancer is not journaling as diary-keeping. It is guided
            reflective practice: prompts that help women name what has happened, make meaning of
            it, and gradually rebuild a sense of continuity and agency.[3][4]
          </p>
        </div>
      </section>

      {/* ─── Pillar 2: Forest Bathing ─────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <p className={styles.sectionLabel}>Pillar Two</p>
          <h2 className={styles.sectionHeading}>Forest Bathing and Time in Nature</h2>
          <p className={styles.sectionBody}>
            The practice of <em>Shinrin-yoku</em> — forest bathing — has moved well beyond the
            language of wellness trends and into a growing research literature. It refers not to
            strenuous exercise, but to slow, sensory immersion in a natural environment.
          </p>
          <p className={styles.sectionBody}>
            A 2023 systematic review and meta-analysis of 36 studies involving 3,554 participants
            found that forest bathing significantly reduced symptoms of depression and anxiety.[5]
            A 2021 meta-analysis focused specifically on forest therapy likewise reported
            significant improvements in both depression and anxiety across 20 studies.[6]
          </p>
          <p className={styles.sectionBody}>
            The physiological evidence is more mixed than the psychological evidence, but the
            overall direction is encouraging: nature-based interventions appear to reduce stress
            and restore calm without asking people to push through or perform. For women coming
            out of cancer treatment, that combination of gentleness, embodiment, and emotional
            regulation is highly relevant.[5][6]
          </p>
        </div>
      </section>

      {/* ─── Pillar 3: Peer Community ─────────────────────────── */}
      <section className={styles.sectionAlt}>
        <div className={styles.inner}>
          <p className={styles.sectionLabel}>Pillar Three</p>
          <h2 className={styles.sectionHeading}>Peer Community and Belonging</h2>
          <p className={styles.sectionBody}>
            Perhaps the most underestimated element of life after cancer is loneliness — and how
            little-discussed it can be once treatment ends. The evidence above suggests that
            isolation remains common well into survivorship and is tied not only to distress, but
            also to the everyday health behaviours that support long-term recovery.[2]
          </p>
          <p className={styles.sectionBody}>
            Peer support addresses something professional care alone cannot: the relief of being
            understood by someone who does not need the experience explained. A 2023 systematic
            review of 18 randomized controlled trials found small but meaningful benefits of
            peer-to-peer support for outcomes such as depression and anxiety, coping, sexual
            functioning, and cancer-specific quality of life, with particularly promising findings
            in breast cancer and face-to-face settings.[7]
          </p>
          <p className={styles.sectionBody}>
            The fortnightly peer support groups within Women Beyond Cancer are therefore not
            incidental conversation. They are a deliberately held space designed to reduce
            isolation, strengthen coping, and restore a sense of belonging at a point where many
            women feel unexpectedly alone.[2][7]
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

      <section className={styles.referencesSection} aria-labelledby="references-title">
        <div className={styles.referencesInner}>
          <p className={styles.sectionLabel}>References</p>
          <h2 id="references-title" className={styles.referencesHeading}>
            Selected studies and sources
          </h2>
          <p className={styles.referencesIntro}>
            These are the key papers used to ground the claims on this page. They are not
            exhaustive, but they reflect the evidence base behind the programme.
          </p>
          <ol className={styles.referencesList}>
            <li className={styles.referenceItem}>
              Armes J, Crowe M, Colbourne L, et al. <em>Patients&apos; supportive care needs beyond
              the end of cancer treatment: a prospective, longitudinal survey.</em> <span>J Clin
              Oncol.</span> 2009;27(36):6172-6179.{' '}
              <a className={styles.referenceLink} href="https://pubmed.ncbi.nlm.nih.gov/19884548/" target="_blank" rel="noreferrer">PubMed</a>
            </li>
            <li className={styles.referenceItem}>
              Smith S, Lally P, Steptoe A, Chavez-Ugalde Y, Beeken RJ, Fisher A. <em>Prevalence
              of loneliness and associations with health behaviours and body mass index in 5835
              people living with and beyond cancer: a cross-sectional study.</em>{' '}
              <span>BMC Public Health.</span> 2024;24:635.{' '}
              <a className={styles.referenceLink} href="https://pubmed.ncbi.nlm.nih.gov/38419011/" target="_blank" rel="noreferrer">PubMed</a>
            </li>
            <li className={styles.referenceItem}>
              Abu-Odah H, Su JJ, Wang M, Sheffield D, Molassiotis A. <em>Systematic review and
              meta-analysis of the effectiveness of expressive writing disclosure on cancer and
              palliative care patients&apos; health-related outcomes.</em> <span>Support Care
              Cancer.</span> 2024;32(1):70.{' '}
              <a className={styles.referenceLink} href="https://pubmed.ncbi.nlm.nih.gov/38157056/" target="_blank" rel="noreferrer">PubMed</a>
            </li>
            <li className={styles.referenceItem}>
              Zachariae R, O&apos;Toole MS. <em>The effect of expressive writing intervention on
              psychological and physical health outcomes in cancer patients—a systematic review and
              meta-analysis.</em> <span>Psychooncology.</span> 2015;24(11):1349-1359.{' '}
              <a className={styles.referenceLink} href="https://pubmed.ncbi.nlm.nih.gov/25871981/" target="_blank" rel="noreferrer">PubMed</a>
            </li>
            <li className={styles.referenceItem}>
              Siah CJR, Goh YS, Lee J, et al. <em>The effects of forest bathing on psychological
              well-being: a systematic review and meta-analysis.</em> <span>Int J Ment Health
              Nurs.</span> 2023;32(4):1038-1054.{' '}
              <a className={styles.referenceLink} href="https://europepmc.org/article/MED/36864583" target="_blank" rel="noreferrer">Europe PMC</a>
            </li>
            <li className={styles.referenceItem}>
              Yeon PS, Jeon JY, Jung MS, et al. <em>Effect of Forest Therapy on Depression and
              Anxiety: A Systematic Review and Meta-Analysis.</em> <span>Int J Environ Res Public
              Health.</span> 2021;18(23):12685.{' '}
              <a className={styles.referenceLink} href="https://pubmed.ncbi.nlm.nih.gov/34886407/" target="_blank" rel="noreferrer">PubMed</a>
            </li>
            <li className={styles.referenceItem}>
              Kiemen A, Czornik M, Weis J. <em>How effective is peer-to-peer support in cancer
              patients and survivors? A systematic review.</em> <span>J Cancer Res Clin Oncol.</span>{' '}
              2023;149(11):9461-9485.{' '}
              <a className={styles.referenceLink} href="https://europepmc.org/article/MED/37120782" target="_blank" rel="noreferrer">Europe PMC</a>
            </li>
          </ol>
        </div>
      </section>
    </>
  )
}

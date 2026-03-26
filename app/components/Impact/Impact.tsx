import styles from './Impact.module.scss'

const stats = [
  { num: '2,400', suffix: '+', label: 'Women supported across the UK', color: 'red' },
  { num: '12',    suffix: '',  label: 'Years making a difference',     color: 'teal' },
  { num: '180',   suffix: '+', label: 'Programmes & events per year',  color: 'red' },
  { num: '98',    suffix: '%', label: 'Of women feel less alone',      color: 'teal' },
]

export default function Impact() {
  return (
    <section className={styles.section} id="impact">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>Our Impact</p>
          <h2 className={styles.heading}>
            Behind every number<br />
            is a woman&apos;s story
          </h2>
          <p className={styles.body}>
            Since 2013, Women Beyond Cancer has walked alongside thousands of
            women — listening, supporting, and advocating. These numbers reflect
            real lives changed and real connections made.
          </p>
          <a href="#donate" className={styles.cta}>
            Help Us Do More
          </a>
        </div>

        <div className={styles.right}>
          {stats.map(({ num, suffix, label, color }) => (
            <div key={label} className={`${styles.stat} ${styles[`color_${color}`]}`}>
              <span className={styles.statNum}>
                {num}<span className={styles.suffix}>{suffix}</span>
              </span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

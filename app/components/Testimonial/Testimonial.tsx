import styles from './Testimonial.module.scss'

const testimonials = [
  {
    quote:
      "WBC gave me something no treatment could — a room full of women who simply understood. I didn't need to explain myself. For the first time in two years, I felt genuinely seen.",
    name: 'Sarah M.',
    detail: 'Breast cancer survivor, member since 2021',
    initials: 'SM',
  },
  {
    quote:
      "The journaling sessions gave me a language for things I hadn't been able to say out loud. I came not knowing what to expect and found something that changed how I understand myself.",
    name: 'Rachel T.',
    detail: 'Ovarian cancer survivor, member since 2020',
    initials: 'RT',
  },
  {
    quote:
      "I was terrified after finishing treatment — the support structure disappears overnight. WBC was there when I needed it most, and they continue to be part of my life today.",
    name: 'Caroline H.',
    detail: 'Cervical cancer survivor, member since 2022',
    initials: 'CH',
  },
]

export default function Testimonial() {
  return (
    <section className={styles.section} id="stories">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Stories</p>
          <h2 className={styles.heading}>
            In their own words
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <figure key={t.name} className={styles.card}>
              <div className={styles.quoteMark} aria-hidden="true">&ldquo;</div>
              <blockquote className={styles.quote}>{t.quote}</blockquote>
              <figcaption className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">
                  {t.initials}
                </div>
                <div>
                  <p className={styles.name}>{t.name}</p>
                  <p className={styles.detail}>{t.detail}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

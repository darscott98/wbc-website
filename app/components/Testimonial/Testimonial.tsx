import styles from './Testimonial.module.scss'

const testimonials = [
  {
    quote:
      "With Rebecca’s gentle guidance, journaling has become a creative, grounding practice I now return to with ease. ",
    name: 'Rachel',
    initials: 'R',
  },
  {
    quote:
      "Rebecca is a warm, gentle and positive soul. I felt totally at ease from the moment we met until the end of the day.",
    name: 'Donna',
    initials: 'D',
  },
  {
    quote:
      "Rebecca is an amazing forest bathing guide. Her calming presence and extensive knowledge put me at my ease and I trusted her completely to guide us through the forest.",
    name: 'Bea',
    initials: 'B',
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
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

import NewsletterForm from '../NewsletterForm/NewsletterForm'
import styles from './DonateCta.module.scss'

export default function DonateCta() {
  return (
    <section className={styles.section} id="waitlist">
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgCircle} />
      </div>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>We begin soon.</p>
        <h2 className={styles.heading}>
          Join the Women Beyond<br />Cancer Programme
        </h2>
        <p className={styles.body}>
          We're thrilled to have secured funding from the National Lottery Community Fund Wales, making this programme free for women in Wales. This programme is for everyone—add your name to the waitlist and we'll be in touch with everything you need to know about joining.
        </p>
        <NewsletterForm />

      </div>
    </section>
  )
}

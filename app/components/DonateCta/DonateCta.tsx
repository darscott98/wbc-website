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
          We're thrilled to have secured funding from the National Lottery Community Fund Wales—which means women in Wales can access this programme completely free.
          <br/>
          But this programme is for everyone. Whether you're in Wales or beyond, add your name to the waitlist and we'll be in touch with everything you need to know about joining.
        </p>
        <NewsletterForm />
        <p className={styles.finePrint}>
          This programme is free for women living in Wales. Outside Wales?
          Please still get in touch — we&apos;d love to hear from you.
        </p>
      </div>
    </section>
  )
}

import { useTranslation } from "react-i18next"
import styles from "./ContactCta.module.css"

export const ContactCta = () => {
  const { t } = useTranslation()
  const emailHref = t("home.extraSection2.point1.href", {
    defaultValue: "mailto:anabakas.art@gmail.com",
  })
  const marqueeText = t("home.contactCta.carousel")

  return (
    <section className={styles.section}>
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          <span className={styles.marqueeText}>{marqueeText}</span>
          <span className={styles.marqueeText}>{marqueeText}</span>
          <span className={styles.marqueeText}>{marqueeText}</span>
          <span className={styles.marqueeText}>{marqueeText}</span>
          <span className={styles.marqueeText}>{marqueeText}</span>
          <span className={styles.marqueeText}>{marqueeText}</span>
          <span className={styles.marqueeText}>{marqueeText}</span>
        </div>
      </div>
      <div className={styles.container}>
        <a href={emailHref} className={styles.button}>
          {t("home.contactCta.button")}
        </a>
      </div>
    </section>
  )
}

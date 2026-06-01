import { useTranslation } from "react-i18next"
import { CloudinaryImage } from "../shared/CloudinaryImage"
import styles from "./AboutHeroSection.module.css"

export const AboutHeroSection = () => {
  const { t } = useTranslation()

  return (
    <section className={styles.section}>
      <div className={styles.titleWrap}>
        <h1 className={styles.title}>{t("aboutPage.title")}</h1>
      </div>
      <div
        className={styles.imageArea}
        aria-label={t("aboutPage.imagePlaceholderLabel")}
        role="region"
      >
        <div className={styles.imageSlot}>
          <CloudinaryImage
            publicId="banner_rplxtc"
            alt={t("aboutPage.imageAlt")}
            className={styles.image}
          />
          <div className={styles.squareBLClip} aria-hidden="true">
            <div className={styles.squareBL} />
          </div>
          <div className={styles.squareBRClip} aria-hidden="true">
            <div className={styles.squareBR} />
          </div>
          <div className={styles.squareTLClip} aria-hidden="true">
            <div className={styles.squareTL} />
          </div>
          <div className={styles.squareTRClip} aria-hidden="true">
            <div className={styles.squareTR} />
          </div>
        </div>
      </div>
    </section>
  )
}

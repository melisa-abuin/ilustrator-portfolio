import { useTranslation } from "react-i18next"
import { CloudinaryImage } from "../shared/CloudinaryImage"
import styles from "./CasesIntroSection.module.css"

export const CasesIntroSection = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{t("cases.title")}</h1>
      <p className={styles.subtitle}>{t("cases.subtitle")}</p>
      <div className={styles.overlapStack} aria-hidden="true">
        <CloudinaryImage
          publicId="overlap_top_ppizme"
          alt=""
          className={`${styles.overlapCardTop} ${styles.tileImage}`}
        />
        <CloudinaryImage
          publicId="overlap_bottom_f4okj6"
          alt=""
          className={`${styles.overlapCardBottom} ${styles.tileImage}`}
        />
      </div>
    </div>
  )
}

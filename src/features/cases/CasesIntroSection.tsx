import { useTranslation } from "react-i18next"
import { CloudinaryImage } from "../shared/CloudinaryImage"
import styles from "./CasesIntroSection.module.css"

interface CasesIntroSectionProps {
  imageIds?: readonly string[]
  wideImages?: boolean
  showImages?: boolean
  subtitleKey?: string
  titleKey?: string
}

export const CasesIntroSection = ({
  imageIds = ["overlap_top_ppizme", "overlap_bottom_f4okj6"],
  showImages = true,
  subtitleKey = "cases.subtitle",
  titleKey = "cases.title",
  wideImages = false,
}: CasesIntroSectionProps) => {
  const { t } = useTranslation()

  return (
    <div className={styles.content}>
      <h1 className={styles.title}>{t(titleKey)}</h1>
      <p className={styles.subtitle}>{t(subtitleKey)}</p>
      {showImages && (
        <div
          className={`${styles.overlapStack} ${
            wideImages ? styles.wideImages : ""
          }`}
          aria-hidden="true"
        >
          {imageIds.map((publicId, index) => (
            <CloudinaryImage
              alt=""
              className={`${
                index === 0 ? styles.overlapCardTop : styles.overlapCardBottom
              } ${styles.tileImage}`}
              key={publicId}
              publicId={publicId}
            />
          ))}
        </div>
      )}
    </div>
  )
}

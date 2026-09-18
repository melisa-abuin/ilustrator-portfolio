import { CloudinaryImage } from "../shared/CloudinaryImage"
import { ImageRow } from "../shared/ImageRow"
import brandStyles from "./CasesBrandSection.module.css"
import { CasesIntroSection } from "./CasesIntroSection"
import styles from "./CasesSection.module.css"

const brandTopImages = ["1-1_1_ujnnlm", "1-2_1_dymybt"] as const
const brandBottomImages = [
  "3-02_1_zg4tof",
  "3-01_1_saacht",
  "3-2_1_wowxt5",
] as const

export const CasesBrandSection = () => {
  return (
    <div className={styles.section} data-testid="cases-brand-section">
      <CasesIntroSection
        imageIds={["2-1_1_qejca9", "2-2_1_geojp4"]}
        showImages
        subtitleKey="cases.brand.subtitle"
        titleKey="cases.brand.title"
        wideImages
      />
      <div
        className={brandStyles.brandGallery}
        data-testid="cases-brand-gallery"
      >
        <ImageRow
          className={brandStyles.brandRow1}
          imageClassName={brandStyles.brandImage}
          items={brandTopImages.map((publicId) => ({ publicId }))}
        />
        <div className={brandStyles.brandRow2}>
          <ImageRow
            className={brandStyles.brandLeftColumn}
            imageClassName={brandStyles.brandImage}
            items={brandBottomImages.slice(0, 2).map((publicId) => ({
              publicId,
            }))}
          />
          <CloudinaryImage
            alt=""
            className={brandStyles.brandImage}
            publicId={brandBottomImages[2]}
          />
        </div>
      </div>
    </div>
  )
}

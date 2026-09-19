import { ImageRow } from "../../shared/ImageRow"
import { CasesIntroSection } from "../CasesIntroSection"
import { CasesPrintsCarousel } from "./CasesPrintsCarousel"
import printsStyles from "./CasesPrintsSection.module.css"
import styles from "../CasesSection.module.css"

const printsImages = ["Udine_1_yt2whe", "Trieste_1_hn46vc"] as const

const carouselImages1 = [
  "CT-cartolina-1_1_mxi9hh",
  "CT-cartolina-5_1_mkefvs",
  "CT-cartolina-4_1_eyazcm",
  "CT-cartolina-3_1_hij9gh",
  "CT-cartolina-2_1_kv3hbl",
] as const

const carouselImages2 = [
  "IMG_3449_1_cuwbae",
  "IMG_3455_1_ajbv5c",
  "IMG_3454_1_eumcvr",
  "IMG_3453_1_vuizsm",
  "IMG_3452_1_zcatcl",
] as const

export const CasesPrintsSection = () => {
  return (
    <div className={styles.section} data-testid="cases-prints-section">
      <CasesIntroSection
        padding="24px"
        showImages={false}
        subtitleKey="cases.prints.subtitle"
        titleKey="cases.prints.title"
      />
      <ImageRow
        className={printsStyles.printsRow}
        imageClassName={printsStyles.printsImage}
        items={printsImages.map((publicId) => ({ publicId }))}
        testId="cases-prints-images"
      />
      <div
        className={printsStyles.printsCarousels}
        data-testid="cases-prints-carousels"
      >
        <CasesPrintsCarousel
          images={carouselImages1}
          testId="cases-prints-carousel-1"
        />
        <CasesPrintsCarousel
          images={carouselImages2}
          testId="cases-prints-carousel-2"
        />
      </div>
    </div>
  )
}

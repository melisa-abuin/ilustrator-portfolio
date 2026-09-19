import { ImageRow } from "../../shared/ImageRow"
import { CasesIntroSection } from "../CasesIntroSection"
import sectionStyles from "../CasesSection.module.css"
import styles from "./CasesConceptualSection.module.css"

// TODO: replace with real Cloudinary public IDs
const conceptualImageRows = [
  ["1-2_1_f8ihg0", "1-2_1_f8ihg0"],
  ["2-1_1_w5ajit", "2-2_1_mirrvq"],
  ["3-2_1_bpz2rg", "2-3_1_hj51xz", "3-2_1_bpz2rg", "3-2_1_bpz2rg"],
] as const

export const CasesConceptualSection = () => {
  return (
    <div
      className={sectionStyles.section}
      data-testid="cases-conceptual-section"
    >
      <div className={sectionStyles.introPadding}>
        <CasesIntroSection
          showImages={false}
          subtitleKey="cases.conceptual.subtitle"
          titleKey="cases.conceptual.title"
        />
      </div>
      <div
        aria-hidden="true"
        className={styles.conceptualGallery}
        data-testid="cases-conceptual-gallery"
      >
        {conceptualImageRows.map((row, rowIndex) => (
          <ImageRow
            className={styles[`conceptualRow${rowIndex + 1}`]}
            imageClassName={styles.conceptualImage}
            items={row.map((publicId) => ({ publicId }))}
            key={rowIndex}
          />
        ))}
      </div>
    </div>
  )
}

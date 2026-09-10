import styles from "./CasesEditorialSection.module.css"
import { CasesImageGridSection } from "./CasesImageGridSection"
import { CasesIntroSection } from "./CasesIntroSection"

export const CasesEditorialSection = () => {
  return (
    <div className={styles.editorial} data-testid="cases-editorial-section">
      <CasesIntroSection />
      <CasesImageGridSection testId="cases-image-grid-editorial" />
    </div>
  )
}

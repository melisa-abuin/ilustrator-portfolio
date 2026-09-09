import { CasesIntroSection } from "./CasesIntroSection"
import styles from "./CasesSection.module.css"

export const CasesConceptualSection = () => {
  return (
    <div className={styles.textOnly} data-testid="cases-conceptual-section">
      <CasesIntroSection
        padding="24px"
        showImages={false}
        subtitleKey="cases.conceptual.subtitle"
        titleKey="cases.conceptual.title"
      />
    </div>
  )
}
